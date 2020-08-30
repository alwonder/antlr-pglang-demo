import ConditionalNode from '@/antlr/nodes/conditional/ConditionalNode';
import EventStatementNode from '@/antlr/nodes/EventStatementNode';
import ExpressionNode from '@/antlr/nodes/expression/ExpressionNode';
import IdentifierNode from '@/antlr/nodes/IdentifierNode';
import LiteralNode from '@/antlr/nodes/literal/LiteralNode';
import LoopStatementNode from '@/antlr/nodes/LoopStatementNode';
import ObjectPropertyAssignmentNode from '@/antlr/nodes/ObjectPropertyAssignmentNode';
import ObjectPropertyNode from '@/antlr/nodes/ObjectPropertyNode';
import ObjectMethodCallNode from '@/antlr/nodes/ObjectMethodCallNode';
import StaticMethodCallNode from '@/antlr/nodes/StaticMethodCallNode';
import OperatorNode from '@/antlr/nodes/operator/OperatorNode';
import PlaygroundNode from '@/antlr/nodes/PlaygroundNode';
import RootNode from '@/antlr/nodes/RootNode';
import ScopeNode from '@/antlr/nodes/ScopeNode';
import VarAssignmentNode from '@/antlr/nodes/VarAssignmentNode';
import VarDeclarationNode from '@/antlr/nodes/VarDeclarationNode';
import ObjectIdentifierNode from '@/antlr/nodes/ObjectIdentifierNode';
import WhileStatementNode from './nodes/WhileStatementNode';

export enum NodeTypes {
  ROOT,
  SCOPE,
  VAR_DECLARATION,
  VAR_ASSIGNMENT,
  OBJECT_PROPERTY_ASSIGNMENT,
  OBJECT_PROPERTY,
  OBJECT_METHOD_CALL,
  LOOP_STATEMENT,
  WHILE_STATEMENT,
  EVENT_STATEMENT,
  CONDITIONAL,
  EXPRESSION,
  OPERATOR,
  OBJECT_IDENTIFIER,
  IDENTIFIER,
  LITERAL,
  STATIC_METHOD_CALL,
}

export function isRootNode(node: PlaygroundNode): node is RootNode {
  return node.nodeType === NodeTypes.ROOT;
}

export function isScopeNode(node: PlaygroundNode): node is ScopeNode {
  return node.nodeType === NodeTypes.SCOPE;
}

export function isVarDeclarationNode(
  node: PlaygroundNode,
): node is VarDeclarationNode {
  return node.nodeType === NodeTypes.VAR_DECLARATION;
}

export function isVarAssignmentNode(
  node: PlaygroundNode,
): node is VarAssignmentNode {
  return node.nodeType === NodeTypes.VAR_ASSIGNMENT;
}

export function isObjectPropertyAssignmentNode(
  node: PlaygroundNode,
): node is ObjectPropertyAssignmentNode {
  return node.nodeType === NodeTypes.OBJECT_PROPERTY_ASSIGNMENT;
}

export function isObjectPropertyNode(
  node: PlaygroundNode,
): node is ObjectPropertyNode {
  return node.nodeType === NodeTypes.OBJECT_PROPERTY;
}

export function isObjectMethodCallNode(
  node: PlaygroundNode,
): node is ObjectMethodCallNode {
  return node.nodeType === NodeTypes.OBJECT_METHOD_CALL;
}

export function isStaticMethodCallNode(
  node: PlaygroundNode,
): node is StaticMethodCallNode {
  return node.nodeType === NodeTypes.STATIC_METHOD_CALL;
}

export function isLoopStatementNode(
  node: PlaygroundNode,
): node is LoopStatementNode {
  return node.nodeType === NodeTypes.LOOP_STATEMENT;
}

export function isWhileStatementNode(
  node: PlaygroundNode,
): node is WhileStatementNode {
  return node.nodeType === NodeTypes.WHILE_STATEMENT;
}

export function isEventStatementNode(
  node: PlaygroundNode,
): node is EventStatementNode {
  return node.nodeType === NodeTypes.EVENT_STATEMENT;
}

export function isConditionalNode(
  node: PlaygroundNode,
): node is ConditionalNode {
  return node.nodeType === NodeTypes.CONDITIONAL;
}

export function isExpressionNode(node: PlaygroundNode): node is ExpressionNode {
  return node.nodeType === NodeTypes.EXPRESSION;
}

export function isOperatorNode(node: PlaygroundNode): node is OperatorNode {
  return node.nodeType === NodeTypes.OPERATOR;
}

export function isObjectIdentifierNode(
  node: PlaygroundNode,
): node is ObjectIdentifierNode {
  return node.nodeType === NodeTypes.OBJECT_IDENTIFIER;
}

export function isIdentifierNode(node: PlaygroundNode): node is IdentifierNode {
  return node.nodeType === NodeTypes.IDENTIFIER;
}

export function isLiteralNode(node: PlaygroundNode): node is LiteralNode {
  return node.nodeType === NodeTypes.LITERAL;
}
