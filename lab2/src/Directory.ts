import FSNode from './FSNode';
import { FolderOverflowedError } from './Errors';

export default class Directory extends FSNode {
  public children : FSNode[] = []

  public add(node : FSNode) : void {
    const { DIR_MAX_ELEMS } = process.env
    if (this.children.length + 1 > +DIR_MAX_ELEMS) {
      throw new FolderOverflowedError();
    }

    node.parent = this;
    this.children.push(node);
  }

  public list() : FSNode[] {
    return this.children;
  }
}