// 1-holbertonClass.js
export class HolbertonClass {
  constructor(year, location) {
    this._year = this._validateNumber(year, 'year');
    this._location = this._validateString(location, 'location');
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }

  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
}
