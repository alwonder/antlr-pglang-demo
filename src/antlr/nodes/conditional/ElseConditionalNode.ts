import ConditionalNode from '@/antlr/nodes/conditional/ConditionalNode';
import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import ScopeNode from '@/antlr/nodes/ScopeNode';
import { NodeTypes } from '@/antlr/NodeTypes';

export interface ElseConditionalNodeProps {
  condition: ExpressionNode;
  consequent: ScopeNode;
  alternative: ScopeNode;
}

export default class ElseConditionalNode
  extends PlaygroundNode
  implements ConditionalNode {
  readonly nodeType = NodeTypes.CONDITIONAL;

  children!: [ExpressionNode, ScopeNode, ScopeNode];

  constructor(props: ElseConditionalNodeProps) {
    super([props.condition, props.consequent, props.alternative]);
    this.forEach((child) => child.setParent(this));
  }

  getCondition() {
    return this.children[0];
  }

  getConsequent() {
    return this.children[1];
  }

  getAlternative() {
    return this.children[2];
  }
}
