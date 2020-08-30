import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export default interface OperatorNode extends PlaygroundNode {
  readonly nodeType: NodeTypes.OPERATOR;
  getValue(): string;
  setValue(value: string): void;
}
