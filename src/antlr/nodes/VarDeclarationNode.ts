import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes } from '@/antlr/NodeTypes';
import { StatementNameProvider } from './StatementNameProvider';

export interface VarDeclarationNodeProps {
  variableName: string;
  assignment?: ExpressionNode;
}

export default class VarDeclarationNode
  extends PlaygroundNode
  implements StatementNameProvider {
  readonly nodeType = NodeTypes.VAR_DECLARATION;

  private variableName: string;

  protected assignment?: ExpressionNode;

  constructor(props: VarDeclarationNodeProps, line: number) {
    super(undefined, line);
    this.variableName = props.variableName;
    this.assignment = props.assignment;
    this.forEach((child) => child.setParent(this));
  }

  getStatementName() {
    return this.variableName;
  }

  getVariableName() {
    return this.variableName;
  }

  getAssignment() {
    return this.assignment;
  }

  forEach(
    callback: (
      value: ExpressionNode,
      index: number,
      arr: ExpressionNode[],
    ) => void,
  ) {
    if (this.assignment) {
      callback(this.assignment, 0, [this.assignment]);
    }
  }

  async forEachAsync(
    callback: (
      value: ExpressionNode,
      index: number,
      arr: ExpressionNode[],
    ) => Promise<void>,
  ) {
    if (this.assignment) {
      await callback(this.assignment, 0, [this.assignment]);
    }
  }
}
