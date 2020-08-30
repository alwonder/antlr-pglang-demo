import { ParserRuleContext } from 'antlr4';
import { TerminalNodeImpl } from 'antlr4/tree/Tree';

export default class PlaygroundVisitorError extends Error {
  ruleContext: ParserRuleContext | TerminalNodeImpl;

  constructor(message: string, ctx: ParserRuleContext | TerminalNodeImpl) {
    super(message);
    this.ruleContext = ctx;
    Object.setPrototypeOf(this, PlaygroundVisitorError.prototype);
  }
}
