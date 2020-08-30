import {
  ObjectIdentifierContext,
  ParseContext,
  ScopeContext,
  StatementContext,
  VarAssignmentContext,
  VarDeclarationContext,
} from 'antlr/generated/PlaygroundParser';
import { PlaygroundVisitor } from 'antlr/generated/PlaygroundVisitor';
import IdentifierNode from 'antlr/nodes/IdentifierNode';
import RootNode from 'antlr/nodes/RootNode';
import ScopeNode from 'antlr/nodes/ScopeNode';
import VarAssignmentNode from 'antlr/nodes/VarAssignmentNode';
import VarDeclarationNode, {
  VarDeclarationNodeProps,
} from 'antlr/nodes/VarDeclarationNode';
import ExpressionVisitor from 'antlr/visitors/ExpressionVisitor';
import StatementVisitor from 'antlr/visitors/StatementVisitor';
import { TerminalNode } from 'antlr4/tree/Tree';
import VarAssignmentOperatorNode from 'antlr/nodes/operator/VarAssignmentOperatorNode';
import OperatorVisitor from 'antlr/visitors/OperatorVisitor';

/**
 * This is the entry point for processing ANTLR Playground parser tree. When the user code
 * has been parsed, we should walk through the generated tree to create our own,
 * which thereafter we can serve in game runtime. In order to do it, we should call `visitParse`.
 * Then the visitor will visit every child context recursively and create the tree of respective
 * PlaygroundNodes (from `@/playground/antlr/nodes`).
 *
 * Read some ANTLR Visitor articles for more information about how it works.
 * @export
 * @class PlaygroundCustomVisitor
 * @extends {PlaygroundVisitor}
 */
// @ts-ignore
export default class PlaygroundCustomVisitor extends PlaygroundVisitor {
  visitParse(ctx: ParseContext): RootNode {
    const root = new RootNode(PlaygroundCustomVisitor.visitScope(ctx.scope()));
    return root;
  }

  static visitScope(ctx: ScopeContext): ScopeNode {
    // @ts-ignore
    const statements: StatementContext[] = ctx.statement();
    const children = statements.map((statement) =>
      StatementVisitor.visitStatement(statement),
    );
    const scopeNode = new ScopeNode(children, ctx.start.line);
    return scopeNode;
  }

  static visitVarDeclaration(ctx: VarDeclarationContext): VarDeclarationNode {
    const variableName = ctx.IDENTIFIER().getText();
    const props: VarDeclarationNodeProps = { variableName };

    const assignmentContext = ctx.expression();
    if (assignmentContext) {
      props.assignment = ExpressionVisitor.visitExpression(assignmentContext);
    }

    return new VarDeclarationNode(props, ctx.start.line);
  }

  static visitVarAssignment(ctx: VarAssignmentContext): VarAssignmentNode {
    const operator = OperatorVisitor.visitOperator(
      ctx.getChild(1),
    ) as VarAssignmentOperatorNode;
    return new VarAssignmentNode(
      ctx.IDENTIFIER().getText(),
      operator,
      ExpressionVisitor.visitExpression(ctx.expression()),
      ctx.start.line,
    );
  }

  static visitIdentifier(
    ctx: ObjectIdentifierContext | TerminalNode,
  ): IdentifierNode {
    const line = ctx instanceof ObjectIdentifierContext ? ctx.start.line : 0;
    return new IdentifierNode(ctx.getText(), line);
  }
}
