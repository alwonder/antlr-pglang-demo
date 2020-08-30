import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import VarAssignmentOperatorNode from 'antlr/nodes/operator/VarAssignmentOperatorNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';
import { StatementNameProvider } from './StatementNameProvider';

export default class VarAssignmentNode
  extends PlaygroundNode
  implements StatementNameProvider {
  readonly nodeType = NodeTypes.VAR_ASSIGNMENT;

  private variableName: string;

  protected children!: [VarAssignmentOperatorNode, ExpressionNode];

  // TODO: decrease parameters amount
  constructor(
    variableName: string,
    operator: VarAssignmentOperatorNode,
    assignment: ExpressionNode,
    line: number,
  ) {
    super([operator, assignment], line);
    this.variableName = variableName;
    this.forEach((child) => child.setParent(this));
  }

  getStatementName() {
    return this.variableName;
  }

  getVariableName() {
    return this.variableName;
  }

  getOperator(): VarAssignmentOperatorNode {
    return this.children[0];
  }

  getAssignment() {
    return this.children[1];
  }
}
