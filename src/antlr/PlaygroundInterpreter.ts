import { PlaygroundLexer } from 'antlr/generated/PlaygroundLexer';
import { PlaygroundParser } from 'antlr/generated/PlaygroundParser';
import RootNode from 'antlr/nodes/RootNode';
import PlaygroundErrorListener, {
  PlaygroundParseError,
} from 'antlr/PlaygroundErrorListener';
import PlaygroundCustomVisitor from 'antlr/visitors/PlaygroundCustomVisitor';
import { CommonTokenStream, InputStream } from 'antlr4';
import PlaygroundNode from './nodes/PlaygroundNode';
import EventStatementNode from './nodes/EventStatementNode';
import VarDeclarationNode from './nodes/VarDeclarationNode';
import IdentifierNode from './nodes/IdentifierNode';

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

    // const errors = this.variableUndefined(new PlaygroundCustomVisitor().visitParse(tree));
    // if (errors.length) {
    //   return { errors };
    // }

    return { tree: new PlaygroundCustomVisitor().visitParse(tree) };
  }

  // переменные объявленные в условиях и циклах. как в js?
  // ObjectMethodCallNode
  private static variableUndefined(
    node: PlaygroundNode,
    variablesInScope: string[] = [],
  ) {
    const errors: PlaygroundParseError[] = [];
    if (node instanceof EventStatementNode) {
      variablesInScope.push(
        ...node.getParams().map((param) => param.getValue()),
      );
    }
    node.forEach((child) => {
      if (child instanceof VarDeclarationNode) {
        variablesInScope.push(child.getVariableName());
      }
      if (child instanceof IdentifierNode) {
        if (
          variablesInScope.find((variable) => variable === child.getValue()) ===
          undefined
        ) {
          errors.push({
            line: child.line,
            column: 0,
            // msg: `UndefinedVariable`,
            msg: `UnknownError`,
            value: child.getValue(),
          });
        }
      }
      errors.push(...this.variableUndefined(child, variablesInScope));
    });
    return errors;
  }
}
