import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
import OperatorNode from '@/antlr/nodes/operator/OperatorNode';

export default interface TwoMembersExpressionNode extends ExpressionNode {
  getFirstOperand(): ExpressionNode;
  getSecondOperand(): ExpressionNode;
  getOperator(): OperatorNode;
}
