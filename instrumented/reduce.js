function cov_mi5ulj0a1(){var path="C:\\git\\KalleEtRoosa\\src\\reduce.js";var hash="b226a78dd0f48a2ae866e93bfd85b7e2c2a37b7f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\reduce.js",statementMap:{"0":{start:{line:39,column:15},end:{line:39,column:67}},"1":{start:{line:40,column:20},end:{line:40,column:40}},"2":{start:{line:41,column:2},end:{line:41,column:69}}},fnMap:{"0":{name:"reduce",decl:{start:{line:38,column:9},end:{line:38,column:15}},loc:{start:{line:38,column:51},end:{line:42,column:1}},line:38}},branchMap:{"0":{loc:{start:{line:39,column:15},end:{line:39,column:67}},type:"cond-expr",locations:[{start:{line:39,column:43},end:{line:39,column:54}},{start:{line:39,column:57},end:{line:39,column:67}}],line:39}},s:{"0":0,"1":0,"2":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b226a78dd0f48a2ae866e93bfd85b7e2c2a37b7f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_mi5ulj0a1=function(){return actualCoverage;};}return actualCoverage;}cov_mi5ulj0a1();import arrayReduce from'./.internal/arrayReduce.js';import baseEach from'./.internal/baseEach.js';import baseReduce from'./.internal/baseReduce.js';/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `reduce`, `reduceRight`, and `transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduceRight, transform
 * @example
 *
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 *
 * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 *   return result
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */function reduce(collection,iteratee,accumulator){cov_mi5ulj0a1().f[0]++;const func=(cov_mi5ulj0a1().s[0]++,Array.isArray(collection)?(cov_mi5ulj0a1().b[0][0]++,arrayReduce):(cov_mi5ulj0a1().b[0][1]++,baseReduce));const initAccum=(cov_mi5ulj0a1().s[1]++,arguments.length<3);cov_mi5ulj0a1().s[2]++;return func(collection,iteratee,accumulator,initAccum,baseEach);}export default reduce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhcnJheVJlZHVjZSIsImJhc2VFYWNoIiwiYmFzZVJlZHVjZSIsInJlZHVjZSIsImNvbGxlY3Rpb24iLCJpdGVyYXRlZSIsImFjY3VtdWxhdG9yIiwiZnVuYyIsIkFycmF5IiwiaXNBcnJheSIsImluaXRBY2N1bSIsImFyZ3VtZW50cyIsImxlbmd0aCJdLCJzb3VyY2VzIjpbInJlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlSZWR1Y2UgZnJvbSAnLi8uaW50ZXJuYWwvYXJyYXlSZWR1Y2UuanMnXHJcbmltcG9ydCBiYXNlRWFjaCBmcm9tICcuLy5pbnRlcm5hbC9iYXNlRWFjaC5qcydcclxuaW1wb3J0IGJhc2VSZWR1Y2UgZnJvbSAnLi8uaW50ZXJuYWwvYmFzZVJlZHVjZS5qcydcclxuXHJcbi8qKlxyXG4gKiBSZWR1Y2VzIGBjb2xsZWN0aW9uYCB0byBhIHZhbHVlIHdoaWNoIGlzIHRoZSBhY2N1bXVsYXRlZCByZXN1bHQgb2YgcnVubmluZ1xyXG4gKiBlYWNoIGVsZW1lbnQgaW4gYGNvbGxlY3Rpb25gIHRocnUgYGl0ZXJhdGVlYCwgd2hlcmUgZWFjaCBzdWNjZXNzaXZlXHJcbiAqIGludm9jYXRpb24gaXMgc3VwcGxpZWQgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJldmlvdXMuIElmIGBhY2N1bXVsYXRvcmBcclxuICogaXMgbm90IGdpdmVuLCB0aGUgZmlyc3QgZWxlbWVudCBvZiBgY29sbGVjdGlvbmAgaXMgdXNlZCBhcyB0aGUgaW5pdGlhbFxyXG4gKiB2YWx1ZS4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBmb3VyIGFyZ3VtZW50czpcclxuICogKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cclxuICpcclxuICogTWFueSBsb2Rhc2ggbWV0aG9kcyBhcmUgZ3VhcmRlZCB0byB3b3JrIGFzIGl0ZXJhdGVlcyBmb3IgbWV0aG9kcyBsaWtlXHJcbiAqIGByZWR1Y2VgLCBgcmVkdWNlUmlnaHRgLCBhbmQgYHRyYW5zZm9ybWAuXHJcbiAqXHJcbiAqIFRoZSBndWFyZGVkIG1ldGhvZHMgYXJlOlxyXG4gKiBgYXNzaWduYCwgYGRlZmF1bHRzYCwgYGRlZmF1bHRzRGVlcGAsIGBpbmNsdWRlc2AsIGBtZXJnZWAsIGBvcmRlckJ5YCxcclxuICogYW5kIGBzb3J0QnlgXHJcbiAqXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxyXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXHJcbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cclxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxyXG4gKiBAc2VlIHJlZHVjZVJpZ2h0LCB0cmFuc2Zvcm1cclxuICogQGV4YW1wbGVcclxuICpcclxuICogcmVkdWNlKFsxLCAyXSwgKHN1bSwgbikgPT4gc3VtICsgbiwgMClcclxuICogLy8gPT4gM1xyXG4gKlxyXG4gKiByZWR1Y2UoeyAnYSc6IDEsICdiJzogMiwgJ2MnOiAxIH0sIChyZXN1bHQsIHZhbHVlLCBrZXkpID0+IHtcclxuICogICAocmVzdWx0W3ZhbHVlXSB8fCAocmVzdWx0W3ZhbHVlXSA9IFtdKSkucHVzaChrZXkpXHJcbiAqICAgcmV0dXJuIHJlc3VsdFxyXG4gKiB9LCB7fSlcclxuICogLy8gPT4geyAnMSc6IFsnYScsICdjJ10sICcyJzogWydiJ10gfSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxyXG4gKi9cclxuZnVuY3Rpb24gcmVkdWNlKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xyXG4gIGNvbnN0IGZ1bmMgPSBBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlSZWR1Y2UgOiBiYXNlUmVkdWNlXHJcbiAgY29uc3QgaW5pdEFjY3VtID0gYXJndW1lbnRzLmxlbmd0aCA8IDNcclxuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSwgYmFzZUVhY2gpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZVxyXG4iXSwibWFwcGluZ3MiOiJrbENBZVk7QUFBQSx5RkFmWixNQUFPQSxZQUFXLEtBQU0sNEJBQTRCLENBQ3BELE1BQU9DLFNBQVEsS0FBTSx5QkFBeUIsQ0FDOUMsTUFBT0MsV0FBVSxLQUFNLDJCQUEyQixDQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQyxPQUFNLENBQUNDLFVBQVUsQ0FBRUMsUUFBUSxDQUFFQyxXQUFXLENBQUUsd0JBQ2pELEtBQU1DLEtBQUkseUJBQUdDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDTCxVQUFVLENBQUMsNEJBQUdKLFdBQVcsNkJBQUdFLFVBQVUsR0FDakUsS0FBTVEsVUFBUyx5QkFBR0MsU0FBUyxDQUFDQyxNQUFNLENBQUcsQ0FBQyx5QkFDdEMsTUFBT0wsS0FBSSxDQUFDSCxVQUFVLENBQUVDLFFBQVEsQ0FBRUMsV0FBVyxDQUFFSSxTQUFTLENBQUVULFFBQVEsQ0FBQyxDQUNyRSxDQUVBLGNBQWVFLE9BQU0ifQ==