// 6-skyHighBuilding.js

import Building from './5-building';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = this._validateNumber(floors, 'floors');
    }

    // Getter for floors
    get floors() {
        return this._floors;
    }

    // Override the evacuationWarningMessage method
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }

    // Private method for validation
    _validateNumber(value, attributeName) {
        if (typeof value !== 'number') {
            throw new TypeError(`${attributeName} must be a number`);
        }
        return value;
    }
}
