function cov_17bz86pgzy(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\baseFindKey.js";var hash="21c35b153133ad2f3c8f5f2617930e9d71232bf7";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\baseFindKey.js",statementMap:{"0":{start:{line:13,column:2},end:{line:18,column:4}},"1":{start:{line:14,column:4},end:{line:17,column:5}},"2":{start:{line:15,column:6},end:{line:15,column:18}},"3":{start:{line:16,column:6},end:{line:16,column:18}},"4":{start:{line:19,column:2},end:{line:19,column:15}}},fnMap:{"0":{name:"baseFindKey",decl:{start:{line:11,column:9},end:{line:11,column:20}},loc:{start:{line:11,column:54},end:{line:20,column:1}},line:11},"1":{name:"(anonymous_1)",decl:{start:{line:13,column:23},end:{line:13,column:24}},loc:{start:{line:13,column:51},end:{line:18,column:3}},line:13}},branchMap:{"0":{loc:{start:{line:14,column:4},end:{line:17,column:5}},type:"if",locations:[{start:{line:14,column:4},end:{line:17,column:5}},{start:{line:14,column:4},end:{line:17,column:5}}],line:14}},s:{"0":0,"1":0,"2":0,"3":0,"4":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"21c35b153133ad2f3c8f5f2617930e9d71232bf7"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_17bz86pgzy=function(){return actualCoverage;};}return actualCoverage;}cov_17bz86pgzy();/**
 * The base implementation of methods like `findKey` and `findLastKey`
 * which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */function baseFindKey(collection,predicate,eachFunc){cov_17bz86pgzy().f[0]++;let result;cov_17bz86pgzy().s[0]++;eachFunc(collection,(value,key,collection)=>{cov_17bz86pgzy().f[1]++;cov_17bz86pgzy().s[1]++;if(predicate(value,key,collection)){cov_17bz86pgzy().b[0][0]++;cov_17bz86pgzy().s[2]++;result=key;cov_17bz86pgzy().s[3]++;return false;}else{cov_17bz86pgzy().b[0][1]++;}});cov_17bz86pgzy().s[4]++;return result;}export default baseFindKey;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlRmluZEtleSIsImNvbGxlY3Rpb24iLCJwcmVkaWNhdGUiLCJlYWNoRnVuYyIsInJlc3VsdCIsInZhbHVlIiwia2V5Il0sInNvdXJjZXMiOlsiYmFzZUZpbmRLZXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgZmluZEtleWAgYW5kIGBmaW5kTGFzdEtleWBcclxuICogd2hpY2ggaXRlcmF0ZXMgb3ZlciBgY29sbGVjdGlvbmAgdXNpbmcgYGVhY2hGdW5jYC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYGNvbGxlY3Rpb25gLlxyXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZm91bmQgZWxlbWVudCBvciBpdHMga2V5LCBlbHNlIGB1bmRlZmluZWRgLlxyXG4gKi9cclxuZnVuY3Rpb24gYmFzZUZpbmRLZXkoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBlYWNoRnVuYykge1xyXG4gIGxldCByZXN1bHRcclxuICBlYWNoRnVuYyhjb2xsZWN0aW9uLCAodmFsdWUsIGtleSwgY29sbGVjdGlvbikgPT4ge1xyXG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSkge1xyXG4gICAgICByZXN1bHQgPSBrZXlcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VGaW5kS2V5XHJcbiJdLCJtYXBwaW5ncyI6IjAzQ0FlWTtBQUFBLDJGQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0EsWUFBVyxDQUFDQyxVQUFVLENBQUVDLFNBQVMsQ0FBRUMsUUFBUSxDQUFFLHlCQUNwRCxHQUFJQyxPQUFNLHlCQUNWRCxRQUFRLENBQUNGLFVBQVUsQ0FBRSxDQUFDSSxLQUFLLENBQUVDLEdBQUcsQ0FBRUwsVUFBVSxHQUFLLGlEQUMvQyxHQUFJQyxTQUFTLENBQUNHLEtBQUssQ0FBRUMsR0FBRyxDQUFFTCxVQUFVLENBQUMsQ0FBRSxvREFDckNHLE1BQU0sQ0FBR0UsR0FBRyx5QkFDWixNQUFPLE1BQUssQ0FDZCxDQUFDLGlDQUNILENBQUMsQ0FBQyx5QkFDRixNQUFPRixPQUFNLENBQ2YsQ0FFQSxjQUFlSixZQUFXIn0=