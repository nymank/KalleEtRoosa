function cov_vmfl1uaui(){var path="C:\\git\\KalleEtRoosa\\src\\get.js";var hash="210d48b003823409bfd7d5506536406a4614220c";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\get.js",statementMap:{"0":{start:{line:28,column:17},end:{line:28,column:67}},"1":{start:{line:29,column:2},end:{line:29,column:53}}},fnMap:{"0":{name:"get",decl:{start:{line:27,column:9},end:{line:27,column:12}},loc:{start:{line:27,column:41},end:{line:30,column:1}},line:27}},branchMap:{"0":{loc:{start:{line:28,column:17},end:{line:28,column:67}},type:"cond-expr",locations:[{start:{line:28,column:34},end:{line:28,column:43}},{start:{line:28,column:46},end:{line:28,column:67}}],line:28},"1":{loc:{start:{line:29,column:9},end:{line:29,column:53}},type:"cond-expr",locations:[{start:{line:29,column:32},end:{line:29,column:44}},{start:{line:29,column:47},end:{line:29,column:53}}],line:29}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"210d48b003823409bfd7d5506536406a4614220c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_vmfl1uaui=function(){return actualCoverage;};}return actualCoverage;}cov_vmfl1uaui();import baseGet from'./.internal/baseGet.js';/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @see has, hasIn, set, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */function get(object,path,defaultValue){cov_vmfl1uaui().f[0]++;const result=(cov_vmfl1uaui().s[0]++,object==null?(cov_vmfl1uaui().b[0][0]++,undefined):(cov_vmfl1uaui().b[0][1]++,baseGet(object,path)));cov_vmfl1uaui().s[1]++;return result===undefined?(cov_vmfl1uaui().b[1][0]++,defaultValue):(cov_vmfl1uaui().b[1][1]++,result);}export default get;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlR2V0IiwiZ2V0Iiwib2JqZWN0IiwicGF0aCIsImRlZmF1bHRWYWx1ZSIsInJlc3VsdCIsInVuZGVmaW5lZCJdLCJzb3VyY2VzIjpbImdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZUdldCBmcm9tICcuLy5pbnRlcm5hbC9iYXNlR2V0LmpzJ1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXHJcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxyXG4gKlxyXG4gKiBAc2luY2UgMy43LjBcclxuICogQGNhdGVnb3J5IE9iamVjdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXHJcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXHJcbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXHJcbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cclxuICogQHNlZSBoYXMsIGhhc0luLCBzZXQsIHVuc2V0XHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGNvbnN0IG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfVxyXG4gKlxyXG4gKiBnZXQob2JqZWN0LCAnYVswXS5iLmMnKVxyXG4gKiAvLyA9PiAzXHJcbiAqXHJcbiAqIGdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKVxyXG4gKiAvLyA9PiAzXHJcbiAqXHJcbiAqIGdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0JylcclxuICogLy8gPT4gJ2RlZmF1bHQnXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcclxuICBjb25zdCByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKVxyXG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRcclxuIl0sIm1hcHBpbmdzIjoiK3RDQWVZO0FBQUEseUZBZlosTUFBT0EsUUFBTyxLQUFNLHdCQUF3QixDQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQyxJQUFHLENBQUNDLE1BQU0sQ0FBRUMsSUFBSSxDQUFFQyxZQUFZLENBQUUsd0JBQ3ZDLEtBQU1DLE9BQU0seUJBQUdILE1BQU0sRUFBSSxJQUFJLDRCQUFHSSxTQUFTLDZCQUFHTixPQUFPLENBQUNFLE1BQU0sQ0FBRUMsSUFBSSxDQUFDLDBCQUNqRSxNQUFPRSxPQUFNLEdBQUtDLFNBQVMsNEJBQUdGLFlBQVksNkJBQUdDLE1BQU0sRUFDckQsQ0FFQSxjQUFlSixJQUFHIn0=