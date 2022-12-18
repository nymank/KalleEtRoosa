import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { expect } = require('chai');
const chai = require('chai');

import countBy from '../instrumented/countBy.js';

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'betty', 'active': false },
    { 'user': 'betty', 'active': false },
    { 'user': 'fred', 'active': false }
    ]

describe('Count by test', function () {
    it('should count the instances of the value correctly', function () {

        const result = countBy(users, value => value.active);
        expect(result).to.deep.equal({ true: 2, false: 3 })
    });
});