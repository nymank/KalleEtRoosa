// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//
const { expect } = require('chai');
import compact from '../instrumented/compact.js';


describe('Compact test', function () {
    it("should remove all falsey values", function() {
        const result = compact([0, "Product 1", false, "Product 2", '', 3, NaN, undefined, null])
        expect(result).to.be.an("array")
        result.forEach((r) => {
            expect(r).to.be.ok;
        });
    });
    it("should remove all falsey values and return correct array", function() {
        const result = compact([0, "Product 1", false, "Product 2", '', 3, NaN, undefined, null])
        expect(result).to.be.an("array")
        result.forEach((r) => {
            expect(r).to.be.ok;
        });
        expect(result).to.equal([1, 2, 3])
    });
    it("should return the same array if no falsey values", function() {
        const result = compact([1, 2, 3])
        expect(result).to.be.an("array")
        expect(result).to.equal([1, 2, 3])
    });
});