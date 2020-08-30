import ConditionalNode from 'antlr/nodes/conditional/ConditionalNode';
import ElseConditionalNode from 'antlr/nodes/conditional/ElseConditionalNode';
import ElseIfConditionalNode from 'antlr/nodes/conditional/ElseIfConditionalNode';
import PlaygroundTreeWalker from 'antlr/walker/PlaygroundTreeWalker';
import { PlaygroundWalkerModule } from 'antlr/walker/PlaygroundWalkerModule';
import { Scope } from 'antlr/walker/ScopeManager';

export default class ConditionalWalker implements PlaygroundWalkerModule {
  readonly walker: PlaygroundTreeWalker;

  constructor(walker: PlaygroundTreeWalker) {
    this.walker = walker;
  }

  handleConditionalNode(node: ConditionalNode, scope: Scope) {
    if (this.walker.calculateExpression(node.getCondition(), scope)) {
      this.walker.handleNode(node.getConsequent(), scope);
      return;
    }

    if (
      node instanceof ElseConditionalNode ||
      node instanceof ElseIfConditionalNode
    ) {
      this.walker.handleNode(node.getAlternative(), scope);
    }
  }
}
