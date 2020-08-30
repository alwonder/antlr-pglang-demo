import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import ScopeNode from '@/antlr/nodes/ScopeNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export default class LoopStatementNode extends PlaygroundNode {
  readonly nodeType = NodeTypes.LOOP_STATEMENT;

  children!: [ExpressionNode, ScopeNode];

  constructor(iterations: ExpressionNode, body: ScopeNode) {
    super([iterations, body]);
    this.forEach((child) => child.setParent(this));
  }

  getIterations() {
    return this.children[0];
  }

  getBody() {
    return this.children[1];
  }
}
