import {
  AddSubExprContext,
  BooleanExprContext,
  ComparisonExprContext,
  ExpressionContext,
  MulDivExprContext,
  ObjectCallExprContext,
  StaticCallExprContext,
  ParensExprContext,
  PrimaryExprContext,
  UnaryExprContext,
  ObjectPropExprContext,
} from 'antlr/generated/PlaygroundParser';
import ArithmeticExpressionNode, {
  ArithmeticExpressionNodeProps,
} from 'antlr/nodes/expression/ArithmeticExpressionNode';
import BooleanExpressionNode, {
  BooleanExpressionNodeProps,
} from 'antlr/nodes/expression/BooleanExpressionNode';
import ComparisonExpressionNode, {
  ComparisonExpressionNodeProps,
} from 'antlr/nodes/expression/ComparisonExpressionNode';
import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import MethodCallExpressionNode from 'antlr/nodes/expression/MethodCallExpressionNode';
import StaticMethodCallExpressionNode from 'antlr/nodes/expression/StaticMethodCallExpressionNode';
import ParenthesesExpressionNode from 'antlr/nodes/expression/ParenthesesExpressionNode';
import PrimaryExpressionNode from 'antlr/nodes/expression/PrimaryExpressionNode';
import TwoMembersExpressionNode from 'antlr/nodes/expression/TwoMembersExpressionNode';
import UnaryExpressionNode from 'antlr/nodes/expression/UnaryExpressionNode';
import ArithmeticOperatorNode from 'antlr/nodes/operator/ArithmeticOperatorNode';
import BooleanOperatorNode from 'antlr/nodes/operator/BooleanOperatorNode';
import ComparisonOperatorNode from 'antlr/nodes/operator/ComparisonOperatorNode';
import UnaryOperatorNode from 'antlr/nodes/operator/UnaryOperatorNode';
import LiteralVisitor from 'antlr/visitors/LiteralVisitor';
import ObjectVisitor from 'antlr/visitors/ObjectVisitor';
import StaticMethodCallVisitor from 'antlr/visitors/StaticMethodCallVisitor';
import OperatorVisitor from 'antlr/visitors/OperatorVisitor';
import PlaygroundCustomVisitor from 'antlr/visitors/PlaygroundCustomVisitor';
import PlaygroundVisitorError from 'antlr/PlaygroundVisitorError';
import ObjectPropExpressionNode from 'antlr/nodes/expression/ObjectPropExpressionNode';

export default class ExpressionVisitor {
  static visitExpression(ctx: ExpressionContext): ExpressionNode {
    if (ctx instanceof PrimaryExprContext) {
      return ExpressionVisitor.visitPrimaryExpression(ctx);
    }

    if (ctx instanceof ObjectPropExprContext) {
      return ExpressionVisitor.visitObjectPropertyExpression(ctx);
    }

    if (ctx instanceof ObjectCallExprContext) {
      return ExpressionVisitor.visitObjectMethodCallExpression(ctx);
    }

    if (ctx instanceof ParensExprContext) {
      return ExpressionVisitor.visitParenthesesExpression(ctx);
    }

    if (ctx instanceof UnaryExprContext) {
      return ExpressionVisitor.visitUnaryExpression(ctx);
    }

    if (
      ctx instanceof AddSubExprContext ||
      ctx instanceof MulDivExprContext ||
      ctx instanceof BooleanExprContext ||
      ctx instanceof ComparisonExprContext
    ) {
      return ExpressionVisitor.visitTwoMembersExpression(ctx);
    }

    if (ctx instanceof StaticCallExprContext) {
      return ExpressionVisitor.visitStaticMethodCallExpression(ctx);
    }

    throw new PlaygroundVisitorError(
      'Error while visiting ExpressionContext. No expected statements found',
      ctx,
    );
  }

  private static visitPrimaryExpression(
    ctx: PrimaryExprContext,
  ): PrimaryExpressionNode {
    const primary = ctx.primary();

    const identifier = primary.objectIdentifier();
    if (identifier) {
      return new PrimaryExpressionNode(
        PlaygroundCustomVisitor.visitIdentifier(identifier),
        ctx.start.line,
      );
    }

    const literal = primary.literal();
    if (literal) {
      return new PrimaryExpressionNode(
        LiteralVisitor.visitLiteral(literal),
        ctx.start.line,
      );
    }

    throw new PlaygroundVisitorError(
      "Error while visiting PrimaryExprContext. Neither identifier nor literal weren't found",
      ctx,
    );
  }

  private static visitObjectPropertyExpression(
    ctx: ObjectPropExprContext,
  ): ObjectPropExpressionNode {
    const value = ObjectVisitor.visitObjectProperty(ctx.objectProperty());
    return new ObjectPropExpressionNode(value);
  }

  private static visitObjectMethodCallExpression(
    ctx: ObjectCallExprContext,
  ): MethodCallExpressionNode {
    const value = ObjectVisitor.visitObjectMethodCall(ctx.objectMethodCall());
    return new MethodCallExpressionNode(value);
  }

  private static visitStaticMethodCallExpression(
    ctx: StaticCallExprContext,
  ): StaticMethodCallExpressionNode {
    const value = StaticMethodCallVisitor.visitStaticMethodCall(
      ctx.staticMethodCall(),
    );
    return new StaticMethodCallExpressionNode(value);
  }

  private static visitParenthesesExpression(
    ctx: ParensExprContext,
  ): ParenthesesExpressionNode {
    const expression = ExpressionVisitor.visitExpression(ctx.expression());
    return new ParenthesesExpressionNode(expression);
  }

  private static visitUnaryExpression(
    ctx: UnaryExprContext,
  ): UnaryExpressionNode {
    const operator = OperatorVisitor.visitOperator(
      ctx.getChild(0),
    ) as UnaryOperatorNode;
    const operand = ExpressionVisitor.visitExpression(ctx.getChild(1));

    return new UnaryExpressionNode(operator, operand);
  }

  private static visitTwoMembersExpression(
    ctx: ExpressionContext,
  ): TwoMembersExpressionNode {
    const operator = OperatorVisitor.visitOperator(ctx.getChild(1));
    const props = {
      operator,
      firstOperand: ExpressionVisitor.visitExpression(ctx.getChild(0)),
      secondOperand: ExpressionVisitor.visitExpression(ctx.getChild(2)),
    };

    if (operator instanceof ArithmeticOperatorNode) {
      return new ArithmeticExpressionNode(
        props as ArithmeticExpressionNodeProps,
      );
    }
    if (operator instanceof BooleanOperatorNode) {
      return new BooleanExpressionNode(props as BooleanExpressionNodeProps);
    }
    if (operator instanceof ComparisonOperatorNode) {
      return new ComparisonExpressionNode(
        props as ComparisonExpressionNodeProps,
      );
    }

    throw new PlaygroundVisitorError(
      'Error while visiting TwoMembersExpression. No expected operators found',
      ctx,
    );
  }
}
