import PlaygroundTreeWalker from '@/antlr/walker/PlaygroundTreeWalker';
import { PlaygroundWalkerModule } from '@/antlr/walker/PlaygroundWalkerModule';
import LoopStatementNode from '@/antlr/nodes/LoopStatementNode';
import CountControlledLoop from '@/antlr/walker/loop/CountControlledLoop';
import { Scope } from '@/antlr/walker/ScopeManager';
import WhileStatementNode from '@/antlr/nodes/WhileStatementNode';
import WhileLoop from './loop/WhileLoop';

export default class LoopWalker implements PlaygroundWalkerModule {
  readonly walker: PlaygroundTreeWalker;

  static MAX_LOOP_ITERATIONS = 65536;

  constructor(walker: PlaygroundTreeWalker) {
    this.walker = walker;
  }

  handleLoopStatementNode(node: LoopStatementNode, scope: Scope) {
    const countLoop = new CountControlledLoop(
      this,
      node.getIterations(),
      scope,
    );
    countLoop.init();
    const loopBody = node.getBody();

    while (!countLoop.conditionIsMet()) {
      this.walker.handleNode(loopBody, scope);
      countLoop.iterate();
    }
  }

  handleWhileStatementNode(node: WhileStatementNode, scope: Scope) {
    const whileLoop = new WhileLoop(this, node.getCondition(), scope);
    whileLoop.init();
    const loopBody = node.getBody();
    let iterations = 0;

    while (whileLoop.conditionIsMet()) {
      this.walker.handleNode(loopBody, scope);
      whileLoop.iterate();
      if (++iterations > LoopWalker.MAX_LOOP_ITERATIONS) {
        throw new Error('endless loop');
      }
    }
  }
}
