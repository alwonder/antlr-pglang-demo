import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import ObjectMethodCallNode from 'antlr/nodes/ObjectMethodCallNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class MethodCallExpressionNode
  extends PlaygroundNode
  implements ExpressionNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [ObjectMethodCallNode];

  constructor(value: ObjectMethodCallNode) {
    super([value]);
    this.forEach((child) => child.setParent(this));
  }

  getValue(): ObjectMethodCallNode {
    return this.children[0];
  }

  setValue(value: ObjectMethodCallNode) {
    this.children[0] = value;
  }
}
