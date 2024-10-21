#!/usr/bin/node
/**
** module for building inheritance
*/

import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
      super(sqft);
      this._floors = floors;
    }

    get floors() { 
      return this._floors;
    }

    set floors(value) {
        if (typeof floors !== 'number') {
         throw new TypeError('floors must be a number');
        } 
        return this._floors = value;
    }

    evacuationWarningMessage() {

       return `Evacuate slowly the ${this._floors} floors`;
    }
}
