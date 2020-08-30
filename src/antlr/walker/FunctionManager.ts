import { PlaygroundWalkerModule } from 'antlr/walker/PlaygroundWalkerModule';
import PlaygroundTreeWalker from 'antlr/walker/PlaygroundTreeWalker';
import EventStatementNode from 'antlr/nodes/EventStatementNode';
import { isEventStatementNode } from 'antlr/NodeTypes';
import { Scope } from 'antlr/walker/ScopeManager';
import RuntimeError from './RuntimeError';

export interface Invocation {
  func: EventStatementNode;
  args: any[];
}

interface EventStatementsMap {
  [x: string]: EventStatementNode[];
}

export default class FunctionManager implements PlaygroundWalkerModule {
  readonly walker: PlaygroundTreeWalker;

  // TODO: replace EventStatementNode with some function interface
  readonly functionsSet = new Set<EventStatementNode>();

  readonly invocationsSet = new Set<Invocation>();

  private events: EventStatementsMap = {};

  constructor(walker: PlaygroundTreeWalker) {
    this.walker = walker;
  }

  scanFunctions() {
    this.walker.tree.walk((node) => {
      if (isEventStatementNode(node)) {
        this.functionsSet.add(node);
      }
    });

    this.assembleEventListeners();
  }

  private assembleEventListeners() {
    const eventStatements: EventStatementNode[] = [];

    this.functionsSet.forEach((func) => {
      if (func instanceof EventStatementNode) {
        eventStatements.push(func);
      }
    });

    eventStatements.forEach((event) => {
      const eventName = event.getName();
      if (!this.events[eventName]) this.events[eventName] = [];
      this.events[eventName].push(event);
    });
  }

  getFunctions() {
    return this.functionsSet;
  }

  invokeEvents(name: string, ...params: any[]) {
    if (!this.events[name]) return;
    this.events[name].forEach((event) =>
      this.invokeFunction(event, params, this.walker.getGlobalScope()),
    );
  }

  invokeFunction(func: EventStatementNode, args: any[] = [], scope?: Scope) {
    if (!this.functionsSet.has(func)) {
      throw new RuntimeError(
        `The function ${func.getName()} hasn't been declared yet`,
        func.line,
      );
    }

    const funcParams = func.getParams();
    if (funcParams.length !== args.length) {
      throw new RuntimeError(
        `The function ${func.getName()} has been invoked with wrong amount of params`,
        func.line,
      );
    }

    const functionBody = func.getBody();
    const functionScope = this.walker.createScope(functionBody, scope);
    funcParams.forEach((param, index) =>
      functionScope.variables.set(param.getValue(), args[index]),
    );
    this.walker.handleScopeNode(functionBody, functionScope);

    this.walker.deleteScope(functionScope);
  }
}
