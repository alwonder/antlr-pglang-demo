import IdentifierNode from '@/antlr/nodes/IdentifierNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import ScopeNode from '@/antlr/nodes/ScopeNode';
import { NodeTypes } from '@/antlr/NodeTypes';
import { StatementNameProvider } from './StatementNameProvider';

export interface EventStatementNodeProps {
  name: string;
  params?: IdentifierNode[];
  body: ScopeNode;
}

export default class EventStatementNode
  extends PlaygroundNode
  implements StatementNameProvider {
  readonly nodeType = NodeTypes.EVENT_STATEMENT;

  private name: string;

  private params: IdentifierNode[];

  children!: [ScopeNode];

  constructor(props: EventStatementNodeProps, line: number) {
    super([props.body], line);
    this.name = props.name;
    this.params = props.params || [];
    this.forEach((child) => child.setParent(this));
  }

  getStatementName() {
    return this.getName();
  }

  getName() {
    return this.name;
  }

  getParams(): IdentifierNode[] {
    return this.params;
  }

  getParam(index: number) {
    return this.params[index];
  }

  getBody() {
    return this.children[0];
  }

  forEach(
    callback: (
      value: PlaygroundNode,
      index: number,
      arr: PlaygroundNode[],
    ) => void,
  ) {
    this.children.forEach((child, index, array) =>
      callback(child, index, array),
    );
  }

  forEachParam(
    callback: (
      value: IdentifierNode,
      index: number,
      arr: IdentifierNode[],
    ) => void,
  ) {
    this.params.forEach((param, index, array) => callback(param, index, array));
  }

  async forEachAsync(
    callback: (
      value: PlaygroundNode,
      index: number,
      arr: PlaygroundNode[],
    ) => Promise<void>,
  ) {
    await callback(this.children[0], 0, this.children);
    await this.forEachParam(callback);
  }

  async forEachParamAsync(
    callback: (
      value: IdentifierNode,
      index: number,
      arr: IdentifierNode[],
    ) => Promise<void>,
  ) {
    for (let index = 0; index < this.params.length; index++) {
      await callback(this.params[index], index, this.params);
    }
  }
}
