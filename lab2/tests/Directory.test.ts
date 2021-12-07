import Directory from '../src/Directory';

describe('Directory', () => {
  const dirname = 'dirname';
  let root : Directory = null;

  beforeEach(() => root = new Directory('root'));

  test('should be created successfully', () => {
    expect(() => new Directory(dirname, root)).not.toThrowError();
  });

  test('should be empty after creation', () => {
    const dir = new Directory(dirname, root);
    expect(dir.list().length).toBe(0);
  });

  test('should contain a proper item', () => {
    const dir = new Directory(dirname, root);
    expect(root.list()[0].name).toEqual(dir.name);
  });

  test('should have a proper name', () => {
    const dir = new Directory(dirname, root);
    expect(dir.name).toEqual(dirname);
  });

  test('should have a proper parent', () => {
    const dir = new Directory(dirname, root);
    expect(dir.parent).toBe(root);
  });

  test('should be impossible to move, in case it is a root', () => {
    expect(() => {
      const dir = new Directory(dirname, root);
      root.moveTo(dir);
    }).toThrowError();
  });

  test('should be impossible to overflow', () => {
    const dir = new Directory(dirname, root);
    expect(() => {
      const { DIR_MAX_ELEMS } = process.env;
      for (let i = 0; i < +DIR_MAX_ELEMS + 1; i++) {
        dir.add(new Directory(`dir${i}`));
      }
    }).toThrowError();
  });
});