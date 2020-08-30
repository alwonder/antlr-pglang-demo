import { NodeTypes, isRootNode } from '@/antlr/NodeTypes';
import {
  isStatementNameProvider,
  isStatementParamProvider,
} from './StatementNameProvider';
import RootNode from './RootNode';

/**
 * Base class for nodes of Playground Tree, created by PlaygroundCustomVisitor.
 * @export
 * @abstract
 * @class PlaygroundNode
 */
export default abstract class PlaygroundNode {
  abstract readonly nodeType: NodeTypes;

  protected parent?: PlaygroundNode;

  protected children: PlaygroundNode[];

  public line: number;

  constructor(children?: PlaygroundNode[], line?: number) {
    this.children = children || [];
    this.line = line || 0;
  }

  /**
   * Get the parent of the current node. Every node except RootNode should have its parent.
   * @returns PlaygroundNode | undefined
   * @memberof PlaygroundNode
   */
  getParent() {
    return this.parent;
  }

  getRoot(): RootNode {
    if (isRootNode(this)) return this;
    return this.parent!.getRoot();
  }

  /**
   * Set a parent for the current node. Should be used only in other nodes constructors
   * or in tests. Setting the parent for RootNode is forbidden.
   * @param {PlaygroundNode} parent
   * @memberof PlaygroundNode
   */
  setParent(parent: PlaygroundNode) {
    this.parent = parent;
  }

  /**
   * Remove the parent of the current node. Idk if it's useful, maybe only in tests.
   * @memberof PlaygroundNode
   */
  removeParent() {
    this.parent = undefined;
  }

  /**
   * Walk through the node and its children recursively
   * and invoke the callback parameter for every node.
   * @param {(value: PlaygroundNode) => void} callback
   * @memberof PlaygroundNode
   */
  walk(callback: (value: PlaygroundNode) => void): void {
    callback(this);
    this.forEach((child) => child.walk(callback));
  }

  /**
   * Walk through the node's parents chain up to the root node.
   * @param {(value: PlaygroundNode) => void} callback
   * @memberof PlaygroundNode
   */
  walkUp(callback: (value?: PlaygroundNode) => void): void {
    callback(this);
    if (this.parent) {
      callback(this.parent);
    }
  }

  /**
   * Get the count of specific instances inside the tree or subtree.
   * May be useful for task estimating or collecting statistics.
   * @param {*} instanceClass
   * @param {string} name statement name for StatementNameProviders.
   * Use to count instances with specific names like event 'onKey' etc
   * @returns
   * @memberof PlaygroundNode
   */
  countInstances(instanceClass: any, name?: string, params?: any[]) {
    let instancesCount = 0;

    this.walk((node) => {
      if (node instanceof instanceClass) {
        if (name === undefined) instancesCount += 1;
        else if (params) {
          if (isStatementParamProvider(node) && node.hasSomeParameters(params))
            instancesCount += 1;
        } else if (
          isStatementNameProvider(node) &&
          node.getStatementName() === name
        )
          instancesCount += 1;
      }
    });

    return instancesCount;
  }

  /**
   * Walk through the tree or subtree and reduce nodes into the accumulator.
   * @template T
   * @param callback
   * @param {T} initialValue
   * @returns {T}
   * @memberof PlaygroundNode
   */
  reduce<T>(
    callback: (
      previousValue: T,
      currentValue: PlaygroundNode,
      currentIndex?: number,
      array?: PlaygroundNode[],
    ) => T,
    initialValue: T,
  ): T {
    let acc = callback(initialValue, this);
    this.forEach((node) => {
      acc = node.reduce(callback, acc);
    });

    return acc;
  }

  /**
   * Iterate throwgh node's children (not recursively) and invoke callback for each child.
   * @param {(value: PlaygroundNode, index: number, arr: PlaygroundNode[]) => void} callback
   * @memberof PlaygroundNode
   */
  forEach(
    callback: (
      value: PlaygroundNode,
      index?: number,
      arr?: PlaygroundNode[],
    ) => void,
  ) {
    this.children.forEach((child, index, array) =>
      callback(child, index, array),
    );
  }

  async forEachAsync(
    callback: (
      value: PlaygroundNode,
      index?: number,
      arr?: PlaygroundNode[],
    ) => Promise<void>,
  ) {
    for (let index = 0; index < this.children.length; index++) {
      await callback(this.children[index], index, this.children);
    }
  }
}
