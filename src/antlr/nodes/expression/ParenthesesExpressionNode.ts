import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class ParenthesesExpressionNode
  extends PlaygroundNode
  implements ExpressionNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [ExpressionNode];

  constructor(value: ExpressionNode) {
    super([value]);
    this.forEach((child) => child.setParent(this));
  }

  getValue(): ExpressionNode {
    return this.children[0];
  }

  setValue(value: ExpressionNode) {
    this.children[0] = value;
  }
}
