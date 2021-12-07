import BinaryFile from '../src/BinaryFile';
import Directory from '../src/Directory';

describe('Binary file', () => {
  const filename = 'filename';
  let root : Directory = null;

  beforeEach(() => root = new Directory('root'));

  test('should be created successfully', () => {
    expect(() => new BinaryFile(filename, root)).not.toThrowError();
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