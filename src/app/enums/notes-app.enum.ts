export enum UserEnum {
  USERNAME = 'username',
  PASSWORD = 'password',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  DOB = 'dateOfBirth',
  GENDER = 'gender',
  CONTACT_NUMBER = 'contactNumber',
  EMAIL = 'email',
  NOTES_LIST = 'notesList'
}

export enum LoginFormErrorEnum {
  USERNAME_REQD = 'Username is required',
  PASSWORD_REQD = 'Password is required'
}

export enum RouterEnum {
  HOME = '',
  AUTHENTICATION = 'auth',
  LOGIN = 'login',
  SIGNUP = 'signup',
  NOTES = 'notes'
}

export enum ReactiveFormValidatorsEnum {
  REQUIRED = 'required'
}

export enum ErrorMessagesEnum {
  REQUIRED_ERROR_SUFFIX = ' is required'
}

export enum FieldLabelEnum {
  FIRST_NAME = 'First name',
  LAST_NAME = 'Last name',
  USERNAME = 'Username',
  PASSWORD = 'Password',
  DOB = 'Date of birth',
  EMAIL = 'Email',
  PHONE_NUMBER = 'Phone number'
}

export enum NotesTypeEnum {
  TEXT = 'TEXT',
  LIST = 'LIST',
  LINK = 'LINK',
  MAP = 'MAP',
  IMAGE = 'IMAGE'
}

export enum NotesModelEnum {
  TITLE = 'title',
  CREATION_DATE = 'creationDate',
  NOTES_TYPE = 'notesType',
  TEXT = 'text',
  LINK = 'link',
  LIST = 'list',
  CHECKED_LIST = 'checkedList',
  UNCHECKED_LIST = 'uncheckedList',
  FILE_NAME = 'fileName',
  IMAGE_BASE64 = 'imageBase64'
}

export enum PatternEnum {
  NUMERIC = '^[0-9]*$',
  ALPHANUMERIC_WITHOUT_SPACE_N_SPECIAL_CHARS = '^[0-9a-zA-Z_]*$',
  ALPHANUMERIC_WITH_SPECIAL_CHARS = '^[0-9a-zA-Z!@#$%^&*()_]*$',
  URL_PATTERN = '^(((http|https):\/\/)?(www.)?)?[a-zA-z]+\.[a-zA-Z]+$'
}
