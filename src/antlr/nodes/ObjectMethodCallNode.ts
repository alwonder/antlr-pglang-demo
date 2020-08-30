import IdentifierNode from 'antlr/nodes/IdentifierNode';
import LiteralNode from 'antlr/nodes/literal/LiteralNode';
import ObjectIdentifierNode from 'antlr/nodes/ObjectIdentifierNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import { NodeTypes } from 'antlr/NodeTypes';
import ExpressionNode from './expression/ExpressionNode';
import {
  StatementNameProvider,
  StatementParamProvider,
} from './StatementNameProvider';

export interface ObjectMethodCallNodeProps {
  object: ObjectIdentifierNode;
  method: string;
  params: (IdentifierNode | LiteralNode | ExpressionNode)[];
}

export default class ObjectMethodCallNode
  extends PlaygroundNode
  implements StatementNameProvider, StatementParamProvider {
  readonly nodeType = NodeTypes.OBJECT_METHOD_CALL;

  object: ObjectIdentifierNode;

  method: string;

  children!: (IdentifierNode | LiteralNode)[];

  constructor(props: ObjectMethodCallNodeProps, line: number) {
    super(props.params, line);
    this.object = props.object;
    this.method = props.method;
    this.object.setParent(this);
    this.forEach((child) => child.setParent(this));
  }

  getStatementName() {
    return this.method;
  }

  hasSomeParameters(params: any[]): boolean {
    return this.getParams().some((param) => params.includes(param.getValue()));
  }

  getObjectName() {
    return this.object.getObjectName();
  }

  getParams(): (IdentifierNode | LiteralNode)[] {
    return this.children;
  }

  getParam(index: number) {
    return this.children[index];
  }
}
