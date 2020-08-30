import OperatorNode from 'antlr/nodes/operator/OperatorNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export type ComparisonOperator = '==' | '!=' | '>' | '<' | '>=' | '<=';

export function isComparisonOperator(
  value: string,
): value is ComparisonOperator {
  return ['==', '!=', '>', '<', '>=', '<='].includes(value);
}

export default class ComparisonOperatorNode
  extends PlaygroundNode
  implements OperatorNode {
  readonly nodeType = NodeTypes.OPERATOR;
  private value: ComparisonOperator;

  constructor(value: ComparisonOperator) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: ComparisonOperator) {
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
