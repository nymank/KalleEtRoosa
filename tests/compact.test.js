// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//
const { expect } = require('chai');
import compact from '../src/compact.js';


describe('compact test', function () {
    it("s", function() {

    });
});