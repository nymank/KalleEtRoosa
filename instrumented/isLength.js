function cov_mutpkr51k(){var path="C:\\git\\KalleEtRoosa\\src\\isLength.js";var hash="f45dba67de2c708344173a70ac18101345639b76";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\isLength.js",statementMap:{"0":{start:{line:2,column:25},end:{line:2,column:41}},"1":{start:{line:29,column:2},end:{line:30,column:61}}},fnMap:{"0":{name:"isLength",decl:{start:{line:28,column:9},end:{line:28,column:17}},loc:{start:{line:28,column:25},end:{line:31,column:1}},line:28}},branchMap:{"0":{loc:{start:{line:29,column:9},end:{line:30,column:61}},type:"binary-expr",locations:[{start:{line:29,column:9},end:{line:29,column:34}},{start:{line:30,column:4},end:{line:30,column:14}},{start:{line:30,column:18},end:{line:30,column:32}},{start:{line:30,column:36},end:{line:30,column:61}}],line:29}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f45dba67de2c708344173a70ac18101345639b76"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_mutpkr51k=function(){return actualCoverage;};}return actualCoverage;}cov_mutpkr51k();/** Used as references for various `Number` constants. */const MAX_SAFE_INTEGER=(cov_mutpkr51k().s[0]++,9007199254740991);/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */function isLength(value){cov_mutpkr51k().f[0]++;cov_mutpkr51k().s[1]++;return(cov_mutpkr51k().b[0][0]++,typeof value==='number')&&(cov_mutpkr51k().b[0][1]++,value>-1)&&(cov_mutpkr51k().b[0][2]++,value%1==0)&&(cov_mutpkr51k().b[0][3]++,value<=MAX_SAFE_INTEGER);}export default isLength;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNQVhfU0FGRV9JTlRFR0VSIiwiaXNMZW5ndGgiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbImlzTGVuZ3RoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xyXG5jb25zdCBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXHJcbiAqXHJcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXHJcbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXHJcbiAqXHJcbiAqIEBzaW5jZSA0LjAuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogaXNMZW5ndGgoMylcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBpc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKVxyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKlxyXG4gKiBpc0xlbmd0aChJbmZpbml0eSlcclxuICogLy8gPT4gZmFsc2VcclxuICpcclxuICogaXNMZW5ndGgoJzMnKVxyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJlxyXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTGVuZ3RoXHJcbiJdLCJtYXBwaW5ncyI6Im1vQ0FlWTtBQUFBLHlGQWZaLHlEQUNBLEtBQU1BLGlCQUFnQix5QkFBRyxnQkFBZ0IsRUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0MsU0FBUSxDQUFDQyxLQUFLLENBQUUsK0NBQ3ZCLE1BQU8saUNBQU9BLE1BQUssR0FBSyxRQUFRLDhCQUM5QkEsS0FBSyxDQUFHLENBQUMsQ0FBQyw4QkFBSUEsS0FBSyxDQUFHLENBQUMsRUFBSSxDQUFDLDhCQUFJQSxLQUFLLEVBQUlGLGdCQUFnQixFQUM3RCxDQUVBLGNBQWVDLFNBQVEifQ==