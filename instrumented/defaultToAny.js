function cov_1celc3u8fq(){var path="C:\\git\\KalleEtRoosa\\src\\defaultToAny.js";var hash="6f556d7551fa0f1247c24cb929cb706af50262ea";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\defaultToAny.js",statementMap:{"0":{start:{line:29,column:2},end:{line:29,column:53}}},fnMap:{"0":{name:"defaultToAny",decl:{start:{line:28,column:9},end:{line:28,column:21}},loc:{start:{line:28,column:47},end:{line:30,column:1}},line:28}},branchMap:{},s:{"0":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6f556d7551fa0f1247c24cb929cb706af50262ea"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1celc3u8fq=function(){return actualCoverage;};}return actualCoverage;}cov_1celc3u8fq();import arrayReduce from'./.internal/arrayReduce.js';import defaultTo from'./defaultTo.js';/**
 * This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
 * `NaN`, `null`, or `undefined`.
 *
 * @since 5.0.0
 * @category Util
 * @param {*} value The value to check.
 * @param {...*} defaultValues The default values.
 * @returns {*} Returns the resolved value.
 * @see _.defaultTo
 * @example
 *
 * defaultToAny(1, 10, 20)
 * // => 1
 *
 * defaultToAny(undefined, 10, 20)
 * // => 10
 *
 * defaultToAny(undefined, null, 20)
 * // => 20
 *
 * defaultToAny(undefined, null, NaN)
 * // => NaN
 */function defaultToAny(value,...defaultValues){cov_1celc3u8fq().f[0]++;cov_1celc3u8fq().s[0]++;return arrayReduce(defaultValues,defaultTo,value);}export default defaultToAny;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhcnJheVJlZHVjZSIsImRlZmF1bHRUbyIsImRlZmF1bHRUb0FueSIsInZhbHVlIiwiZGVmYXVsdFZhbHVlcyJdLCJzb3VyY2VzIjpbImRlZmF1bHRUb0FueS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlSZWR1Y2UgZnJvbSAnLi8uaW50ZXJuYWwvYXJyYXlSZWR1Y2UuanMnXHJcbmltcG9ydCBkZWZhdWx0VG8gZnJvbSAnLi9kZWZhdWx0VG8uanMnXHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgZGVmYXVsdFRvYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIG11bHRpcGxlIGRlZmF1bHQgdmFsdWVzIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBvbmUgdGhhdCBpcyBub3RcclxuICogYE5hTmAsIGBudWxsYCwgb3IgYHVuZGVmaW5lZGAuXHJcbiAqXHJcbiAqIEBzaW5jZSA1LjAuMFxyXG4gKiBAY2F0ZWdvcnkgVXRpbFxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHBhcmFtIHsuLi4qfSBkZWZhdWx0VmFsdWVzIFRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxyXG4gKiBAc2VlIF8uZGVmYXVsdFRvXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGRlZmF1bHRUb0FueSgxLCAxMCwgMjApXHJcbiAqIC8vID0+IDFcclxuICpcclxuICogZGVmYXVsdFRvQW55KHVuZGVmaW5lZCwgMTAsIDIwKVxyXG4gKiAvLyA9PiAxMFxyXG4gKlxyXG4gKiBkZWZhdWx0VG9BbnkodW5kZWZpbmVkLCBudWxsLCAyMClcclxuICogLy8gPT4gMjBcclxuICpcclxuICogZGVmYXVsdFRvQW55KHVuZGVmaW5lZCwgbnVsbCwgTmFOKVxyXG4gKiAvLyA9PiBOYU5cclxuICovXHJcbmZ1bmN0aW9uIGRlZmF1bHRUb0FueSh2YWx1ZSwgLi4uZGVmYXVsdFZhbHVlcykge1xyXG4gIHJldHVybiBhcnJheVJlZHVjZShkZWZhdWx0VmFsdWVzLCBkZWZhdWx0VG8sIHZhbHVlKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VG9BbnlcclxuIl0sIm1hcHBpbmdzIjoic3hCQWVZO0FBQUEsMkZBZlosTUFBT0EsWUFBVyxLQUFNLDRCQUE0QixDQUNwRCxNQUFPQyxVQUFTLEtBQU0sZ0JBQWdCLENBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNDLGFBQVksQ0FBQ0MsS0FBSyxDQUFFLEdBQUdDLGFBQWEsQ0FBRSxpREFDN0MsTUFBT0osWUFBVyxDQUFDSSxhQUFhLENBQUVILFNBQVMsQ0FBRUUsS0FBSyxDQUFDLENBQ3JELENBRUEsY0FBZUQsYUFBWSJ9