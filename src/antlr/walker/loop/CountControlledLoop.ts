import LoopWalker from 'antlr/walker/LoopWalker';
import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import { Scope } from 'antlr/walker/ScopeManager';
import { Loop } from './Loop';

export default class CountControlledLoop implements Loop {
  private count = 0;

  readonly loopWalker: LoopWalker;

  private readonly scope: Scope;

  private readonly condition: ExpressionNode;

  private conditionResult: any;

  constructor(walker: LoopWalker, condition: ExpressionNode, scope: Scope) {
    this.loopWalker = walker;
    this.condition = condition;
    this.scope = scope;
  }

  conditionIsMet(): boolean {
    return this.count >= this.conditionResult;
  }

  init() {
    this.updateCondition();
  }

  iterate(): void {
    this.count += 1;
    this.updateCondition();
  }

  private updateCondition() {
    this.conditionResult = this.loopWalker.walker.calculateExpression(
      this.condition,
      this.scope,
    );
  }
}
