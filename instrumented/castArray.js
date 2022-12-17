function cov_gaprxobgr(){var path="C:\\git\\KalleEtRoosa\\src\\castArray.js";var hash="c06283064474f7fb67f6873ef93aa2885cabaa56";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\castArray.js",statementMap:{"0":{start:{line:34,column:16},end:{line:34,column:23}},"1":{start:{line:35,column:2},end:{line:35,column:47}}},fnMap:{"0":{name:"castArray",decl:{start:{line:33,column:9},end:{line:33,column:18}},loc:{start:{line:33,column:28},end:{line:36,column:1}},line:33}},branchMap:{"0":{loc:{start:{line:35,column:9},end:{line:35,column:47}},type:"cond-expr",locations:[{start:{line:35,column:32},end:{line:35,column:37}},{start:{line:35,column:40},end:{line:35,column:47}}],line:35}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c06283064474f7fb67f6873ef93aa2885cabaa56"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_gaprxobgr=function(){return actualCoverage;};}return actualCoverage;}cov_gaprxobgr();/**
 * Casts `value` as an array if it's not one.
 *
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */function castArray(...args){cov_gaprxobgr().f[0]++;const value=(cov_gaprxobgr().s[0]++,args[0]);cov_gaprxobgr().s[1]++;return Array.isArray(value)?(cov_gaprxobgr().b[0][0]++,value):(cov_gaprxobgr().b[0][1]++,[value]);}export default castArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYXN0QXJyYXkiLCJhcmdzIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiXSwic291cmNlcyI6WyJjYXN0QXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiBDYXN0cyBgdmFsdWVgIGFzIGFuIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cclxuICpcclxuICogQHNpbmNlIDQuNC4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBhcnJheS5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogY2FzdEFycmF5KDEpXHJcbiAqIC8vID0+IFsxXVxyXG4gKlxyXG4gKiBjYXN0QXJyYXkoeyAnYSc6IDEgfSlcclxuICogLy8gPT4gW3sgJ2EnOiAxIH1dXHJcbiAqXHJcbiAqIGNhc3RBcnJheSgnYWJjJylcclxuICogLy8gPT4gWydhYmMnXVxyXG4gKlxyXG4gKiBjYXN0QXJyYXkobnVsbClcclxuICogLy8gPT4gW251bGxdXHJcbiAqXHJcbiAqIGNhc3RBcnJheSh1bmRlZmluZWQpXHJcbiAqIC8vID0+IFt1bmRlZmluZWRdXHJcbiAqXHJcbiAqIGNhc3RBcnJheSgpXHJcbiAqIC8vID0+IFtdXHJcbiAqXHJcbiAqIGNvbnN0IGFycmF5ID0gWzEsIDIsIDNdXHJcbiAqIGNvbnNvbGUubG9nKGNhc3RBcnJheShhcnJheSkgPT09IGFycmF5KVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqL1xyXG5mdW5jdGlvbiBjYXN0QXJyYXkoLi4uYXJncykge1xyXG4gIGNvbnN0IHZhbHVlID0gYXJnc1swXVxyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXN0QXJyYXlcclxuIl0sIm1hcHBpbmdzIjoiNGhDQWVZO0FBQUEseUZBZFo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQSxVQUFTLENBQUMsR0FBR0MsSUFBSSxDQUFFLHdCQUMxQixLQUFNQyxNQUFLLHlCQUFHRCxJQUFJLENBQUMsQ0FBQyxDQUFDLHlCQUNyQixNQUFPRSxNQUFLLENBQUNDLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLDRCQUFHQSxLQUFLLDZCQUFHLENBQUNBLEtBQUssQ0FBQyxFQUMvQyxDQUVBLGNBQWVGLFVBQVMifQ==