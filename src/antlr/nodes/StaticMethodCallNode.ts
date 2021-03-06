import IdentifierNode from '@/antlr/nodes/IdentifierNode';
import LiteralNode from '@/antlr/nodes/literal/LiteralNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import { NodeTypes, isObjectIdentifierNode } from '@/antlr/NodeTypes';
import ExpressionNode from './expression/ExpressionNode';
import {
  StatementNameProvider,
  StatementParamProvider,
} from './StatementNameProvider';
import ObjectIdentifierNode from './ObjectIdentifierNode';

export interface StaticMethodCallNodeProps {
  method: string;
  params: (ObjectIdentifierNode | LiteralNode | ExpressionNode)[];
}

export default class StaticMethodCallNode
  extends PlaygroundNode
  implements StatementNameProvider, StatementParamProvider {
  readonly nodeType = NodeTypes.STATIC_METHOD_CALL;

  private method: string;

  children!: (ObjectIdentifierNode | IdentifierNode | LiteralNode)[];

  constructor(props: StaticMethodCallNodeProps, line: number) {
    super(props.params, line);
    this.method = props.method;
    this.forEach((child) => child.setParent(this));
  }

  hasSomeParameters(params: any[]): boolean {
    return this.getParams().some((param) =>
      params.includes(
        isObjectIdentifierNode(param)
          ? param.getObjectName()
          : param.getValue(),
      ),
    );
  }

  getStatementName() {
    return this.method;
  }

  getMethodName() {
    return this.method;
  }

  getParams(): (ObjectIdentifierNode | IdentifierNode | LiteralNode)[] {
    return this.children;
  }

  getParam(index: number) {
    return this.children[index];
  }
}
