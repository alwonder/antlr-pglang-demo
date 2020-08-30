import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import VarDeclarationNode from 'antlr/nodes/VarDeclarationNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class ScopeNode extends PlaygroundNode {
  readonly nodeType = NodeTypes.SCOPE;

  constructor(children?: PlaygroundNode[], line?: number) {
    super(children, line);
    this.forEach((child) => child.setParent(this));
  }

  getChildren() {
    return this.children;
  }

  getChild(index: number) {
    return this.children[index];
  }

  /**
   * Get all declared variables within the current scope.
   * @returns {string[]} The array of found variable names.
   * @memberof ScopeNode
   */
  getDeclaredVariables(): VarDeclarationNode[] {
    const varDeclarations = this.children.filter(
      (child) => child instanceof VarDeclarationNode,
    ) as VarDeclarationNode[];
    return varDeclarations;
  }
}
