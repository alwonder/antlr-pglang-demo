// Generated from Playground.g4 by ANTLR 4.7.1
// jshint ignore: start
const antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PlaygroundParser.

function PlaygroundVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this);
  return this;
}

PlaygroundVisitor.prototype = Object.create(
  antlr4.tree.ParseTreeVisitor.prototype,
);
PlaygroundVisitor.prototype.constructor = PlaygroundVisitor;

// Visit a parse tree produced by PlaygroundParser#parse.
PlaygroundVisitor.prototype.visitParse = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#scope.
PlaygroundVisitor.prototype.visitScope = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#statement.
PlaygroundVisitor.prototype.visitStatement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#varDeclaration.
PlaygroundVisitor.prototype.visitVarDeclaration = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#varAssignment.
PlaygroundVisitor.prototype.visitVarAssignment = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#objectPropertyAssignment.
PlaygroundVisitor.prototype.visitObjectPropertyAssignment = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#eventStatement.
PlaygroundVisitor.prototype.visitEventStatement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#eventParams.
PlaygroundVisitor.prototype.visitEventParams = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#elseIfConditional.
PlaygroundVisitor.prototype.visitElseIfConditional = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#elseCondiitional.
PlaygroundVisitor.prototype.visitElseCondiitional = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#thenConditional.
PlaygroundVisitor.prototype.visitThenConditional = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#loopStatement.
PlaygroundVisitor.prototype.visitLoopStatement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#whileStatement.
PlaygroundVisitor.prototype.visitWhileStatement = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#staticCallExpr.
PlaygroundVisitor.prototype.visitStaticCallExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#unaryExpr.
PlaygroundVisitor.prototype.visitUnaryExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#addSubExpr.
PlaygroundVisitor.prototype.visitAddSubExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#primaryExpr.
PlaygroundVisitor.prototype.visitPrimaryExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#booleanExpr.
PlaygroundVisitor.prototype.visitBooleanExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#objectPropExpr.
PlaygroundVisitor.prototype.visitObjectPropExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#comparisonExpr.
PlaygroundVisitor.prototype.visitComparisonExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#parensExpr.
PlaygroundVisitor.prototype.visitParensExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#objectCallExpr.
PlaygroundVisitor.prototype.visitObjectCallExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#mulDivExpr.
PlaygroundVisitor.prototype.visitMulDivExpr = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#primary.
PlaygroundVisitor.prototype.visitPrimary = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#objectProperty.
PlaygroundVisitor.prototype.visitObjectProperty = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#objectMethodCall.
PlaygroundVisitor.prototype.visitObjectMethodCall = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#staticMethodCall.
PlaygroundVisitor.prototype.visitStaticMethodCall = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#objectIdentifier.
PlaygroundVisitor.prototype.visitObjectIdentifier = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#identifierParam.
PlaygroundVisitor.prototype.visitIdentifierParam = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#literalParam.
PlaygroundVisitor.prototype.visitLiteralParam = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#expressionParam.
PlaygroundVisitor.prototype.visitExpressionParam = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#literal.
PlaygroundVisitor.prototype.visitLiteral = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#constantLiteral.
PlaygroundVisitor.prototype.visitConstantLiteral = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#booleanOperator.
PlaygroundVisitor.prototype.visitBooleanOperator = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#arithmeticOperator.
PlaygroundVisitor.prototype.visitArithmeticOperator = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#relationalOperator.
PlaygroundVisitor.prototype.visitRelationalOperator = function (ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by PlaygroundParser#keyInput.
PlaygroundVisitor.prototype.visitKeyInput = function (ctx) {
  return this.visitChildren(ctx);
};

exports.PlaygroundVisitor = PlaygroundVisitor;
