export class NodeAlreadyExistError extends Error {
  constructor() {
    super('File with this name already exists');
  }
}

export class RootFolderDeleteError extends Error {
  constructor() {
    super('Unable to delete root folder');
  }
}

export class RootFolderMoveError extends Error {
  constructor() {
    super('Unable to move root folder');
  }
}

export class FolderOverflowedError extends Error {
  constructor() {
    super('Folder is overflowed');
  }
}

export class BufferOverflowedError extends Error {
  constructor() {
    super('Buffer is overflowed');
  }
}

export class ReadFromEmptyBufferError extends Error {
  constructor() {
    super('Unable to read from empty buffer')
  }
}