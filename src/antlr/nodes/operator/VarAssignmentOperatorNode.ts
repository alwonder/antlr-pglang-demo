import OperatorNode from '@/antlr/nodes/operator/OperatorNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export type VarAssignmentOperator = '=' | '-=' | '+=';

export function isVarAssignmentOperator(
  value: string,
): value is VarAssignmentOperator {
  return ['=', '-=', '+='].includes(value);
}

export default class VarAssignmentOperatorNode
  extends PlaygroundNode
  implements OperatorNode {
  readonly nodeType = NodeTypes.OPERATOR;

  private value: VarAssignmentOperator;

  constructor(value: VarAssignmentOperator) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: VarAssignmentOperator) {
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
