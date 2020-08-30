import ObjectIdentifierNode from 'antlr/nodes/ObjectIdentifierNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class ObjectPropertyNode extends PlaygroundNode {
  readonly nodeType = NodeTypes.OBJECT_PROPERTY;

  object: ObjectIdentifierNode;

  property: string;

  constructor(object: ObjectIdentifierNode, property: string, line: number) {
    super(undefined, line);
    this.object = object;
    this.property = property;
    this.object.setParent(this);
  }

  getObject() {
    return this.object;
  }

  getProperty() {
    return this.property;
  }
}
