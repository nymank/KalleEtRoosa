function cov_walhp7kur(){var path="C:\\git\\KalleEtRoosa\\src\\isArrayLike.js";var hash="d45f40a18b4e6135da850f4b5c23d177483d1d6b";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\isArrayLike.js",statementMap:{"0":{start:{line:27,column:2},end:{line:27,column:79}}},fnMap:{"0":{name:"isArrayLike",decl:{start:{line:26,column:9},end:{line:26,column:20}},loc:{start:{line:26,column:28},end:{line:28,column:1}},line:26}},branchMap:{"0":{loc:{start:{line:27,column:9},end:{line:27,column:79}},type:"binary-expr",locations:[{start:{line:27,column:9},end:{line:27,column:22}},{start:{line:27,column:26},end:{line:27,column:53}},{start:{line:27,column:57},end:{line:27,column:79}}],line:27}},s:{"0":0},f:{"0":0},b:{"0":[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d45f40a18b4e6135da850f4b5c23d177483d1d6b"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_walhp7kur=function(){return actualCoverage;};}return actualCoverage;}cov_walhp7kur();import isLength from'./isLength.js';/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */function isArrayLike(value){cov_walhp7kur().f[0]++;cov_walhp7kur().s[0]++;return(cov_walhp7kur().b[0][0]++,value!=null)&&(cov_walhp7kur().b[0][1]++,typeof value!=='function')&&(cov_walhp7kur().b[0][2]++,isLength(value.length));}export default isArrayLike;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc0xlbmd0aCIsImlzQXJyYXlMaWtlIiwidmFsdWUiLCJsZW5ndGgiXSwic291cmNlcyI6WyJpc0FycmF5TGlrZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNMZW5ndGggZnJvbSAnLi9pc0xlbmd0aC5qcydcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXHJcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cclxuICpcclxuICogQHNpbmNlIDQuMC4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGlzQXJyYXlMaWtlKFsxLCAyLCAzXSlcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBpc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIGlzQXJyYXlMaWtlKCdhYmMnKVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIGlzQXJyYXlMaWtlKEZ1bmN0aW9uKVxyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpc0FycmF5TGlrZVxyXG4iXSwibWFwcGluZ3MiOiIyaENBZVk7QUFBQSx5RkFmWixNQUFPQSxTQUFRLEtBQU0sZUFBZSxDQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0MsWUFBVyxDQUFDQyxLQUFLLENBQUUsK0NBQzFCLE1BQU8sMkJBQUFBLEtBQUssRUFBSSxJQUFJLDhCQUFJLE1BQU9BLE1BQUssR0FBSyxVQUFVLDhCQUFJRixRQUFRLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEVBQy9FLENBRUEsY0FBZUYsWUFBVyJ9