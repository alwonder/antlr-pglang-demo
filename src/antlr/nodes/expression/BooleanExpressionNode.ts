import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import TwoMembersExpressionNode from 'antlr/nodes/expression/TwoMembersExpressionNode';
import BooleanOperatorNode from 'antlr/nodes/operator/BooleanOperatorNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export interface BooleanExpressionNodeProps {
  firstOperand: ExpressionNode;
  secondOperand: ExpressionNode;
  operator: BooleanOperatorNode;
}

export default class BooleanExpressionNode
  extends PlaygroundNode
  implements TwoMembersExpressionNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [ExpressionNode, BooleanOperatorNode, ExpressionNode];

  constructor(props: BooleanExpressionNodeProps) {
    super([props.firstOperand, props.operator, props.secondOperand]);
    this.forEach((child) => child.setParent(this));
  }

  getFirstOperand(): ExpressionNode {
    return this.children[0];
  }

  getSecondOperand(): ExpressionNode {
    return this.children[2];
  }

  getOperator(): BooleanOperatorNode {
    return this.children[1];
  }
}
