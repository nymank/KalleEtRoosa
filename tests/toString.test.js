import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { expect } = require('chai');
const chai = require('chai');

import toString from '../instrumented/toString.js';

describe('toString test', function () {
    it('should convert integer to string', function () {
        const result = toString(3);
        expect(result).to.be.a("string");
        expect(result).to.equal("3");
    });

    it('should return empty string with null', function () {
        const result = toString(null);
        expect(result).to.be.a("string");
        expect(result).to.equal('');
    });
    it('should convert decimal number to string', function () {
        const result = toString(1.5);
        expect(result).to.be.a("string");
    });
});