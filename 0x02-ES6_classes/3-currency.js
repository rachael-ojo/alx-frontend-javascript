// 0-currency.js

export default class Currency {
    constructor(code, name) {
        this._code = this._validateString(code, 'code');
        this._name = this._validateString(name, 'name');
    }

    // Getter and Setter for code
    get code() {
        return this._code;
    }

    set code(value) {
        this._code = this._validateString(value, 'code');
    }

    // Getter and Setter for name
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = this._validateString(value, 'name');
    }

    // Method to display full currency
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }

    // Private method for validation
    _validateString(value, attributeName) {
        if (typeof value !== 'string') {
            throw new TypeError(`${attributeName} must be a string`);
        }
        return value;
    }
}
