import ConditionalNode from 'antlr/nodes/conditional/ConditionalNode';
import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import ScopeNode from 'antlr/nodes/ScopeNode';
import { NodeTypes } from 'antlr/NodeTypes';

export interface ThenConditionalNodeProps {
  condition: ExpressionNode;
  consequent: ScopeNode;
}

export default class ThenConditionalNode
  extends PlaygroundNode
  implements ConditionalNode {
  readonly nodeType = NodeTypes.CONDITIONAL;

  children!: [ExpressionNode, ScopeNode];

  constructor(props: ThenConditionalNodeProps) {
    super([props.condition, props.consequent]);
    this.forEach((child) => child.setParent(this));
  }

  getCondition() {
    return this.children[0];
  }

  getConsequent() {
    return this.children[1];
  }
}
