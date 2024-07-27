// 1-building.js

export default class Building {
  constructor(sqft) {
    this._sqft = this._validateNumber(sqft, 'sqft');
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Private method for validation
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Method that must be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
