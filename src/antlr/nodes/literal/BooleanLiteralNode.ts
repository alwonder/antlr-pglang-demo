import LiteralNode from 'antlr/nodes/literal/LiteralNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class BooleanLiteralNode
  extends PlaygroundNode
  implements LiteralNode {
  readonly nodeType = NodeTypes.LITERAL;

  private value: boolean;

  constructor(value: boolean) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: boolean) {
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
