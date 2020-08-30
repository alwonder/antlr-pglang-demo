import EventStatementNode from 'antlr/nodes/EventStatementNode';
import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import RootNode from 'antlr/nodes/RootNode';
import ScopeNode from 'antlr/nodes/ScopeNode';
import {
  isConditionalNode,
  isEventStatementNode,
  isLoopStatementNode,
  isObjectMethodCallNode,
  isStaticMethodCallNode,
  isScopeNode,
  isVarAssignmentNode,
  isVarDeclarationNode,
  isObjectPropertyAssignmentNode,
  isWhileStatementNode,
} from 'antlr/NodeTypes';
import ConditionalWalker from 'antlr/walker/ConditionalWalker';
import ExpressionWalker from 'antlr/walker/ExpressionWalker';
import FunctionManager from 'antlr/walker/FunctionManager';
import LoopWalker from 'antlr/walker/LoopWalker';
import ScopeManager, { Scope } from 'antlr/walker/ScopeManager';

export default class PlaygroundTreeWalker {
  public readonly tree: RootNode;

  private readonly conditionalWalker = new ConditionalWalker(this);

  private readonly expressionWalker = new ExpressionWalker(this);

  private readonly functionManager = new FunctionManager(this);

  private readonly loopWalker = new LoopWalker(this);

  private readonly scopeManager = new ScopeManager(this);

  constructor(tree: RootNode) {
    if (!PlaygroundTreeWalker.isAcyclic(tree)) {
      throw new Error(
        'Error while creating PlaygroundTreeWalker instance. The input tree is not acyclic',
      );
    }
    this.tree = tree;
    this.functionManager.scanFunctions();
  }

  public getFunctionManager() {
    return this.functionManager;
  }

  /**
   * Starts walking through the tree and invoking different
   * PlaygroundWalkerModule methods for its nodes.
   * Usually calls on game runtime start.
   * @memberof PlaygroundTreeWalker
   */
  public walk() {
    const rootScopeNode = this.tree.getScope();
    // Инициализация rootScope значением globalScope нужна для того чтобы в нем были видны переменные, которые
    // объявлены на верхнем уровне
    // const rootScope = this.scopeManager.createScope(rootScopeNode, this.scopeManager.globalScope);
    const rootScope = this.scopeManager.globalScope;
    try {
      rootScopeNode.forEach((node) => this.handleNode(node, rootScope));
    } finally {
      this.scopeManager.clearScopes();
    }

    this.checkActiveScopes();
  }

  public invokeFunction(
    func: EventStatementNode,
    args: any[] = [],
    scope?: Scope,
  ) {
    this.functionManager.invokeFunction(func, args, scope);
  }

  public invokeEvents(name: string, ...params: any[]) {
    this.functionManager.invokeEvents(name, ...params);
  }

  /**
   * Calculates the expression and returns its result.
   *
   * Use it only for tests or from walker's modules.
   * @param {ExpressionNode} expression Expression to calculate.
   * @returns any
   * @memberof PlaygroundTreeWalker
   */
  public calculateExpression(expression: ExpressionNode, scope: Scope): any {
    return this.expressionWalker.calculateExpression(expression, scope);
  }

  /**
   * The walker should delete all runtime scopes after completion.
   * If you see this error message, then the walker probably omits some scopes
   * or completes them wrong. You shouldn't just ignore this message.
   * @private
   * @memberof PlaygroundTreeWalker
   */
  private checkActiveScopes() {
    const activeScopesCount = this.scopeManager.activeScopesCount();
    if (activeScopesCount > 0) {
      // tslint:disable-next-line:no-console
      console.error(
        `The scope manager ended up with ${activeScopesCount} hanging scope(s). ` +
          "Seems like something's wrong.",
      );
    }
  }

  setGlobalVariable(name: string, value: any) {
    this.scopeManager.setGlobalVariable(name, value);
  }

  getVariableInScope(
    scope: Scope,
    variableName: string,
    callNode: PlaygroundNode,
  ): { variable: string; value: any; foundScope: Scope } {
    return this.scopeManager.getVariableInScope(scope, variableName, callNode);
  }

  public getGlobalScope() {
    return this.scopeManager.globalScope;
  }

  public createScope(scopeNode: ScopeNode, parentScope?: Scope) {
    return this.scopeManager.createScope(scopeNode, parentScope);
  }

  public deleteScope(scope: Scope) {
    this.scopeManager.deleteScope(scope);
  }

  /**
   * Gets current node instance and invokes required PlaygroundWalkerModule method for it.
   * @private
   * @param {PlaygroundNode} node The current node.
   * @returns void
   * @memberof PlaygroundTreeWalker
   */
  handleNode(node: PlaygroundNode, scope: Scope) {
    if (isScopeNode(node)) {
      this.handleScopeNode(node, scope);
      return;
    }

    if (isEventStatementNode(node)) {
      return;
    }

    if (isObjectMethodCallNode(node)) {
      // No any objects yet, in the real project there were pre-created specific objects
      return;
    }

    if (isStaticMethodCallNode(node)) {
      // No static methods yet either, they were pre-defined too
      return;
    }

    if (isVarDeclarationNode(node)) {
      this.scopeManager.declareVariable(node, scope);
      return;
    }

    if (isVarAssignmentNode(node)) {
      this.scopeManager.assignVariable(node, scope);
      return;
    }

    if (isObjectPropertyAssignmentNode(node)) {
      // ¯\_(ツ)_/¯
      return;
    }

    if (isConditionalNode(node)) {
      this.conditionalWalker.handleConditionalNode(node, scope);
      return;
    }

    if (isLoopStatementNode(node)) {
      this.loopWalker.handleLoopStatementNode(node, scope);
      return;
    }

    if (isWhileStatementNode(node)) {
      this.loopWalker.handleWhileStatementNode(node, scope);
      return;
    }

    node.forEach((child) => this.handleNode(child, scope));
  }

  handleScopeNode(node: ScopeNode, scope: Scope) {
    const newScope = this.scopeManager.createScope(node, scope);
    node.forEach((child) => this.handleNode(child, newScope));
    this.scopeManager.deleteScope(newScope);
  }

  walkThroughUpperScopes(
    node: PlaygroundNode,
    callback: (node: ScopeNode) => void,
  ): void {
    if (node instanceof ScopeNode) {
      callback(node);
    }
    const parent = node.getParent();
    if (parent) {
      this.walkThroughUpperScopes(parent, callback);
    }
  }

  /**
   * Checks if the tree doesn't have any cyclic children chains.
   * You can check the tree before `walk` or `reduce` methods to avoid endless recursions.
   * @static
   * @param root Root tree node.
   * @returns {boolean} Whether the tree has no cyclic children chains.
   * @memberof PlaygroundTreeWalker
   */
  static isAcyclic(root: RootNode): boolean {
    // Root node shouldn't have any parents.
    if (root.parent !== undefined) return false;

    const breakException = {};
    try {
      const childrenSet = new WeakSet<PlaygroundNode>();
      root.walk((node) => {
        if (childrenSet.has(node)) throw breakException;
        childrenSet.add(node);
      });
      return true;
    } catch (e) {
      if (e !== breakException) throw e;
      return false;
    }
  }
}
