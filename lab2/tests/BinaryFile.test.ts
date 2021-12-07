describe('Binary file', () => {
  const root = new Directory('root');
  const filename = 'filename';

  test('should be created successfully', () => {
    expect(() => new BinaryFile('file1', root)).not.toThrowError();
  });

  test('should be empty after creation', () => {
    const file = new BinaryFile(filename, root);
    expect(file.content()).toEqual('');
  });

  test('should have a proper parent', () => {
    const file = new BinaryFile(filename, root);
    expect(file.parent).toBe(root);
  });

  test('should have a proper filename', () => {
    const file = new BinaryFile(filename, root);
    expect(file.name).toBe(filename);
  });

  test('should have a proper content', () => {
    const content = 'Fake file content...';
    const file = new BinaryFile(filename, root, content);
    expect(file.content()).toBe(content);
  });
});