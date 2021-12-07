class BinaryFile extends FSNode {
  data : string = ''

  constructor(name : string, parent : Directory, data : string) {
    super(name, parent);
    this.data = data;
  }

  public content() : string { return ''; }
}