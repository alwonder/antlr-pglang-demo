import { CommonTokenStream, Parser, ParserRuleContext, Token } from 'antlr4';
import { TerminalNode } from 'antlr4/tree/Tree';

export declare class ParseContext extends ParserRuleContext {
  scope(): ScopeContext;
}

export declare class ScopeContext extends ParserRuleContext {}

export declare class StatementContext extends ParserRuleContext {
  eventStatement(): EventStatementContext;

  objectMethodCall(): ObjectMethodCallContext;

  staticMethodCall(): StaticMethodCallContext;

  varDeclaration(): VarDeclarationContext;

  varAssignment(): VarAssignmentContext;

  objectPropertyAssignment(): ObjectPropertyAssignmentContext;

  loopStatement(): LoopStatementContext;

  whileStatement(): WhileStatementContext;

  conditionalStatement(): ConditionalStatementContext;
}

export declare class VarDeclarationContext extends ParserRuleContext {
  VAR(): TerminalNode;

  IDENTIFIER(): TerminalNode;

  ASSIGN(): TerminalNode;

  expression(): ExpressionContext;
}

export declare class VarAssignmentContext extends ParserRuleContext {
  IDENTIFIER(): TerminalNode;

  expression(): ExpressionContext;

  ASSIGN(): TerminalNode;

  INC(): TerminalNode;

  DEC(): TerminalNode;
}

export declare class ObjectPropertyAssignmentContext extends ParserRuleContext {
  objectProperty(): ObjectPropertyContext;

  expression(): ExpressionContext;

  ASSIGN(): TerminalNode;

  INC(): TerminalNode;

  DEC(): TerminalNode;
}

export declare class EventStatementContext extends ParserRuleContext {
  AT(): TerminalNode;

  ASSIGN(): TerminalNode;

  LPAREN(): TerminalNode;

  RPAREN(): TerminalNode;

  ARROW(): TerminalNode;

  END(): TerminalNode;

  IDENTIFIER(): TerminalNode;

  scope(): ScopeContext;

  eventParams(): EventParamsContext;
}

export declare class EventParamsContext extends ParserRuleContext {}

export declare class ElseIfConditionalContext extends ParserRuleContext {
  IF(): TerminalNode;

  ELSE(): TerminalNode;

  expression(): ExpressionContext;

  scope(): ScopeContext;

  conditionalStatement(): ConditionalStatementContext;
}

export declare class ThenConditionalContext extends ParserRuleContext {
  IF(): TerminalNode;

  END(): TerminalNode;

  expression(): ExpressionContext;

  scope(): ScopeContext;
}

export declare class ElseCondiitionalContext extends ParserRuleContext {
  IF(): TerminalNode;

  ELSE(): TerminalNode;

  END(): TerminalNode;

  expression(): ExpressionContext;
}

export declare class ConditionalStatementContext extends ParserRuleContext {}

export declare class LoopStatementContext extends ParserRuleContext {
  LOOP(): TerminalNode;

  END(): TerminalNode;

  expression(): ExpressionContext;

  scope(): ScopeContext;
}

export declare class WhileStatementContext extends ParserRuleContext {
  WHILE(): TerminalNode;

  END(): TerminalNode;

  expression(): ExpressionContext;

  scope(): ScopeContext;
}

export declare class StaticCallExprContext extends ParserRuleContext {
  staticMethodCall(): StaticMethodCallContext;
}

export declare class UnaryExprContext extends ParserRuleContext {
  expression(): ExpressionContext;
}

export declare class AddSubExprContext extends ParserRuleContext {}

export declare class PrimaryExprContext extends ParserRuleContext {
  primary(): PrimaryContext;
}

export declare class BooleanExprContext extends ParserRuleContext {}

export declare class ObjectPropExprContext extends ParserRuleContext {
  objectProperty(): ObjectPropertyContext;
}

export declare class ComparisonExprContext extends ParserRuleContext {}

export declare class ParensExprContext extends ParserRuleContext {
  expression(): ExpressionContext;
}

export declare class ObjectCallExprContext extends ParserRuleContext {
  objectMethodCall(): ObjectMethodCallContext;
}

export declare class MulDivExprContext extends ParserRuleContext {}

export declare class PrimaryContext extends ParserRuleContext {
  objectIdentifier(): ObjectIdentifierContext;

  literal(): LiteralContext;
}

export declare class ObjectPropertyContext extends ParserRuleContext {
  DOT(): TerminalNode;

  objectIdentifier(): ObjectIdentifierContext;

  IDENTIFIER(): TerminalNode;
}

export declare class ObjectMethodCallContext extends ParserRuleContext {
  DOT(): TerminalNode;

  LPAREN(): TerminalNode;

  RPAREN(): TerminalNode;

  objectIdentifier(): ObjectIdentifierContext;

  IDENTIFIER(): TerminalNode;
}

export declare class StaticMethodCallContext extends ParserRuleContext {
  LPAREN(): TerminalNode;

  RPAREN(): TerminalNode;

  IDENTIFIER(): TerminalNode;
}

export declare class ObjectIdentifierContext extends ParserRuleContext {
  THIS(): TerminalNode;

  IDENTIFIER(): TerminalNode;
}

export declare class ExpressionParamContext extends ParserRuleContext {
  expression(): ExpressionContext;
}

export declare class LiteralParamContext extends ParserRuleContext {
  literal(): LiteralContext;
}

export declare class IdentifierParamContext extends ParserRuleContext {
  objectIdentifier(): ObjectIdentifierContext;
}

export declare class MethodParamContext extends ParserRuleContext {}

export declare class LiteralContext extends ParserRuleContext {
  NUMBER_LITERAL(): TerminalNode;

  BOOL_LITERAL(): TerminalNode;

  STRING_LITERAL(): TerminalNode;

  constantLiteral(): ConstantLiteralContext;
}

export declare class ConstantLiteralContext extends ParserRuleContext {
  keyInput(): KeyInputContext;
}

export declare class BooleanOperatorContext extends ParserRuleContext {
  AND(): TerminalNode;

  OR(): TerminalNode;

  NOT(): TerminalNode;
}

export declare class ArithmeticOperatorContext extends ParserRuleContext {
  ADD(): TerminalNode;

  SUB(): TerminalNode;

  MUL(): TerminalNode;

  DIV(): TerminalNode;

  MOD(): TerminalNode;
}

export declare class RelationalOperatorContext extends ParserRuleContext {
  GT(): TerminalNode;

  LT(): TerminalNode;

  GE(): TerminalNode;

  LE(): TerminalNode;

  EQUAL(): TerminalNode;

  NOTEQUAL(): TerminalNode;
}

export declare class KeyInputContext extends ParserRuleContext {
  ARROWUP(): TerminalNode;

  ARROWDOWN(): TerminalNode;

  ARROWLEFT(): TerminalNode;

  ARROWRIGHT(): TerminalNode;

  SPACE(): TerminalNode;

  SPACEBAR(): TerminalNode;

  KEYA(): TerminalNode;

  KEYB(): TerminalNode;

  KEYC(): TerminalNode;

  KEYD(): TerminalNode;

  KEYE(): TerminalNode;

  KEYF(): TerminalNode;

  KEYG(): TerminalNode;

  KEYH(): TerminalNode;

  KEYI(): TerminalNode;

  KEYJ(): TerminalNode;

  KEYK(): TerminalNode;

  KEYL(): TerminalNode;

  KEYM(): TerminalNode;

  KEYN(): TerminalNode;

  KEYO(): TerminalNode;

  KEYP(): TerminalNode;

  KEYQ(): TerminalNode;

  KEYR(): TerminalNode;

  KEYS(): TerminalNode;

  KEYT(): TerminalNode;

  KEYU(): TerminalNode;

  KEYV(): TerminalNode;

  KEYW(): TerminalNode;

  KEYX(): TerminalNode;

  KEYY(): TerminalNode;

  KEYZ(): TerminalNode;

  KEY0(): TerminalNode;

  KEY1(): TerminalNode;

  KEY2(): TerminalNode;

  KEY3(): TerminalNode;

  KEY4(): TerminalNode;

  KEY5(): TerminalNode;

  KEY6(): TerminalNode;

  KEY7(): TerminalNode;

  KEY8(): TerminalNode;

  KEY9(): TerminalNode;
}

export declare class ExpressionContext extends ParserRuleContext {}

export declare class PlaygroundParser extends Parser {
  readonly ruleNames: string[];
  readonly literalNames: string[];
  readonly symbolicNames: string[];

  constructor(input: CommonTokenStream);

  parse(): ParseContext;

  scope(): ScopeContext;

  statement(): StatementContext;

  varDeclaration(): VarDeclarationContext;

  varAssignment(): VarAssignmentContext;

  objectPropertyAssignment(): ObjectPropertyAssignmentContext;

  eventStatement(): EventStatementContext;

  eventParams(): EventParamsContext;

  conditionalStatement(): ConditionalStatementContext;

  loopStatement(): LoopStatementContext;

  whileStatement(): WhileStatementContext;

  primary(): PrimaryContext;

  objectProperty(): ObjectPropertyContext;

  objectMethodCall(): ObjectMethodCallContext;

  staticMethodCall(): StaticMethodCallContext;

  objectIdentifier(): ObjectIdentifierContext;

  methodParam(): MethodParamContext;

  literal(): LiteralContext;

  constantLiteral(): ConstantLiteralContext;

  booleanOperator(): BooleanOperatorContext;

  arithmeticOperator(): ArithmeticOperatorContext;

  relationalOperator(): RelationalOperatorContext;

  keyInput(): KeyInputContext;
}
