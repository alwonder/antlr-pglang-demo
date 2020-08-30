import ArithmeticExpressionNode from '@/antlr/nodes/expression/ArithmeticExpressionNode';
import BooleanExpressionNode from '@/antlr/nodes/expression/BooleanExpressionNode';
import ComparisonExpressionNode from '@/antlr/nodes/expression/ComparisonExpressionNode';
import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
// tslint:disable-next-line:max-line-length
import ParenthesesExpressionNode from '@/antlr/nodes/expression/ParenthesesExpressionNode';
import PrimaryExpressionNode from '@/antlr/nodes/expression/PrimaryExpressionNode';
import UnaryExpressionNode from '@/antlr/nodes/expression/UnaryExpressionNode';
import PlaygroundTreeWalker from '@/antlr/walker/PlaygroundTreeWalker';
import { PlaygroundWalkerModule } from '@/antlr/walker/PlaygroundWalkerModule';
import { Scope } from '@/antlr/walker/ScopeManager';
import MethodCallExpressionNode from '@/antlr/nodes/expression/MethodCallExpressionNode';
import { isLiteralNode, isIdentifierNode } from '@/antlr/NodeTypes';
import ObjectPropExpressionNode from '@/antlr/nodes/expression/ObjectPropExpressionNode';
import StaticMethodCallExpressionNode from '@/antlr/nodes/expression/StaticMethodCallExpressionNode';

export default class ExpressionWalker implements PlaygroundWalkerModule {
  readonly walker: PlaygroundTreeWalker;

  constructor(walker: PlaygroundTreeWalker) {
    this.walker = walker;
  }

  calculateExpression(node: ExpressionNode, scope: Scope): any {
    if (node instanceof PrimaryExpressionNode) {
      return this.calculatePrimaryExpression(node, scope);
    }

    if (node instanceof ObjectPropExpressionNode) {
      return this.calculateObjectPropExpression(node, scope);
    }

    if (node instanceof MethodCallExpressionNode) {
      return this.calculateMethodCallExpression(node, scope);
    }

    if (node instanceof StaticMethodCallExpressionNode) {
      return this.calculateStaticMethodCallExpression(node, scope);
    }

    if (node instanceof ParenthesesExpressionNode) {
      return this.calculateExpression(node.getValue(), scope);
    }

    if (node instanceof UnaryExpressionNode) {
      return this.calculateUnaryExpression(node, scope);
    }

    if (node instanceof ArithmeticExpressionNode) {
      return this.calculateArithmeticExpression(node, scope);
    }

    if (node instanceof ComparisonExpressionNode) {
      return this.calculateComparisonExpression(node, scope);
    }

    if (node instanceof BooleanExpressionNode) {
      return this.calculateBooleanExpression(node, scope);
    }

    throw new Error(
      'Error while calculating ExpressionNode. No expected node types found',
    );
  }

  private calculatePrimaryExpression(
    node: PrimaryExpressionNode,
    scope: Scope,
  ) {
    const value = node.getValue();
    if (isLiteralNode(value)) {
      return value.getValue();
    }

    if (isIdentifierNode(value)) {
      const variableName = value.getValue();
      return this.walker.getVariableInScope(scope, variableName, node).value;
    }

    throw new Error(
      'Error while calculating PrimaryExpressionNode. No expected node types found',
    );
  }

  private calculateObjectPropExpression(
    node: ObjectPropExpressionNode,
    scope: Scope,
  ) {
    // return this.walker.getGameObjectProperty(node.getValue(), scope);
    throw new Error('Calculating object property is not implemented');
  }

  private calculateMethodCallExpression(
    node: MethodCallExpressionNode,
    scope: Scope,
  ) {
    // return this.walker.callGameObjectMethod(node.getValue(), scope);
    throw new Error('Calculating method call is not implemented');
  }

  private calculateStaticMethodCallExpression(
    node: StaticMethodCallExpressionNode,
    scope: Scope,
  ) {
    // return this.walker.callGameStaticMethod(node.getValue(), scope);
    throw new Error('Calculating static method call is not implemented');
  }

  private calculateArithmeticExpression(
    node: ArithmeticExpressionNode,
    scope: Scope,
  ) {
    const firstOperand = this.calculateExpression(
      node.getFirstOperand(),
      scope,
    );
    const secondOperand = this.calculateExpression(
      node.getSecondOperand(),
      scope,
    );
    const operator = node.getOperator().getValue();

    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        throw new Error(
          'Error while calculating ArithmeticExpressionNode. No expected operators found',
        );
    }
  }

  private calculateBooleanExpression(
    node: BooleanExpressionNode,
    scope: Scope,
  ): boolean {
    const firstOperand = this.calculateExpression(
      node.getFirstOperand(),
      scope,
    );
    const secondOperand = this.calculateExpression(
      node.getSecondOperand(),
      scope,
    );
    const operator = node.getOperator().getValue();

    switch (operator) {
      case 'AND':
        return firstOperand && secondOperand;
      case 'OR':
        return firstOperand || secondOperand;
      default:
        throw new Error(
          'Error while calculating BooleanExpressionNode. No expected operators found',
        );
    }
  }

  private calculateComparisonExpression(
    node: ComparisonExpressionNode,
    scope: Scope,
  ): boolean {
    const firstOperand = this.calculateExpression(
      node.getFirstOperand(),
      scope,
    );
    const secondOperand = this.calculateExpression(
      node.getSecondOperand(),
      scope,
    );
    const operator = node.getOperator().getValue();

    switch (operator) {
      case '==':
        return firstOperand === secondOperand;
      case '!=':
        return firstOperand !== secondOperand;
      case '>':
        return firstOperand > secondOperand;
      case '<':
        return firstOperand < secondOperand;
      case '>=':
        return firstOperand >= secondOperand;
      case '<=':
        return firstOperand <= secondOperand;
      default:
        throw new Error(
          'Error while calculating BooleanExpressionNode. No expected operators found',
        );
    }
  }

  private calculateUnaryExpression(
    node: UnaryExpressionNode,
    scope: Scope,
  ): boolean | number {
    const operand = this.calculateExpression(node.getOperand(), scope);
    const operator = node.getOperator().getValue();

    switch (operator) {
      case 'NOT':
        return !operand;
      case '-':
        return -operand;
      default:
        throw new Error(
          'Error while calculating UnaryExpressionNode. No expected operators found',
        );
    }
  }
}
