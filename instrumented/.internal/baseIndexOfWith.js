function cov_17mufvitnf(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\baseIndexOfWith.js";var hash="228d9f3ca4c9bb6b0e45c27dbb4bad274da09411";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\baseIndexOfWith.js",statementMap:{"0":{start:{line:12,column:14},end:{line:12,column:27}},"1":{start:{line:13,column:21},end:{line:13,column:26}},"2":{start:{line:15,column:2},end:{line:19,column:3}},"3":{start:{line:16,column:4},end:{line:18,column:5}},"4":{start:{line:17,column:6},end:{line:17,column:18}},"5":{start:{line:20,column:2},end:{line:20,column:11}}},fnMap:{"0":{name:"baseIndexOfWith",decl:{start:{line:11,column:9},end:{line:11,column:24}},loc:{start:{line:11,column:62},end:{line:21,column:1}},line:11}},branchMap:{"0":{loc:{start:{line:16,column:4},end:{line:18,column:5}},type:"if",locations:[{start:{line:16,column:4},end:{line:18,column:5}},{start:{line:16,column:4},end:{line:18,column:5}}],line:16}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"228d9f3ca4c9bb6b0e45c27dbb4bad274da09411"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_17mufvitnf=function(){return actualCoverage;};}return actualCoverage;}cov_17mufvitnf();/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOfWith(array,value,fromIndex,comparator){cov_17mufvitnf().f[0]++;let index=(cov_17mufvitnf().s[0]++,fromIndex-1);const{length}=(cov_17mufvitnf().s[1]++,array);cov_17mufvitnf().s[2]++;while(++index<length){cov_17mufvitnf().s[3]++;if(comparator(array[index],value)){cov_17mufvitnf().b[0][0]++;cov_17mufvitnf().s[4]++;return index;}else{cov_17mufvitnf().b[0][1]++;}}cov_17mufvitnf().s[5]++;return-1;}export default baseIndexOfWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlSW5kZXhPZldpdGgiLCJhcnJheSIsInZhbHVlIiwiZnJvbUluZGV4IiwiY29tcGFyYXRvciIsImluZGV4IiwibGVuZ3RoIl0sInNvdXJjZXMiOlsiYmFzZUluZGV4T2ZXaXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGJhc2VJbmRleE9mYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlSW5kZXhPZldpdGgoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgsIGNvbXBhcmF0b3IpIHtcclxuICBsZXQgaW5kZXggPSBmcm9tSW5kZXggLSAxXHJcbiAgY29uc3QgeyBsZW5ndGggfSA9IGFycmF5XHJcblxyXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICBpZiAoY29tcGFyYXRvcihhcnJheVtpbmRleF0sIHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gaW5kZXhcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIC0xXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VJbmRleE9mV2l0aFxyXG4iXSwibWFwcGluZ3MiOiI0eUNBZVk7QUFBQSwyRkFmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNBLGdCQUFlLENBQUNDLEtBQUssQ0FBRUMsS0FBSyxDQUFFQyxTQUFTLENBQUVDLFVBQVUsQ0FBRSx5QkFDNUQsR0FBSUMsTUFBSywwQkFBR0YsU0FBUyxDQUFHLENBQUMsRUFDekIsS0FBTSxDQUFFRyxNQUFPLENBQUMsMEJBQUdMLEtBQUssMEJBRXhCLE1BQU8sRUFBRUksS0FBSyxDQUFHQyxNQUFNLENBQUUseUJBQ3ZCLEdBQUlGLFVBQVUsQ0FBQ0gsS0FBSyxDQUFDSSxLQUFLLENBQUMsQ0FBRUgsS0FBSyxDQUFDLENBQUUsb0RBQ25DLE1BQU9HLE1BQUssQ0FDZCxDQUFDLGlDQUNILENBQUMsd0JBQ0QsTUFBTyxDQUFDLENBQUMsQ0FDWCxDQUVBLGNBQWVMLGdCQUFlIn0=