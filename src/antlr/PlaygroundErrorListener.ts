import { Recognizer, Token } from 'antlr4';
import { ErrorListener } from 'antlr4/error/ErrorListener';

export interface PlaygroundParseError {
  line: number;
  column: number;
  msg: string;
  value?: string;
}

export default class PlaygroundErrorListener extends ErrorListener {
  errors: PlaygroundParseError[] = [];

  syntaxError(
    recognizer: Recognizer,
    offendingSymbol: Token,
    line: number,
    column: number,
    msg: string,
  ) {
    this.errors.push({
      line,
      column,
      msg,
    });
  }
}
