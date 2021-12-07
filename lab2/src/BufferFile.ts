import FSNode from './FSNode';
import { ReadFromEmptyBufferError } from './Errors';

export default class BufferFile extends FSNode {
  private buffer : string[] = [];

  public push(data : string): void {
    this.buffer.push(data);
  }

  public content() : string {
    if (!this.buffer.length) {
      throw new ReadFromEmptyBufferError();
    }

    return this.buffer.shift();
  }
}