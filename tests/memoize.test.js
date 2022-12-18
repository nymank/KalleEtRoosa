// These lines make "require" available 
// source: https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from "module";
const require = createRequire(import.meta.url);
//
const { expect } = require('chai');
import memoize from '../instrumented/memoize.js';

const createObject = () => {
    return { 'a': 1, 'b': 2 };
}
const createOther = () => {
    return { 'c': 3, 'd': 4 };
}

describe('Memoize test', function () {
    let values = memoize(createObject)
    const object = createObject();
    const other = createOther();
    it("should properly memoize Object { 'a': 1, 'b': 2 } ", function() {
        values.cache.set(object, [1, 2])
        expect(values(object)).to.deep.equal([1, 2]);
    });
    it("should properly memoize other Object { 'c': 3, 'd': 4 }", function() {
        values = memoize(createOther)
        values.cache.set(other, [3, 4])
        expect(values(other)).to.deep.equal([3, 4]);
    });
    it("should memoize properly after property change", function() {
        values = memoize(createObject)
        values.cache.set(object, [1, 2])
        object.a = 2
        expect(values(object)).to.deep.equal([1, 2]);        
    });
    // Replace `memoize.Cache`.
    memoize.Cache = WeakMap

});