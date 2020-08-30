import { PlaygroundLexer } from '@/antlr/generated/PlaygroundLexer';
import { PlaygroundParser } from '@/antlr/generated/PlaygroundParser';
import RootNode from '@/antlr/nodes/RootNode';
import PlaygroundErrorListener, {
  PlaygroundParseError,
} from '@/antlr/PlaygroundErrorListener';
import PlaygroundCustomVisitor from '@/antlr/visitors/PlaygroundCustomVisitor';
import { CommonTokenStream, InputStream } from 'antlr4';

export interface InterpreterParseResult {
  tree?: RootNode;
  errors?: PlaygroundParseError[];
}

export default class PlaygroundInterpreter {
  static parseCode(input: string): InterpreterParseResult {
    const inputStream = new InputStream(input);
    const lexer = new PlaygroundLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    const parser = new PlaygroundParser(tokenStream);
    parser.buildParseTrees = true;
    const errorListener = new PlaygroundErrorListener();
    parser.addErrorListener(errorListener);
    const tree = parser.parse();

    if (errorListener.errors.length > 0) {
      return { errors: errorListener.errors };
    }

    return { tree: new PlaygroundCustomVisitor().visitParse(tree) };
  }
}
