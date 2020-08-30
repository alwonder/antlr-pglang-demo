import LoopWalker from 'antlr/walker/LoopWalker';

export interface Loop {
  loopWalker: LoopWalker;
  init(): void;
  conditionIsMet(): boolean;
  iterate(): void;
}
