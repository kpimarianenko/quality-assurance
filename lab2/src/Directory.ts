class Directory extends FSNode {
  children : FSNode[]

  public move(node : FSNode, target : Directory) : void {}

  public add(node : FSNode) : void {}

  public list() : FSNode[] { return []; }
}