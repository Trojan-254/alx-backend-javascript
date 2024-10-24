#!/usr/bin/node
/**
* module for HolbertonCourse
*/

export default class HolbertonCourse {
    constructor(name, length, students) {

        if (typeof name !== 'string') {
           throw new TypeError('Name must be a string');
        }
        if (typeof length !== 'number') {
           throw new TypeError('Length must be a number');
        }
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        return this._name = value
    }
    get length() { 
        return this._length;
    }
    set length(value) { 
        return this._length = value
    }

    get students() { 
        return this._students;
    }
    set students(value) { 
        return this._students = value
    }
}
