describe('Node', () => {
  const filename = 'filename';
  let root : Directory = null;

  beforeEach(() => {
    root = new Directory('root');
  });

  test('should be created and deleted successfully', () => {
    const file = new BinaryFile(filename, root);
    expect(root.children.length).toBe(1);

    file.delete();
    expect(root.children.length).toBe(0);
  });

  test('should not be created in a dir with similar node', () => {
    expect(() => {
      new BinaryFile(filename, root);
      new BinaryFile(filename, root);
    }).toThrowError();
  });

  test('should moved successfully', () => {
    const dir = new Directory('dir');
    root.add(dir);

    const file = new BinaryFile(filename, root);
    expect(root.children.includes(file)).toBeTruthy();

    file.moveTo(dir);
    expect(dir.children.includes(file)).toBeTruthy();
  });
});