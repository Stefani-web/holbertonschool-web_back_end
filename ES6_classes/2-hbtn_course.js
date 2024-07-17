export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateArrayOfStrings(students, 'Students');
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    this._name = this._validateString(newName, 'Name');
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, 'Length');
  }

  set students(newStudents) {
    this._students = this._validateArrayOfStrings(newStudents, 'Students');
  }

  // Validation methods
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  _validateArrayOfStrings(value, attributeName) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError(`${attributeName} must be an array of strings`);
    }
    return value;
  }
}
