// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//
const { expect } = require('chai');
import isArrayLike from '../instrumented/isArrayLike.js';


describe('isArrayLike test', function () {
    it("should return true for Array", function() {
        expect(isArrayLike([1, 2, 3])).to.be.true;
    });
    it("should return true for String", function() {
        expect(isArrayLike("abc")).to.be.true;
    });
    it("should return false for Function", function() {
        expect(isArrayLike(Function)).to.be.false;
    });
    it("should return false for Object", function() {
        const testObj = {
            "foo": 25,
            "jeb": {
                "bar": "baz"
            }
        };
        expect(isArrayLike(testObj)).to.be.false;
    });
    it("should return false for Number", function() {
        expect(isArrayLike(8.91)).to.be.false;
        expect(isArrayLike(8)).to.be.false;
    });
    it("should return false for undefined, Nan, and null", function() {
        expect(isArrayLike(undefined)).to.be.false;
        expect(isArrayLike(NaN)).to.be.false;
        expect(isArrayLike(null)).to.be.false;
    });
});