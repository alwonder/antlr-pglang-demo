import {
  ConditionalStatementContext,
  ElseCondiitionalContext,
  ElseIfConditionalContext,
  ScopeContext,
  ThenConditionalContext,
} from 'antlr/generated/PlaygroundParser';
import ConditionalNode from 'antlr/nodes/conditional/ConditionalNode';
import ElseConditionalNode from 'antlr/nodes/conditional/ElseConditionalNode';
import ElseIfConditionalNode from 'antlr/nodes/conditional/ElseIfConditionalNode';
import ThenConditionalNode from 'antlr/nodes/conditional/ThenConditionalNode';
import ExpressionVisitor from 'antlr/visitors/ExpressionVisitor';
import PlaygroundCustomVisitor from 'antlr/visitors/PlaygroundCustomVisitor';
import PlaygroundVisitorError from 'antlr/PlaygroundVisitorError';

export default class ConditionalVisitor {
  static visitConditional(ctx: ConditionalStatementContext): ConditionalNode {
    if (ctx instanceof ThenConditionalContext) {
      return ConditionalVisitor.visitThenConditional(ctx);
    }

    if (ctx instanceof ElseCondiitionalContext) {
      return ConditionalVisitor.visitElseConditional(ctx);
    }

    if (ctx instanceof ElseIfConditionalContext) {
      return ConditionalVisitor.visitElseIfConditional(ctx);
    }

    throw new PlaygroundVisitorError(
      'Error while visiting ConditionalStatementContext. No expected statements found',
      ctx,
    );
  }

  private static visitThenConditional(
    ctx: ThenConditionalContext,
  ): ThenConditionalNode {
    return new ThenConditionalNode({
      condition: ExpressionVisitor.visitExpression(ctx.expression()),
      consequent: PlaygroundCustomVisitor.visitScope(ctx.scope()),
    });
  }

  private static visitElseConditional(
    ctx: ElseCondiitionalContext,
  ): ElseConditionalNode {
    // @ts-ignore
    const [consequentContext, alternativeContext]: ScopeContext[] = ctx.scope();

    return new ElseConditionalNode({
      condition: ExpressionVisitor.visitExpression(ctx.expression()),
      consequent: PlaygroundCustomVisitor.visitScope(consequentContext),
      alternative: PlaygroundCustomVisitor.visitScope(alternativeContext),
    });
  }

  private static visitElseIfConditional(
    ctx: ElseIfConditionalContext,
  ): ElseIfConditionalNode {
    return new ElseIfConditionalNode({
      condition: ExpressionVisitor.visitExpression(ctx.expression()),
      consequent: PlaygroundCustomVisitor.visitScope(ctx.scope()),
      alternative: ConditionalVisitor.visitConditional(
        ctx.conditionalStatement(),
      ),
    });
  }
}
