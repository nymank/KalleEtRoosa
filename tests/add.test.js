// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//
const { expect } = require('chai');
import add from '../src/add.js';


describe('Add test', function () {
    it('should add 2 + 1 => 3', function () {
        const result = add(2, 1);
        expect(result).to.be.a("number");
        expect(result).to.equal(3);
    });
    it("should add 1 - 1 => 0", function () {
        const result = add(1, -1);
        expect(result).to.be.a("number");
        expect(result).to.equal(0);
    });
});
