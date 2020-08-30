import OperatorNode from '@/antlr/nodes/operator/OperatorNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export type ArithmeticOperator = '+' | '-' | '*' | '/';

export function isArithmeticOperator(
  value: string,
): value is ArithmeticOperator {
  return ['+', '-', '*', '/'].includes(value);
}

export default class ArithmeticOperatorNode
  extends PlaygroundNode
  implements OperatorNode {
  readonly nodeType = NodeTypes.OPERATOR;

  private value: ArithmeticOperator;

  constructor(value: ArithmeticOperator) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: ArithmeticOperator) {
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
