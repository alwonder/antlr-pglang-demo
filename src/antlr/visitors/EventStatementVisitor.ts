import {
  EventParamsContext,
  EventStatementContext,
} from 'antlr/generated/PlaygroundParser';
import EventStatementNode, {
  EventStatementNodeProps,
} from 'antlr/nodes/EventStatementNode';
import IdentifierNode from 'antlr/nodes/IdentifierNode';
import PlaygroundCustomVisitor from 'antlr/visitors/PlaygroundCustomVisitor';
import { TerminalNode } from 'antlr4/tree/Tree';

export default class EventStatementVisitor {
  static visitEventStatement(ctx: EventStatementContext): EventStatementNode {
    const props: EventStatementNodeProps = {
      name: ctx.IDENTIFIER().getText(),
      body: PlaygroundCustomVisitor.visitScope(ctx.scope()),
    };

    const eventParams = ctx.eventParams();
    if (eventParams) {
      props.params = EventStatementVisitor.visitEventParams(eventParams);
    }

    return new EventStatementNode(props, ctx.start.line);
  }

  private static visitEventParams(ctx: EventParamsContext): IdentifierNode[] {
    // @ts-ignore
    const params: TerminalNode[] = ctx.IDENTIFIER();
    return params.map((identifier) =>
      PlaygroundCustomVisitor.visitIdentifier(identifier),
    );
  }
}
