import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { expect } = require('chai');
const chai = require('chai');

import countBy from '../src/countBy.js';

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
    ]

describe('Count by test', function () {
    it('should count the corresponding value of each key is the number of times the key was returned', function () {
        const result = countBy(users, value => value.active);
        console.log(result);
        //expect(result).to.equal()
    });
});