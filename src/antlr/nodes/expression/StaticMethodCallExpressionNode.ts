import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import StaticMethodCallNode from 'antlr/nodes/StaticMethodCallNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class MethodCallExpressionNode
  extends PlaygroundNode
  implements ExpressionNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [StaticMethodCallNode];

  constructor(value: StaticMethodCallNode) {
    super([value]);
    this.forEach((child) => child.setParent(this));
  }

  getValue(): StaticMethodCallNode {
    return this.children[0];
  }

  setValue(value: StaticMethodCallNode) {
    this.children[0] = value;
  }
}
