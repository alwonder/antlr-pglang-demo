import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';
import ObjectPropertyNode from 'antlr/nodes/ObjectPropertyNode';
import VarAssignmentOperatorNode from './operator/VarAssignmentOperatorNode';
import { StatementNameProvider } from './StatementNameProvider';

export default class ObjectPropertyAssignmentNode
  extends PlaygroundNode
  implements StatementNameProvider {
  readonly nodeType = NodeTypes.OBJECT_PROPERTY_ASSIGNMENT;

  protected children!: [
    ObjectPropertyNode,
    VarAssignmentOperatorNode,
    ExpressionNode,
  ];

  constructor(
    property: ObjectPropertyNode,
    operator: VarAssignmentOperatorNode,
    assignment: ExpressionNode,
    line: number,
  ) {
    super([property, operator, assignment], line);
    this.forEach((child) => child.setParent(this));
  }

  getObjectProperty() {
    return this.children[0];
  }

  getOperator(): VarAssignmentOperatorNode {
    return this.children[1];
  }

  getAssignment() {
    return this.children[2];
  }

  getStatementName(): string {
    return this.getObjectProperty().property;
  }
}
