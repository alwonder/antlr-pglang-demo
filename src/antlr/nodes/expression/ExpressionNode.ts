import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export default interface ExpressionNode extends PlaygroundNode {
  readonly nodeType: NodeTypes.EXPRESSION;
}
