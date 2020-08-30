import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
import TwoMembersExpressionNode from '@/antlr/nodes/expression/TwoMembersExpressionNode';
import ArithmeticOperatorNode from '@/antlr/nodes/operator/ArithmeticOperatorNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export interface ArithmeticExpressionNodeProps {
  firstOperand: ExpressionNode;
  secondOperand: ExpressionNode;
  operator: ArithmeticOperatorNode;
}

export default class ArithmeticExpressionNode
  extends PlaygroundNode
  implements TwoMembersExpressionNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [ExpressionNode, ArithmeticOperatorNode, ExpressionNode];

  constructor(props: ArithmeticExpressionNodeProps) {
    super([props.firstOperand, props.operator, props.secondOperand]);
    this.forEach((child) => child.setParent(this));
  }

  getFirstOperand(): ExpressionNode {
    return this.children[0];
  }

  getSecondOperand(): ExpressionNode {
    return this.children[2];
  }

  getOperator(): ArithmeticOperatorNode {
    return this.children[1];
  }
}
