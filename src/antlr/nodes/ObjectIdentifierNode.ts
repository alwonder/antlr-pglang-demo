import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default class ObjectIdentifierNode extends PlaygroundNode {
  readonly nodeType = NodeTypes.OBJECT_IDENTIFIER;

  private objectName: string;

  constructor(name: string, line: number) {
    super([], line);
    this.objectName = name;
  }

  getObjectName() {
    return this.objectName;
  }

  forEach(
    callback: (
      value: PlaygroundNode,
      index: number,
      arr: PlaygroundNode[],
    ) => void,
  ) {}

  async forEachAsync(
    callback: (
      value: PlaygroundNode,
      index: number,
      arr: PlaygroundNode[],
    ) => Promise<void>,
  ) {}
}
