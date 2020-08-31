import VarDeclarationNode from '@/antlr/nodes/VarDeclarationNode';
import parse from './parse';

describe('Playground Tree', () => {
  it('should call "walk" method', () => {
    const root = parse('');
    let callsCount = 0;

    root.walk(() => {
      callsCount += 1;
    });

    // The tree should have Root and Scope nodes, therefore callsCount should equal 2
    expect(callsCount).toEqual(2);
  });

  it('should count specific statements via "walk" method', () => {
    const root = parse(`
      var a = 4
      var b = a - 1
      a = b + 7
    `);
    let callsCount = 0;

    root.walk((node) => {
      if (node instanceof VarDeclarationNode) {
        callsCount += 1;
      }
    });

    expect(callsCount).toEqual(2);
  });

  it('should count specific statements via "countInstances" method', () => {
    const root = parse(`
      var a = 4
      var b = a - 1
      a = b + 7
    `);

    const instancesCount = root.countInstances(VarDeclarationNode);

    expect(instancesCount).toEqual(2);
  });

  it('should reduce each tree node via "reduce" method', () => {
    const root = parse(`
      var a = 4
      var b = a - 1
      a = b + 7
    `);

    const instancesCount = root.reduce<number>((acc, current) => {
      if (current instanceof VarDeclarationNode) {
        return acc + 1;
      }
      return acc;
    }, 0);

    expect(instancesCount).toEqual(2);
  });

  it('should throw an error on RootNode.setParent()', () => {
    const root = parse('');
    const setParent = () => root.setParent(root.getScope());

    expect(setParent).toThrowError('Cannot set parent for RootNode');
  });
});
