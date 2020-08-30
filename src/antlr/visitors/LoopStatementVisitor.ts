import {
  LoopStatementContext,
  WhileStatementContext,
} from '@/antlr/generated/PlaygroundParser';
import LoopStatementNode from '@/antlr/nodes/LoopStatementNode';
import ExpressionVisitor from '@/antlr/visitors/ExpressionVisitor';
import PlaygroundCustomVisitor from '@/antlr/visitors/PlaygroundCustomVisitor';
import WhileStatementNode from '../nodes/WhileStatementNode';

export default class LoopStatementVisitor {
  static visitLoopStatement(ctx: LoopStatementContext): LoopStatementNode {
    return new LoopStatementNode(
      ExpressionVisitor.visitExpression(ctx.expression()),
      PlaygroundCustomVisitor.visitScope(ctx.scope()),
    );
  }

  static visitWhileStatement(ctx: WhileStatementContext): WhileStatementNode {
    return new WhileStatementNode(
      ExpressionVisitor.visitExpression(ctx.expression()),
      PlaygroundCustomVisitor.visitScope(ctx.scope()),
    );
  }
}
