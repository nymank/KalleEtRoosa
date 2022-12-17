import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { expect } = require('chai');

import toNumber from '../instrumented/toNumber.js';

describe('toNumber test', function () {
    it('should convert string to number', function () {
        const result = toNumber("3.25");
        expect(result).to.be.a("number");
        expect(result).to.equal(3.25);
    });
    it('should return NaN with null', function () {
        const result = toNumber("null");
        expect(result).to.be.a("number");
        expect(result).to.be.NaN;
    });
    it('should return the maximum numeric value representable in JavaScript.', function () {
        const result = toNumber(Number.MAX_VALUE);
        //expect(result).to.be.a("number");
        expect(result).to.equal(1.7976931348623157e+308);
    });
});