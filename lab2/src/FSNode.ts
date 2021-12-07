class FSNode {
  private parent : Directory
  private readonly name : string

  constructor(name : string, parent : Directory | null = null) {
    this.name = name;
    this.parent = parent;
  }

  delete() : void {}
}