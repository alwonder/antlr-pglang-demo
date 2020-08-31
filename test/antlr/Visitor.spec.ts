import ElseConditionalNode from '@/antlr/nodes/conditional/ElseConditionalNode';
import ElseIfConditionalNode from '@/antlr/nodes/conditional/ElseIfConditionalNode';
import ThenConditionalNode from '@/antlr/nodes/conditional/ThenConditionalNode';
import EventStatementNode from '@/antlr/nodes/EventStatementNode';
import ArithmeticExpressionNode from '@/antlr/nodes/expression/ArithmeticExpressionNode';
import BooleanExpressionNode from '@/antlr/nodes/expression/BooleanExpressionNode';
import ComparisonExpressionNode from '@/antlr/nodes/expression/ComparisonExpressionNode';
import ParenthesesExpressionNode from '@/antlr/nodes/expression/ParenthesesExpressionNode';
import PrimaryExpressionNode from '@/antlr/nodes/expression/PrimaryExpressionNode';
import UnaryExpressionNode from '@/antlr/nodes/expression/UnaryExpressionNode';
import IdentifierNode from '@/antlr/nodes/IdentifierNode';
import BooleanLiteralNode from '@/antlr/nodes/literal/BooleanLiteralNode';
import ConstantLiteralNode from '@/antlr/nodes/literal/ConstantLiteralNode';
import NumberLiteralNode from '@/antlr/nodes/literal/NumberLiteralNode';
import StringLiteralNode from '@/antlr/nodes/literal/StringLiteralNode';
import ObjectIdentifierNode from '@/antlr/nodes/ObjectIdentifierNode';
import ObjectMethodCallNode from '@/antlr/nodes/ObjectMethodCallNode';
import ObjectPropertyAssignmentNode from '@/antlr/nodes/ObjectPropertyAssignmentNode';
import ObjectPropertyNode from '@/antlr/nodes/ObjectPropertyNode';
import ArithmeticOperatorNode from '@/antlr/nodes/operator/ArithmeticOperatorNode';
import UnaryOperatorNode from '@/antlr/nodes/operator/UnaryOperatorNode';
import RootNode from '@/antlr/nodes/RootNode';
import ScopeNode from '@/antlr/nodes/ScopeNode';
import VarAssignmentNode from '@/antlr/nodes/VarAssignmentNode';
import VarDeclarationNode from '@/antlr/nodes/VarDeclarationNode';
import LoopStatementNode from '@/antlr/nodes/LoopStatementNode';
import WhileStatementNode from '@/antlr/nodes/WhileStatementNode';
import parse from './parse';
import ObjectPropExpressionNode from '@/antlr/nodes/expression/ObjectPropExpressionNode';
import MethodCallExpressionNode from '@/antlr/nodes/expression/MethodCallExpressionNode';
import ConditionalNode from '@/antlr/nodes/conditional/ConditionalNode';

describe('Playground Custom Visitor', () => {
  it('should handle root node', () => {
    const root = parse('');

    expect(root).toBeInstanceOf(RootNode);
    expect(root.parent).toBeUndefined();
    expect(root.getScope()).toBeInstanceOf(ScopeNode);
  });

  it('should handle objectMethodCall', () => {
    const tree = parse('robot.move()');
    const scope = tree.getScope();
    const methodCall = scope.getChild(0) as ObjectMethodCallNode;

    expect(methodCall).toBeInstanceOf(ObjectMethodCallNode);
    expect(methodCall).toMatchObject({ method: 'move' });
    expect(methodCall.object).toBeInstanceOf(ObjectIdentifierNode);
    expect(methodCall.getParams()).toBeInstanceOf(Array);
    expect(methodCall.getParams().length).toBe(0);
  });

  it('should handle object identifier param in objectMethodCall', () => {
    const param = (parse('robot.scan(box)')
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParam(0);

    expect(param).toBeInstanceOf(IdentifierNode);
    expect(param.getValue()).toEqual('box');
  });

  it('should handle number literal param in objectMethodCall', () => {
    const param = (parse('robot.move(3)')
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParam(0);

    expect(param).toBeInstanceOf(NumberLiteralNode);
    expect(param.getValue()).toEqual(3);
  });

  it('should handle negatve number literal param', () => {
    const param = (parse('robot.move(-17)')
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParam(0);

    expect(param).toBeInstanceOf(NumberLiteralNode);
    expect(param.getValue()).toEqual(-17);
  });

  it('should handle boolean literal params', () => {
    const trueParam = (parse('robot.switch(true)')
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParam(0);
    const falseParam = (parse('robot.switch(false)')
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParam(0);

    expect(trueParam).toBeInstanceOf(BooleanLiteralNode);
    expect(trueParam.getValue()).toEqual(true);

    expect(falseParam).toBeInstanceOf(BooleanLiteralNode);
    expect(falseParam.getValue()).toEqual(false);
  });

  it('should handle constant literal param', () => {
    const param = (parse('robot.watch(arrowLeft)')
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParam(0);

    expect(param).toBeInstanceOf(ConstantLiteralNode);
    expect(param.getValue()).toEqual('arrowLeft');
  });

  it('should handle sngle-quote string literal param', () => {
    const param = (parse("moth.say('Do u have some LAMP?')")
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParam(0);

    expect(param).toBeInstanceOf(StringLiteralNode);
    expect(param.getValue()).toEqual('Do u have some LAMP?');
  });

  it('should handle double-quote string literal param', () => {
    const param = (parse('todd.say("Buy skyrim")')
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParam(0);

    expect(param).toBeInstanceOf(StringLiteralNode);
    expect(param.getValue()).toEqual('Buy skyrim');
  });

  it('should handle multiple params in methodCall', () => {
    const params = (parse('robot.watch(-7, true, arrowUp)')
      .getScope()
      .getChild(0) as ObjectMethodCallNode).getParams();

    expect(params).toBeInstanceOf(Array);
    expect(params[0]).toBeInstanceOf(NumberLiteralNode);
    expect(params[0].getValue()).toEqual(-7);
    expect(params[1]).toBeInstanceOf(BooleanLiteralNode);
    expect(params[1].getValue()).toEqual(true);
    expect(params[2]).toBeInstanceOf(ConstantLiteralNode);
    expect(params[2].getValue()).toEqual('arrowUp');
  });

  it('should handle basic event statement', () => {
    const statement = parse(`
      @onKey = () =>
      end
    `)
      .getScope()
      .getChild(0) as EventStatementNode;

    expect(statement).toBeInstanceOf(EventStatementNode);
    expect(statement.getName()).toEqual('onKey');
    expect(statement.getParams()).toBeInstanceOf(Array);
    expect(statement.getParams().length).toBe(0);
    expect(statement.getBody()).toBeInstanceOf(ScopeNode);
  });

  it('should handle event statement with params', () => {
    const [param1, param2] = (parse(`
      @onCollide = (object1, object2) =>
      end
    `)
      .getScope()
      .getChild(0) as EventStatementNode).getParams();

    expect(param1).toBeInstanceOf(IdentifierNode);
    expect(param1.getValue()).toEqual('object1');
    expect(param2).toBeInstanceOf(IdentifierNode);
    expect(param2.getValue()).toEqual('object2');
  });

  it('should handle event statement body', () => {
    const eventBody = (parse(`
      @onCollide = (object1, object2) =>
        object1.collide(object2)
      end
    `)
      .getScope()
      .getChild(0) as EventStatementNode).getBody();

    expect(eventBody).toBeInstanceOf(ScopeNode);
    expect(eventBody.getChild(0)).toBeInstanceOf(ObjectMethodCallNode);
  });

  it('should handle variable declaration', () => {
    const declaration = parse(`var b`)
      .getScope()
      .getChild(0) as VarDeclarationNode;

    expect(declaration).toBeInstanceOf(VarDeclarationNode);
    expect(declaration.getVariableName()).toEqual('b');
  });

  it('should handle variable assignment', () => {
    const assignment = parse(`b = 3 + 7`)
      .getScope()
      .getChild(0) as VarAssignmentNode;

    expect(assignment).toBeInstanceOf(VarAssignmentNode);
    expect(assignment.getVariableName()).toEqual('b');
    expect(assignment.getAssignment()).toBeInstanceOf(ArithmeticExpressionNode);
  });

  it('should handle primary expression literal', () => {
    const assignment = (parse(`var b = 4`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as PrimaryExpressionNode;

    expect(assignment).toBeInstanceOf(PrimaryExpressionNode);
    expect(assignment.getValue()).toBeInstanceOf(NumberLiteralNode);
    expect(assignment.getValue().getValue()).toEqual(4);
  });

  it('should handle float literal', () => {
    const assignment = (parse(`var b = 4.37`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as PrimaryExpressionNode;

    expect(assignment).toBeInstanceOf(PrimaryExpressionNode);
    expect(assignment.getValue()).toBeInstanceOf(NumberLiteralNode);
    expect(assignment.getValue().getValue()).toEqual(4.37);
  });

  it('should handle primary expression identifier', () => {
    const assignmentValue = ((parse(`var b = this`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as PrimaryExpressionNode).getValue();

    expect(assignmentValue).toBeInstanceOf(IdentifierNode);
    expect(assignmentValue.getValue()).toEqual('this');
  });

  it('should handle object property expression', () => {
    const assignmentValue = ((parse(`var a = robot.x`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as ObjectPropExpressionNode).getValue();

    expect(assignmentValue).toBeInstanceOf(ObjectPropertyNode);
    expect(assignmentValue).toMatchObject({ property: 'x' });
    expect(assignmentValue.object).toBeInstanceOf(ObjectIdentifierNode);
  });

  it('should handle object method call expression', () => {
    const assignmentValue = ((parse(`var a = robot.scan()`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as MethodCallExpressionNode).getValue();

    expect(assignmentValue).toBeInstanceOf(ObjectMethodCallNode);
    expect(assignmentValue).toMatchObject({ method: 'scan' });
    expect(assignmentValue.object).toBeInstanceOf(ObjectIdentifierNode);
  });

  it('should handle parentheses expression', () => {
    const assignment = (parse(`var a = (3)`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as ParenthesesExpressionNode;

    expect(assignment).toBeInstanceOf(ParenthesesExpressionNode);
    expect(assignment.getValue()).toBeInstanceOf(PrimaryExpressionNode);
  });

  it('should handle add/sub expression', () => {
    const assignment = (parse(`var a = 2 + 6`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as ArithmeticExpressionNode;

    expect(assignment).toBeInstanceOf(ArithmeticExpressionNode);
    expect(assignment.getFirstOperand()).toBeInstanceOf(PrimaryExpressionNode);
    expect(assignment.getSecondOperand()).toBeInstanceOf(PrimaryExpressionNode);
    expect(assignment.getOperator()).toBeInstanceOf(ArithmeticOperatorNode);
    expect(assignment.getOperator().getValue()).toEqual('+');
  });

  it('should handle mul/div expression', () => {
    const assignment = (parse(`var a = 8 / 2`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as ArithmeticExpressionNode;

    expect(assignment).toBeInstanceOf(ArithmeticExpressionNode);
    expect(assignment.getOperator().getValue()).toEqual('/');
  });

  it('should handle boolean expression', () => {
    const assignment = (parse(`var a = 8 AND 2`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as BooleanExpressionNode;

    expect(assignment).toBeInstanceOf(BooleanExpressionNode);
    expect(assignment.getOperator().getValue()).toEqual('AND');
  });

  it('should handle comparison expression', () => {
    const assignment = (parse(`var a = 8 >= 2`)
      .getScope()
      .getChild(
        0,
      ) as VarDeclarationNode).getAssignment() as ComparisonExpressionNode;

    expect(assignment).toBeInstanceOf(ComparisonExpressionNode);
    expect(assignment.getOperator().getValue()).toEqual('>=');
  });

  it('should handle if-then conditional', () => {
    const conditional = parse(`
      if a == b
        robot.move(b)
      end
    `)
      .getScope()
      .getChild(0) as ConditionalNode;

    expect(conditional).toBeInstanceOf(ThenConditionalNode);
    expect(conditional.getCondition()).toBeInstanceOf(ComparisonExpressionNode);
    expect(conditional.getConsequent()).toBeInstanceOf(ScopeNode);
  });

  it('should handle if-else conditional', () => {
    const conditional = parse(`
      if a == b
        robot.move(a)
      else
        robot.move(b)
      end
    `)
      .getScope()
      .getChild(0) as ElseIfConditionalNode;

    expect(conditional).toBeInstanceOf(ElseConditionalNode);
    expect(conditional.getCondition()).toBeInstanceOf(ComparisonExpressionNode);
    expect(conditional.getConsequent()).toBeInstanceOf(ScopeNode);
    expect(conditional.getAlternative()).toBeInstanceOf(ScopeNode);
  });

  it('should handle if-else-if conditional', () => {
    const conditional = parse(`
      if a == b
        robot.move(a)
      else if a > c
        robot.move(c)
      end
    `)
      .getScope()
      .getChild(0) as ElseIfConditionalNode;

    expect(conditional).toBeInstanceOf(ElseIfConditionalNode);
    expect(conditional.getCondition()).toBeInstanceOf(ComparisonExpressionNode);
    expect(conditional.getConsequent()).toBeInstanceOf(ScopeNode);
    expect(conditional.getAlternative()).toBeInstanceOf(ThenConditionalNode);
  });

  it('should handle loop statement', () => {
    const loop = parse(`
      loop 4
        var a
      end
    `)
      .getScope()
      .getChild(0) as LoopStatementNode;

    expect(loop).toBeInstanceOf(LoopStatementNode);
    expect(loop.getIterations()).toBeInstanceOf(PrimaryExpressionNode);
    expect(loop.getBody()).toBeInstanceOf(ScopeNode);
  });

  it('should handle while statement', () => {
    const loop = parse(`
      while a > b
        var c
      end
    `)
      .getScope()
      .getChild(0) as WhileStatementNode;

    expect(loop).toBeInstanceOf(WhileStatementNode);
    expect(loop.getCondition()).toBeInstanceOf(ComparisonExpressionNode);
    expect(loop.getBody()).toBeInstanceOf(ScopeNode);
  });

  it('should handle negation operator', () => {
    const expression = (parse('var a = NOT true')
      .getScope()
      .getChild(0) as VarAssignmentNode).getAssignment() as UnaryExpressionNode;

    expect(expression).toBeInstanceOf(UnaryExpressionNode);
    expect(expression.getOperand()).toBeInstanceOf(PrimaryExpressionNode);
    expect(expression.getOperator()).toBeInstanceOf(UnaryOperatorNode);
    expect(expression.getOperator().getValue()).toEqual('NOT');
  });

  it('should handle object property assignment', () => {
    const assignment = parse('foo.bar = "baz"')
      .getScope()
      .getChild(0) as ObjectPropertyAssignmentNode;

    expect(assignment).toBeInstanceOf(ObjectPropertyAssignmentNode);
    expect(assignment.getObjectProperty()).toBeInstanceOf(ObjectPropertyNode);
    expect(assignment.getAssignment()).toBeInstanceOf(PrimaryExpressionNode);
  });
});
