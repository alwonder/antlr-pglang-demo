import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';
import ObjectPropertyNode from 'antlr/nodes/ObjectPropertyNode';

export default class ObjectPropExpressionNode
  extends PlaygroundNode
  implements ExpressionNode {
  readonly nodeType = NodeTypes.EXPRESSION;

  children!: [ObjectPropertyNode];

  constructor(value: ObjectPropertyNode) {
    super([value]);
    this.forEach((child) => child.setParent(this));
  }

  getValue(): ObjectPropertyNode {
    return this.children[0];
  }

  setValue(value: ObjectPropertyNode) {
    this.children[0] = value;
  }
}
