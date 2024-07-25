// car.js
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export class Car {
  constructor(brand, motor, color) {
    this[_brand] = this._validateString(brand, 'brand');
    this[_motor] = this._validateString(motor, 'motor');
    this[_color] = this._validateString(color, 'color');
  }

  // Getter for brand
  get brand() {
    return this[_brand];
  }

  // Getter for motor
  get motor() {
    return this[_motor];
  }

  // Getter for color
  get color() {
    return this[_color];
  }

  // Method to validate if a value is a string
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Method to clone the car
  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}
