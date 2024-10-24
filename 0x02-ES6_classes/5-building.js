#!/usr/bin/node
/**
** module for building
*/

export default class Building {
   constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
       throw new Error('Class extending Building must override evacuationWarningMessage');
    }
     if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
     }
     this._sqft = sqft;
   }

    get sqft() {
       return this._sqft;
    }
    set sqft(value) {
       return this._sqft = value;
    }

    
}
