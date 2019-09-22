export class NotesAppPattern {
  numberOnly(value: any) {
    const pattern = '^[0-9]*$';
    const regexp = new RegExp(pattern);
    if (!regexp.test(value)) {
       return false;
    }
  }
}
