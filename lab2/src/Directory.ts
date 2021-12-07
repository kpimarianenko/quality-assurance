import FSNode from './FSNode';
import { FolderOverflowedError } from './Errors';

import config from '../config';

export default class Directory extends FSNode {
  public children : FSNode[] = []

  public add(node : FSNode) : void {
    const { DIR_MAX_ELEMS } = config;
    if (this.children.length >= DIR_MAX_ELEMS) {
      throw new FolderOverflowedError();
    }

    node.parent = this;
    this.children.push(node);
  }

  public list() : FSNode[] {
    return this.children;
  }
}