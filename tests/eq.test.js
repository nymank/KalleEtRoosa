// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//
const { expect } = require('chai');
import eq from '../src/eq.js';


describe('Eq test', function () {
    const object = { 'a': 1 }
    const other = { 'a': 2 }
    it("should return true for same object", function() {
        expect(eq(object, object)).to.be.true;
    });
    it("should return false for different objects", function() {
        expect(eq(object, other)).to.be.false;
    });
    it("should return true for same string", function() {
        expect(eq('a', 'a')).to.be.true;
    });
    it("should return false for 'a' and Object('a')", function() {
        expect(eq('a', Object('a'))).to.be.false;
    });
    it("should return true for Nan and Nan", function() {
        expect(eq(NaN, NaN)).to.be.true;
    });
    it("should return true for 1 and 1", function() {
        expect(eq(1, 1)).to.be.true;
    });
    it("should return false for 1 and 2", function() {
        expect(eq(1, 2)).to.be.false;
    });
    it("should return false for 1 and Object(1)", function() {
        expect(eq(1, Object(1))).to.be.false;
    });
});