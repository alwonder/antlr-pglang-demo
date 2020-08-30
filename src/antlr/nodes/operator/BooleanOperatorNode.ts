import OperatorNode from 'antlr/nodes/operator/OperatorNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export type BooleanOperator = 'AND' | 'OR';

export function isBooleanOperator(value: string): value is BooleanOperator {
  return ['AND', 'OR'].includes(value);
}

export default class BooleanOperatorNode
  extends PlaygroundNode
  implements OperatorNode {
  readonly nodeType = NodeTypes.OPERATOR;

  private value: BooleanOperator;

  constructor(value: BooleanOperator) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: BooleanOperator) {
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
