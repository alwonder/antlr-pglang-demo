import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import ScopeNode from 'antlr/nodes/ScopeNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class RootNode extends PlaygroundNode {
  readonly nodeType = NodeTypes.ROOT;

  parent = undefined;

  /**
   * RootScope has only one ScopeNode child
   * @type {[ScopeNode]}
   * @memberof RootNode
   */
  children!: [ScopeNode];

  constructor(scope: ScopeNode) {
    super([scope]);
    this.forEach((child) => child.setParent(this));
  }

  setParent(parent: PlaygroundNode) {
    throw new Error('Cannot set parent for RootNode');
  }

  getScope() {
    return this.children[0];
  }
}
