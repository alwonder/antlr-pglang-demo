import ArithmeticOperatorNode, {
  isArithmeticOperator,
} from 'antlr/nodes/operator/ArithmeticOperatorNode';
import BooleanOperatorNode, {
  isBooleanOperator,
} from 'antlr/nodes/operator/BooleanOperatorNode';
import ComparisonOperatorNode, {
  isComparisonOperator,
} from 'antlr/nodes/operator/ComparisonOperatorNode';
import OperatorNode from 'antlr/nodes/operator/OperatorNode';
import UnaryOperatorNode, {
  isUnaryOperator,
} from 'antlr/nodes/operator/UnaryOperatorNode';
import VarAssignmentOperatorNode, {
  isVarAssignmentOperator,
} from 'antlr/nodes/operator/VarAssignmentOperatorNode';
import { TerminalNodeImpl } from 'antlr4/tree/Tree';
import PlaygroundVisitorError from 'antlr/PlaygroundVisitorError';

export default class OperatorVisitor {
  static visitOperator(ctx: TerminalNodeImpl): OperatorNode {
    const ctxText = ctx.getText();

    if (isArithmeticOperator(ctxText))
      return new ArithmeticOperatorNode(ctxText);
    if (isBooleanOperator(ctxText)) return new BooleanOperatorNode(ctxText);
    if (isUnaryOperator(ctxText)) return new UnaryOperatorNode(ctxText);
    if (isComparisonOperator(ctxText))
      return new ComparisonOperatorNode(ctxText);
    if (isVarAssignmentOperator(ctxText))
      return new VarAssignmentOperatorNode(ctxText);

    throw new PlaygroundVisitorError(
      `Error while visiting operator terminal node. Unexpected operator '${ctxText}'`,
      ctx,
    );
  }
}
