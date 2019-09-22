import { NotesModelEnum, NotesTypeEnum } from '../enums/notes-app.enum';

export class Notes {
  [NotesModelEnum.TITLE]: string;
  [NotesModelEnum.CREATION_DATE]: Date = new Date();
  [NotesModelEnum.NOTES_TYPE]: string;

  constructor() {}
}

export class TextNotes extends Notes {
  [NotesModelEnum.TEXT]: string;

  constructor() {
    super();
    this[NotesModelEnum.NOTES_TYPE] = NotesTypeEnum.TEXT;
  }
}

export class List {
  [NotesModelEnum.CHECKED_LIST]: string[] = [];
  [NotesModelEnum.UNCHECKED_LIST]: string[] = [];
}

export class ListNotes extends Notes {
  [NotesModelEnum.LIST] = new List();

  constructor() {
    super();
    this[NotesModelEnum.NOTES_TYPE] = NotesTypeEnum.LIST;
  }
}

export class LinkNotes extends Notes {
  [NotesModelEnum.LINK] = '';

  constructor() {
    super();
    this[NotesModelEnum.NOTES_TYPE] = NotesTypeEnum.LINK;
  }
}
