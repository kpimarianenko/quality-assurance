import FSNode from './FSNode';
import { ReadFromEmptyBufferError, BufferOverflowedError } from './Errors';

import config from '../config';

export default class BufferFile extends FSNode {
  private buffer : string[] = [];

  public push(data : string): void {
    const { MAX_BUF_FILE_SIZE } = config;
    if (this.buffer.length >= MAX_BUF_FILE_SIZE) {
      throw new BufferOverflowedError();
    }

    this.buffer.push(data);
  }

  public content() : string {
    if (!this.buffer.length) {
      throw new ReadFromEmptyBufferError();
    }

    return this.buffer.shift();
  }
}