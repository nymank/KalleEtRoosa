// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { expect } = require('chai');
const chai = require('chai');

import capitalize from '../src/capitalize.js';

describe('Capitalize test', function () {
    it('first character should be upper case and the remaining lower case.', function () {
        const result = capitalize("STORE");
        console.log(result);
        expect(result).to.equal("Store")
    });

    it('after numbers the remaining character should be lower case', function () {
        const result = capitalize("123 ITEM");
        console.log(result);
        expect(result).to.equal("123 item")
    });
    it('should convert numbers to string', function () {
        const result = capitalize(22);
        console.log(result);
        expect(result).to.be.a("string");
        //expect(result).to.equal("22");
    });
});