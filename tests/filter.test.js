// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//
const { expect } = require('chai');
import filter from '../instrumented/filter.js';


describe('filter test', function () {
    it("returning an array of all elements where active is true", function() {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false },
          ]
        const result = filter(users, ({ active }) => active)
        expect(result).to.deep.equal([ { user: 'barney', active: true } ])
    });
});