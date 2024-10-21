#!/usr/bin/node
/**
** module for Currency
*/

export default class Currency {
    constructor(code, name) {
       if (typeof code !== 'string') {
            throw new TypeError('code must be a string');
       }
       if (typeof name !== 'string') { 
            throw new TypeError('name must be a string');
       }
       this._code = code;
       this._name = name;
    }

    get code() {
        return this._code;
    }
    set code(value) {
        return this._code = value;
    }

    get name() { 
        return this._name;
    }
    set name(value) { 
        return this._name = value;
    }

    displayFullCurrency () {
       return `${this._name} (${this._code})`;
    }

}
