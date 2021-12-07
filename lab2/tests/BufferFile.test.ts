import BufferFile from '../src/BufferFile';
import Directory from '../src/Directory';

describe('Buffer file', () => {
  const root = new Directory('root');
  const filename = 'filename';

  test('should be created successfully', () => {
    expect(() => new BufferFile(filename, root)).not.toThrowError();
  });

  const file = new BufferFile(filename, root);

  test('should have a proper name', () => {
    expect(file.name).toBe(filename);
  });

  test('should have a proper parent', () => {
    expect(file.parent).toBe(root);
  });

  test('should be impossible to read an empty buffer', () => {
    expect(() => file.content()).toThrowError();
  });

  test('should work like a queue', function() {
    const content1 = 'string1';
    const content2 = 'string2';
    const content3 = 'string3';

    file.push(content1);
    file.push(content2);

    expect(file.content()).toEqual(content1);
    expect(file.content()).toEqual(content2);

    file.push(content3);

    expect(file.content()).toEqual(content3);
  });

  test('should be impossible to overflow', () => {
    expect(() => {
      const { MAX_BUF_FILE_SIZE } = process.env;
      for (let i = 0; i < +MAX_BUF_FILE_SIZE + 1; i++) {
        file.push(`content${i}`);
      }
    }).toThrowError();
  });
});