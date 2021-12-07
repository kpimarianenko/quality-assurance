import FSNode from './FSNode';

export default class LogTextFile extends FSNode {
  private data : string = '';

  public append(data : string) : void {
    this.data += data + '\n';
  }

  public content() : string {
    return this.data;
  }
}