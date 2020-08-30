import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export default class IdentifierNode extends PlaygroundNode {
  readonly nodeType = NodeTypes.IDENTIFIER;

  private value: string;

  children: PlaygroundNode[] = [];

  constructor(value: string, line: number) {
    super(undefined, line);
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  forEach(
    callback: (
      value: PlaygroundNode,
      index: number,
      arr: PlaygroundNode[],
    ) => void,
  ) {}

  async forEachAsync(
    callback: (
      value: PlaygroundNode,
      index: number,
      arr: PlaygroundNode[],
    ) => Promise<void>,
  ) {}
}
