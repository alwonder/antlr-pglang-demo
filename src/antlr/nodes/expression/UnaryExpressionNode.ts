import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
import UnaryOperatorNode from '@/antlr/nodes/operator/UnaryOperatorNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export default class UnaryExpressionNode extends PlaygroundNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [UnaryOperatorNode, ExpressionNode];

  constructor(operator: UnaryOperatorNode, operand: ExpressionNode) {
    super([operator, operand]);
    this.forEach((child) => child.setParent(this));
  }

  getOperator(): UnaryOperatorNode {
    return this.children[0];
  }

  getOperand(): ExpressionNode {
    return this.children[1];
  }
}
