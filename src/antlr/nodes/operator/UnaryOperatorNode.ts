import OperatorNode from 'antlr/nodes/operator/OperatorNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export type UnaryOperator = 'NOT' | '-';

export function isUnaryOperator(value: string): value is UnaryOperator {
  return ['NOT', '-'].includes(value);
}

export default class UnaryOperatorNode
  extends PlaygroundNode
  implements OperatorNode {
  readonly nodeType = NodeTypes.OPERATOR;

  private value: UnaryOperator;

  constructor(value: UnaryOperator) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: UnaryOperator) {
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
