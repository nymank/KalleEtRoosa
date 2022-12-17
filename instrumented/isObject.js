function cov_6s5jqy3q7(){var path="C:\\git\\KalleEtRoosa\\src\\isObject.js";var hash="bf44e5ea8cf4485f178ec9add2c75607c1a01215";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\isObject.js",statementMap:{"0":{start:{line:25,column:15},end:{line:25,column:27}},"1":{start:{line:26,column:2},end:{line:26,column:68}}},fnMap:{"0":{name:"isObject",decl:{start:{line:24,column:9},end:{line:24,column:17}},loc:{start:{line:24,column:25},end:{line:27,column:1}},line:24}},branchMap:{"0":{loc:{start:{line:26,column:9},end:{line:26,column:68}},type:"binary-expr",locations:[{start:{line:26,column:9},end:{line:26,column:22}},{start:{line:26,column:27},end:{line:26,column:44}},{start:{line:26,column:48},end:{line:26,column:67}}],line:26}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bf44e5ea8cf4485f178ec9add2c75607c1a01215"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_6s5jqy3q7=function(){return actualCoverage;};}return actualCoverage;}cov_6s5jqy3q7();/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */function isObject(value){cov_6s5jqy3q7().f[0]++;const type=(cov_6s5jqy3q7().s[0]++,typeof value);cov_6s5jqy3q7().s[1]++;return(cov_6s5jqy3q7().b[0][0]++,value!=null)&&((cov_6s5jqy3q7().b[0][1]++,type==='object')||(cov_6s5jqy3q7().b[0][2]++,type==='function'));}export default isObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc09iamVjdCIsInZhbHVlIiwidHlwZSJdLCJzb3VyY2VzIjpbImlzT2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcclxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxyXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXHJcbiAqXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGlzT2JqZWN0KHt9KVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIGlzT2JqZWN0KFsxLCAyLCAzXSlcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBpc09iamVjdChGdW5jdGlvbilcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBpc09iamVjdChudWxsKVxyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcclxuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlXHJcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0XHJcbiJdLCJtYXBwaW5ncyI6ImdsQ0FlWTtBQUFBLHlGQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQSxTQUFRLENBQUNDLEtBQUssQ0FBRSx3QkFDdkIsS0FBTUMsS0FBSSx5QkFBRyxNQUFPRCxNQUFLLHlCQUN6QixNQUFPLDJCQUFBQSxLQUFLLEVBQUksSUFBSSxJQUFLLDJCQUFBQyxJQUFJLEdBQUssUUFBUSw4QkFBSUEsSUFBSSxHQUFLLFVBQVUsRUFBQyxDQUNwRSxDQUVBLGNBQWVGLFNBQVEifQ==