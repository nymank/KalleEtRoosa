function cov_hx8mb8bkg(){var path="C:\\git\\KalleEtRoosa\\src\\eq.js";var hash="f77b87c530cb6f09913e733626dd8e6534c8d79e";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\eq.js",statementMap:{"0":{start:{line:32,column:2},end:{line:32,column:63}}},fnMap:{"0":{name:"eq",decl:{start:{line:31,column:9},end:{line:31,column:11}},loc:{start:{line:31,column:26},end:{line:33,column:1}},line:31}},branchMap:{"0":{loc:{start:{line:32,column:9},end:{line:32,column:63}},type:"binary-expr",locations:[{start:{line:32,column:9},end:{line:32,column:23}},{start:{line:32,column:28},end:{line:32,column:43}},{start:{line:32,column:47},end:{line:32,column:62}}],line:32}},s:{"0":0},f:{"0":0},b:{"0":[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f77b87c530cb6f09913e733626dd8e6534c8d79e"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_hx8mb8bkg=function(){return actualCoverage;};}return actualCoverage;}cov_hx8mb8bkg();/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * eq(object, object)
 * // => true
 *
 * eq(object, other)
 * // => false
 *
 * eq('a', 'a')
 * // => true
 *
 * eq('a', Object('a'))
 * // => false
 *
 * eq(NaN, NaN)
 * // => true
 */function eq(value,other){cov_hx8mb8bkg().f[0]++;cov_hx8mb8bkg().s[0]++;return(cov_hx8mb8bkg().b[0][0]++,value==other)||(cov_hx8mb8bkg().b[0][1]++,value!==value)&&(cov_hx8mb8bkg().b[0][2]++,other!==other);}export default eq;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlcSIsInZhbHVlIiwib3RoZXIiXSwic291cmNlcyI6WyJlcS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUGVyZm9ybXMgYVxyXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxyXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cclxuICpcclxuICogQHNpbmNlIDQuMC4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXHJcbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGNvbnN0IG9iamVjdCA9IHsgJ2EnOiAxIH1cclxuICogY29uc3Qgb3RoZXIgPSB7ICdhJzogMSB9XHJcbiAqXHJcbiAqIGVxKG9iamVjdCwgb2JqZWN0KVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIGVxKG9iamVjdCwgb3RoZXIpXHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIGVxKCdhJywgJ2EnKVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIGVxKCdhJywgT2JqZWN0KCdhJykpXHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIGVxKE5hTiwgTmFOKVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqL1xyXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcclxuICByZXR1cm4gdmFsdWUgPT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVxXHJcbiJdLCJtYXBwaW5ncyI6ImdnQ0FlWTtBQUFBLHlGQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNBLEdBQUUsQ0FBQ0MsS0FBSyxDQUFFQyxLQUFLLENBQUUsK0NBQ3hCLE1BQU8sMkJBQUFELEtBQUssRUFBSUMsS0FBSyxHQUFLLDJCQUFBRCxLQUFLLEdBQUtBLEtBQUssOEJBQUlDLEtBQUssR0FBS0EsS0FBSyxDQUFDLENBQy9ELENBRUEsY0FBZUYsR0FBRSJ9