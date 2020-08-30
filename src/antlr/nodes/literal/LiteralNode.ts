import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default interface LiteralNode extends PlaygroundNode {
  readonly nodeType: NodeTypes.LITERAL;
  getValue(): number | boolean | string;
  setValue(value: number | boolean | string): void;
}
