function cov_1q93eua7l8(){var path="C:\\git\\KalleEtRoosa\\src\\isArrayLikeObject.js";var hash="bb25dc9fec0091b9d5ca2ac7c619fea71d52cc25";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\isArrayLikeObject.js",statementMap:{"0":{start:{line:28,column:2},end:{line:28,column:50}}},fnMap:{"0":{name:"isArrayLikeObject",decl:{start:{line:27,column:9},end:{line:27,column:26}},loc:{start:{line:27,column:34},end:{line:29,column:1}},line:27}},branchMap:{"0":{loc:{start:{line:28,column:9},end:{line:28,column:50}},type:"binary-expr",locations:[{start:{line:28,column:9},end:{line:28,column:28}},{start:{line:28,column:32},end:{line:28,column:50}}],line:28}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bb25dc9fec0091b9d5ca2ac7c619fea71d52cc25"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1q93eua7l8=function(){return actualCoverage;};}return actualCoverage;}cov_1q93eua7l8();import isArrayLike from'./isArrayLike.js';import isObjectLike from'./isObjectLike.js';/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */function isArrayLikeObject(value){cov_1q93eua7l8().f[0]++;cov_1q93eua7l8().s[0]++;return(cov_1q93eua7l8().b[0][0]++,isObjectLike(value))&&(cov_1q93eua7l8().b[0][1]++,isArrayLike(value));}export default isArrayLikeObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc0FycmF5TGlrZSIsImlzT2JqZWN0TGlrZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwidmFsdWUiXSwic291cmNlcyI6WyJpc0FycmF5TGlrZU9iamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcydcclxuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBpc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxyXG4gKiBpcyBhbiBvYmplY3QuXHJcbiAqXHJcbiAqIEBzaW5jZSA0LjAuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXHJcbiAqICBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSlcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBpc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIGlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKVxyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKlxyXG4gKiBpc0FycmF5TGlrZU9iamVjdChGdW5jdGlvbilcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXlMaWtlT2JqZWN0XHJcbiJdLCJtYXBwaW5ncyI6IncvQkFlWTtBQUFBLDJGQWZaLE1BQU9BLFlBQVcsS0FBTSxrQkFBa0IsQ0FDMUMsTUFBT0MsYUFBWSxLQUFNLG1CQUFtQixDQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0Msa0JBQWlCLENBQUNDLEtBQUssQ0FBRSxpREFDaEMsTUFBTyw0QkFBQUYsWUFBWSxDQUFDRSxLQUFLLENBQUMsK0JBQUlILFdBQVcsQ0FBQ0csS0FBSyxDQUFDLEVBQ2xELENBRUEsY0FBZUQsa0JBQWlCIn0=