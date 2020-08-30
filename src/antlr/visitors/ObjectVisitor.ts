import {
  IdentifierParamContext,
  LiteralContext,
  LiteralParamContext,
  MethodParamContext,
  ObjectIdentifierContext,
  ObjectMethodCallContext,
  ObjectPropertyAssignmentContext,
  ObjectPropertyContext,
  ExpressionParamContext,
  ExpressionContext,
} from 'antlr/generated/PlaygroundParser';
import IdentifierNode from 'antlr/nodes/IdentifierNode';
import LiteralNode from 'antlr/nodes/literal/LiteralNode';
import ObjectMethodCallNode, {
  ObjectMethodCallNodeProps,
} from 'antlr/nodes/ObjectMethodCallNode';
import ObjectPropertyAssignmentNode from 'antlr/nodes/ObjectPropertyAssignmentNode';
import ObjectPropertyNode from 'antlr/nodes/ObjectPropertyNode';
import PlaygroundVisitorError from 'antlr/PlaygroundVisitorError';
import ExpressionVisitor from 'antlr/visitors/ExpressionVisitor';
import LiteralVisitor from 'antlr/visitors/LiteralVisitor';
import PlaygroundCustomVisitor from 'antlr/visitors/PlaygroundCustomVisitor';
import ObjectIdentifierNode from 'antlr/nodes/ObjectIdentifierNode';
import ExpressionNode from '../nodes/expression/ExpressionNode';
import OperatorVisitor from './OperatorVisitor';
import VarAssignmentOperatorNode from '../nodes/operator/VarAssignmentOperatorNode';

export default class ObjectVisitor {
  static visitObjectProperty(ctx: ObjectPropertyContext): ObjectPropertyNode {
    const objectIdentifier = ObjectVisitor.visitObjectIdentifier(
      ctx.objectIdentifier(),
    );
    return new ObjectPropertyNode(
      objectIdentifier,
      ctx.getChild(2).getText(),
      ctx.start.line,
    );
  }

  static visitObjectIdentifier(
    ctx: ObjectIdentifierContext,
  ): ObjectIdentifierNode {
    const identifier = ctx.IDENTIFIER();
    if (identifier) {
      return new ObjectIdentifierNode(identifier.getText(), ctx.start.line);
    }

    const thisIdentifier = ctx.THIS();
    if (thisIdentifier) {
      return new ObjectIdentifierNode(thisIdentifier.getText(), ctx.start.line);
    }

    throw new PlaygroundVisitorError(
      'Error while visiting ObjectIdentifierContext. No expected statements found',
      ctx,
    );
  }

  static visitObjectPropertyAssignment(
    ctx: ObjectPropertyAssignmentContext,
  ): ObjectPropertyAssignmentNode {
    const property = ObjectVisitor.visitObjectProperty(ctx.objectProperty());
    const operator = OperatorVisitor.visitOperator(
      ctx.getChild(1),
    ) as VarAssignmentOperatorNode;
    const assignment = ExpressionVisitor.visitExpression(ctx.expression());
    return new ObjectPropertyAssignmentNode(
      property,
      operator,
      assignment,
      ctx.start.line,
    );
  }

  static visitObjectMethodCall(
    ctx: ObjectMethodCallContext,
  ): ObjectMethodCallNode {
    // @ts-ignore
    const methodParams: MethodParamContext[] = ctx.methodParam();

    const props: ObjectMethodCallNodeProps = {
      object: ObjectVisitor.visitObjectIdentifier(ctx.objectIdentifier()),
      method: ctx.getChild(2).getText(),
      params: methodParams.map((param: MethodParamContext) =>
        ObjectVisitor.visitMethodParam(param),
      ),
    };

    return new ObjectMethodCallNode(props, ctx.start.line);
  }

  private static visitMethodParam(
    ctx: MethodParamContext,
  ): IdentifierNode | LiteralNode | ExpressionNode {
    if (ctx instanceof IdentifierParamContext) {
      const objectIdentifier: ObjectIdentifierContext = ctx.objectIdentifier();
      return PlaygroundCustomVisitor.visitIdentifier(objectIdentifier);
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
