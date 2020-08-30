import {
  LiteralContext,
  LiteralParamContext,
  MethodParamContext,
  StaticMethodCallContext,
  ExpressionParamContext,
  ExpressionContext,
  IdentifierParamContext,
  ObjectIdentifierContext,
} from '@/antlr/generated/PlaygroundParser';
import IdentifierNode from '@/antlr/nodes/IdentifierNode';
import LiteralNode from '@/antlr/nodes/literal/LiteralNode';
import StaticMethodCallNode, {
  StaticMethodCallNodeProps,
} from '@/antlr/nodes/StaticMethodCallNode';
import PlaygroundVisitorError from '@/antlr/PlaygroundVisitorError';
import ExpressionVisitor from '@/antlr/visitors/ExpressionVisitor';
import LiteralVisitor from '@/antlr/visitors/LiteralVisitor';
import ExpressionNode from '../nodes/expression/ExpressionNode';
import ObjectVisitor from './ObjectVisitor';
import ObjectIdentifierNode from '../nodes/ObjectIdentifierNode';

export default class StaticMethodCallVisitor {
  static visitStaticMethodCall(
    ctx: StaticMethodCallContext,
  ): StaticMethodCallNode {
    // @ts-ignore
    const methodParams: MethodParamContext[] = ctx.methodParam();

    const props: StaticMethodCallNodeProps = {
      method: ctx.getChild(0).getText(),
      params: methodParams.map((param: MethodParamContext) =>
        StaticMethodCallVisitor.visitMethodParam(param),
      ),
    };

    return new StaticMethodCallNode(props, ctx.start.line);
  }

  private static visitMethodParam(
    ctx: MethodParamContext,
  ): ObjectIdentifierNode | LiteralNode | ExpressionNode {
    if (ctx instanceof IdentifierParamContext) {
      const identifier: ObjectIdentifierContext = ctx.objectIdentifier();
      return ObjectVisitor.visitObjectIdentifier(identifier);
    }

    if (ctx instanceof LiteralParamContext) {
      const literal: LiteralContext = ctx.literal();
      return LiteralVisitor.visitLiteral(literal);
    }

    if (ctx instanceof ExpressionParamContext) {
      const expression: ExpressionContext = ctx.expression();
      return ExpressionVisitor.visitExpression(expression);
    }

    throw new PlaygroundVisitorError(
      'Error while visiting MethodParamContext. No expected statements found',
      ctx,
    );
  }
}
