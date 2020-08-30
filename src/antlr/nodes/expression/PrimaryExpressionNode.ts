import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
import IdentifierNode from '@/antlr/nodes/IdentifierNode';
import LiteralNode from '@/antlr/nodes/literal/LiteralNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export default class PrimaryExpressionNode
  extends PlaygroundNode
  implements ExpressionNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [IdentifierNode | LiteralNode];

  constructor(value: IdentifierNode | LiteralNode, line: number) {
    super([value], line);
    this.forEach((child) => child.setParent(this));
  }

  getValue(): IdentifierNode | LiteralNode {
    return this.children[0];
  }

  setValue(value: IdentifierNode | LiteralNode) {
    this.children[0] = value;
  }
}
