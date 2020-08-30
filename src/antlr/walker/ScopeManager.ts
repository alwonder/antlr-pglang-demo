import ScopeNode from 'antlr/nodes/ScopeNode';
import VarAssignmentNode from 'antlr/nodes/VarAssignmentNode';
import VarDeclarationNode from 'antlr/nodes/VarDeclarationNode';
import PlaygroundTreeWalker from 'antlr/walker/PlaygroundTreeWalker';
import { PlaygroundWalkerModule } from 'antlr/walker/PlaygroundWalkerModule';
import RuntimeError from './RuntimeError';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';

export interface Scope {
  scopeNode: ScopeNode | undefined;
  parentScope: Scope | undefined;
  variables: Map<string, any>;
}

export interface GlobalScope extends Scope {
  scopeNode: undefined;
  parentScope: undefined;
}

export default class ScopeManager implements PlaygroundWalkerModule {
  readonly walker: PlaygroundTreeWalker;

  readonly globalScope: GlobalScope = {
    scopeNode: undefined,
    parentScope: undefined,
    variables: new Map(),
  };

  private readonly scopes = new Set<Scope>();

  constructor(walker: PlaygroundTreeWalker) {
    this.walker = walker;
  }

  setGlobalVariable(name: string, value: any) {
    this.globalScope.variables.set(name, value);
  }

  createScope(scopeNode: ScopeNode, parentScope?: Scope) {
    const scope: Scope = {
      scopeNode,
      parentScope,
      variables: new Map(),
    };
    this.scopes.add(scope);
    return scope;
  }

  deleteScope(scope: Scope) {
    this.scopes.delete(scope);
  }

  clearScopes() {
    this.scopes.clear();
  }

  activeScopesCount() {
    return this.scopes.size;
  }

  declareVariable(node: VarDeclarationNode, scope: Scope) {
    const variableName = node.getVariableName();
    if (scope.variables.has(variableName)) {
      throw new RuntimeError(
        `Variable "${variableName}" is already declared in this scope`,
        node.line,
      );
    }
    scope.variables.set(variableName, undefined);

    const assignment = node.getAssignment();
    if (assignment) {
      scope.variables.set(
        node.getVariableName(),
        this.walker.calculateExpression(assignment, scope),
      );
    }
  }

  assignVariable(node: VarAssignmentNode, scope: Scope) {
    const variableName = node.getVariableName();
    const operator = node.getOperator();
    const { variable, value, foundScope } = this.getVariableInScope(
      scope,
      variableName,
      node,
    );
    let newValue;
    switch (operator.getValue()) {
      case '=':
        newValue = this.walker.calculateExpression(node.getAssignment(), scope);
        break;
      case '-=':
        newValue =
          value - this.walker.calculateExpression(node.getAssignment(), scope);
        break;
      case '+=':
        newValue =
          value + this.walker.calculateExpression(node.getAssignment(), scope);
        break;
    }
    foundScope.variables.set(variable, newValue);
  }

  getVariableInScope(
    scope: Scope,
    variableName: string,
    callNode: PlaygroundNode,
  ): { variable: string; value: any; foundScope: Scope } {
    for (const [variable, value] of scope.variables.entries()) {
      // if (variable instanceof IdentifierNode) {
      //   const currentName = this.getVariableInScope(variable)
      // }

      if (variable === variableName) {
        return { variable, value, foundScope: scope };
      }
    }

    if (!scope.parentScope) {
      throw new RuntimeError(
        `The variable '${variableName}' is not defined in this scope`,
        callNode.line,
      );
    }
    return this.getVariableInScope(scope.parentScope, variableName, callNode);
  }
}
