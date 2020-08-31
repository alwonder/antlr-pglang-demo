import PlaygroundInterpreter from '@/antlr/PlaygroundInterpreter';

export default function parse(input: string) {
  const { tree, errors } = PlaygroundInterpreter.parseCode(input);
  if (errors) {
    throw new Error(
      `Parse error. line ${errors[0].line}, col ${errors[0].column}: ${errors[0].msg}`,
    );
  }
  return tree;
}
