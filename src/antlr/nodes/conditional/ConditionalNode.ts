import ExpressionNode from 'antlr/nodes/expression/ExpressionNode';
import PlaygroundNode from 'antlr/nodes/PlaygroundNode';
import ScopeNode from 'antlr/nodes/ScopeNode';
import { NodeTypes } from 'antlr/NodeTypes';

export default interface ConditionalNode extends PlaygroundNode {
  readonly nodeType: NodeTypes.CONDITIONAL;
  getCondition(): ExpressionNode;
  getConsequent(): ScopeNode;
}
