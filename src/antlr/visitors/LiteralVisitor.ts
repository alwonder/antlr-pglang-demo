import { LiteralContext } from '@/antlr/generated/PlaygroundParser';
import BooleanLiteralNode from '@/antlr/nodes/literal/BooleanLiteralNode';
import ConstantLiteralNode from '@/antlr/nodes/literal/ConstantLiteralNode';
import LiteralNode from '@/antlr/nodes/literal/LiteralNode';
import NumberLiteralNode from '@/antlr/nodes/literal/NumberLiteralNode';
import PlaygroundVisitorError from '@/antlr/PlaygroundVisitorError';
import StringLiteralNode from '@/antlr/nodes/literal/StringLiteralNode';

export default class LiteralVisitor {
  static visitLiteral(ctx: LiteralContext): LiteralNode {
    if (ctx.NUMBER_LITERAL()) return LiteralVisitor.visitNumberLiteral(ctx);
    if (ctx.BOOL_LITERAL()) return LiteralVisitor.visitBooleanLiteral(ctx);
    if (ctx.constantLiteral()) return LiteralVisitor.visitConstantLiteral(ctx);
    if (ctx.STRING_LITERAL()) return LiteralVisitor.visitStringLiteral(ctx);

    throw new PlaygroundVisitorError(
      'Error while visiting LiteralContext. No expected statements found',
      ctx,
    );
  }

  private static visitNumberLiteral(ctx: LiteralContext): NumberLiteralNode {
    let numberValue = Number(ctx.NUMBER_LITERAL().getText());

    // @ts-ignore
    if (ctx.sign && ctx.sign.text === '-') {
      numberValue *= -1;
    }

    return new NumberLiteralNode(numberValue);
  }

  private static visitBooleanLiteral(ctx: LiteralContext): BooleanLiteralNode {
    const booleanValue: boolean = ctx.BOOL_LITERAL().getText() === 'true';

    return new BooleanLiteralNode(booleanValue);
  }

  private static visitConstantLiteral(
    ctx: LiteralContext,
  ): ConstantLiteralNode {
    return new ConstantLiteralNode(ctx.getText());
  }

  private static visitStringLiteral(ctx: LiteralContext): StringLiteralNode {
    return new StringLiteralNode(ctx.getText().replace(/^["'](.*)["']$/, '$1'));
  }
}
