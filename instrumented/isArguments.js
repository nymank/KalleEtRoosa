function cov_1sdkihw1kt(){var path="C:\\git\\KalleEtRoosa\\src\\isArguments.js";var hash="27886ca34db982fdae44227a0bf12e4483cb70a3";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\isArguments.js",statementMap:{"0":{start:{line:20,column:2},end:{line:20,column:69}}},fnMap:{"0":{name:"isArguments",decl:{start:{line:19,column:9},end:{line:19,column:20}},loc:{start:{line:19,column:28},end:{line:21,column:1}},line:19}},branchMap:{"0":{loc:{start:{line:20,column:9},end:{line:20,column:69}},type:"binary-expr",locations:[{start:{line:20,column:9},end:{line:20,column:28}},{start:{line:20,column:32},end:{line:20,column:69}}],line:20}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"27886ca34db982fdae44227a0bf12e4483cb70a3"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1sdkihw1kt=function(){return actualCoverage;};}return actualCoverage;}cov_1sdkihw1kt();import getTag from'./.internal/getTag.js';import isObjectLike from'./isObjectLike.js';/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */function isArguments(value){cov_1sdkihw1kt().f[0]++;cov_1sdkihw1kt().s[0]++;return(cov_1sdkihw1kt().b[0][0]++,isObjectLike(value))&&(cov_1sdkihw1kt().b[0][1]++,getTag(value)=='[object Arguments]');}export default isArguments;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRUYWciLCJpc09iamVjdExpa2UiLCJpc0FyZ3VtZW50cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiaXNBcmd1bWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFRhZyBmcm9tICcuLy5pbnRlcm5hbC9nZXRUYWcuanMnXHJcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnXHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cclxuICpcclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHMgfSgpKVxyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIGlzQXJndW1lbnRzKFsxLCAyLCAzXSlcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBBcmd1bWVudHNdJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50c1xyXG4iXSwibWFwcGluZ3MiOiJzK0JBZVk7QUFBQSwyRkFmWixNQUFPQSxPQUFNLEtBQU0sdUJBQXVCLENBQzFDLE1BQU9DLGFBQVksS0FBTSxtQkFBbUIsQ0FFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0MsWUFBVyxDQUFDQyxLQUFLLENBQUUsaURBQzFCLE1BQU8sNEJBQUFGLFlBQVksQ0FBQ0UsS0FBSyxDQUFDLCtCQUFJSCxNQUFNLENBQUNHLEtBQUssQ0FBQyxFQUFJLG9CQUFvQixFQUNyRSxDQUVBLGNBQWVELFlBQVcifQ==