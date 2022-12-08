// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { expect } = require('chai');
const chai = require('chai');

import add from '../src/add.js';


describe('Add test', function () {
    it('should add numbers correctly', function () {
        const result = add(1, 2);
        console.log(result);
        expect(result).to.equal(3)
    });
});
