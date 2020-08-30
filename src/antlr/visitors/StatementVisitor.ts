import { StatementContext } from 'antlr/generated/PlaygroundParser';
import ConditionalVisitor from 'antlr/visitors/ConditionalVisitor';
import EventStatementVisitor from 'antlr/visitors/EventStatementVisitor';
import LoopStatementVisitor from 'antlr/visitors/LoopStatementVisitor';
import ObjectVisitor from 'antlr/visitors/ObjectVisitor';
import PlaygroundCustomVisitor from 'antlr/visitors/PlaygroundCustomVisitor';
import PlaygroundVisitorError from 'antlr/PlaygroundVisitorError';
import StaticMethodCallVisitor from 'antlr/visitors/StaticMethodCallVisitor';

export default class StatementVisitor {
  static visitStatement(ctx: StatementContext) {
    const objectMethodCall = ctx.objectMethodCall();
    if (objectMethodCall !== null) {
      return ObjectVisitor.visitObjectMethodCall(objectMethodCall);
    }

    const eventStatement = ctx.eventStatement();
    if (eventStatement !== null) {
      return EventStatementVisitor.visitEventStatement(eventStatement);
    }

    const varDeclaration = ctx.varDeclaration();
    if (varDeclaration !== null) {
      return PlaygroundCustomVisitor.visitVarDeclaration(varDeclaration);
    }

    const varAssignment = ctx.varAssignment();
    if (varAssignment !== null) {
      return PlaygroundCustomVisitor.visitVarAssignment(varAssignment);
    }

    const propAssignment = ctx.objectPropertyAssignment();
    if (propAssignment !== null) {
      return ObjectVisitor.visitObjectPropertyAssignment(propAssignment);
    }

    const conditionalStatement = ctx.conditionalStatement();
    if (conditionalStatement !== null) {
      return ConditionalVisitor.visitConditional(conditionalStatement);
    }

    const loopStatement = ctx.loopStatement();
    if (loopStatement !== null) {
      return LoopStatementVisitor.visitLoopStatement(loopStatement);
    }

    const whileStatement = ctx.whileStatement();
    if (whileStatement !== null) {
      return LoopStatementVisitor.visitWhileStatement(whileStatement);
    }

    const staticMethodCall = ctx.staticMethodCall();
    if (staticMethodCall !== null) {
      return StaticMethodCallVisitor.visitStaticMethodCall(staticMethodCall);
    }

    throw new PlaygroundVisitorError(
      'Error while visiting StatementContext. No expected statements found',
      ctx,
    );
  }
}
