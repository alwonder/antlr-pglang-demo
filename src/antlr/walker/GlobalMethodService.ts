import RuntimeError from './RuntimeError';
import PlaygroundTreeWalker from './PlaygroundTreeWalker';
import StaticMethodCallNode from '../nodes/StaticMethodCallNode';
import { Scope } from './ScopeManager';
import {
  isIdentifierNode,
  isExpressionNode,
  isObjectIdentifierNode,
  isLiteralNode,
} from '../NodeTypes';

const globalMethods: Record<string, (...args: any[]) => any> = {
  print: (...args: any[]) => console.log(...args),
};

export default class GlobalMethodService {
  private readonly walker: PlaygroundTreeWalker;

  constructor(walker: PlaygroundTreeWalker) {
    this.walker = walker;
  }

  handleMethodCallNode(node: StaticMethodCallNode, scope: Scope) {
    const method = node.getMethodName();

    const params = node.getParams().map((param) => {
      if (isObjectIdentifierNode(param)) {
        return this.walker.getVariableInScope(
          scope,
          param.getObjectName(),
          node,
        ).value;
      }

      if (isIdentifierNode(param)) {
        return this.walker.getVariableInScope(scope, param.getValue(), node)
          .value;
      }

      if (isExpressionNode(param)) {
        return this.walker.calculateExpression(param, scope);
      }

      if (isLiteralNode(param)) {
        return param.getValue();
      }

      throw new Error('Unknown param type');
    });

    return this.invokeMethod(method, params, node);
  }

  private invokeMethod(
    name: string,
    params: any[],
    callNode: StaticMethodCallNode,
  ) {
    if (globalMethods[name]) {
      globalMethods[name](...params);
      return;
    }
    throw new RuntimeError(`Method "${name}" is not defined`, callNode.line);
  }
}
