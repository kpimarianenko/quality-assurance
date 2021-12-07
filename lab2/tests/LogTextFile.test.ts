import LogTextFile from '../src/LogTextFile';
import Directory from '../src/Directory';

describe('Log text file', () => {
  const filename = 'filename';
  let root : Directory = null;

  beforeEach(() => {
    root = new Directory('root');
  });

  test('should be created successfully', () => {
    expect(() => new LogTextFile(filename, root)).not.toThrowError();
  });

  test('should have a proper name', () => {
    const file = new LogTextFile(filename, root);
    expect(file.name).toBe(filename);
  });

  test('should have a proper parent', () => {
    const file = new LogTextFile(filename, root);
    expect(file.parent).toBe(root);
  });

  test('should be empty after creation', () => {
    const file = new LogTextFile(filename, root);
    expect(file.content()).toBe('');
  });

  test('should append content to the end of the file', () => {
    const file = new LogTextFile(filename, root);

    const line1 = 'Line1';
    const line2 = 'Line2';

    file.append(line1);
    expect(file.content()).toBe(`${line1}\n`);
    file.append(line2);
    expect(file.content()).toBe(`${line1}\n${line2}\n`);
  });
});