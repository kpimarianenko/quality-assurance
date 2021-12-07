import Directory from './Directory';
import { NodeAlreadyExistError, RootFolderDeleteError, RootFolderMoveError } from './Errors';

export default class FSNode {
  public parent : Directory
  public readonly name : string

  constructor(name : string, parent : Directory | null = null) {
    if (parent && parent.children.find(f => f.name === name)) {
      throw new NodeAlreadyExistError();
    }

    if (!name) this.name = `file_${Date.now()}`;
    else this.name = name;
    parent?.add(this);
  }

  delete() : void {
    if (!this.parent) {
      throw new RootFolderDeleteError();
    }

    this.parent.children = this.parent.children.filter(
      file  => file !== this
    );
  }

  moveTo(target : Directory) : void {
    if (!this.parent) {
      throw new RootFolderMoveError();
    }

    this.delete();
    target.add(this);
  }
}