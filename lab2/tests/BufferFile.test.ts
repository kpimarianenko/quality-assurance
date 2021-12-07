import BufferFile from '../src/BufferFile';
import Directory from '../src/Directory';

import config from '../config';

describe('Buffer file', () => {
  const root = new Directory('root');
  const filename = 'filename';
  let file : BufferFile = null;

  test('should be created successfully', () => {
    expect(() => file = new BufferFile(filename, root)).not.toThrowError();
  });

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
      const { MAX_BUF_FILE_SIZE } = config;
      for (let i = 0; i <= MAX_BUF_FILE_SIZE; i++) {
        file.push(`content${i}`);
      }
    }).toThrowError();
  });
});