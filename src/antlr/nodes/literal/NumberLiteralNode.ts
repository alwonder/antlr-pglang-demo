import LiteralNode from 'antlr/nodes/literal/LiteralNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class NumberLiteralNode
  extends PlaygroundNode
  implements LiteralNode {
  readonly nodeType = NodeTypes.LITERAL;

  private value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: number) {
    this.value = value;
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
