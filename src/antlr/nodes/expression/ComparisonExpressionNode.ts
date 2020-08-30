import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import TwoMembersExpressionNode from 'antlr/nodes/expression/TwoMembersExpressionNode';
import ComparisonOperatorNode from 'antlr/nodes/operator/ComparisonOperatorNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export interface ComparisonExpressionNodeProps {
  firstOperand: ExpressionNode;
  secondOperand: ExpressionNode;
  operator: ComparisonOperatorNode;
}

export default class ComparisonExpressionNode
  extends PlaygroundNode
  implements TwoMembersExpressionNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [ExpressionNode, ComparisonOperatorNode, ExpressionNode];

  constructor(props: ComparisonExpressionNodeProps) {
    super([props.firstOperand, props.operator, props.secondOperand]);
    this.forEach((child) => child.setParent(this));
  }

  getFirstOperand(): ExpressionNode {
    return this.children[0];
  }

  getSecondOperand(): ExpressionNode {
    return this.children[2];
  }

  getOperator(): ComparisonOperatorNode {
    return this.children[1];
  }
}
