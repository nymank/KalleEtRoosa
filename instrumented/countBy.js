function cov_1mxwyaq742(){var path="C:\\git\\KalleEtRoosa\\src\\countBy.js";var hash="050f39f2f7d7f484bc9213a4d96b48644a53d667";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\countBy.js",statementMap:{"0":{start:{line:5,column:23},end:{line:5,column:54}},"1":{start:{line:30,column:2},end:{line:38,column:8}},"2":{start:{line:31,column:4},end:{line:31,column:25}},"3":{start:{line:32,column:4},end:{line:36,column:5}},"4":{start:{line:33,column:6},end:{line:33,column:19}},"5":{start:{line:35,column:6},end:{line:35,column:37}},"6":{start:{line:37,column:4},end:{line:37,column:17}}},fnMap:{"0":{name:"countBy",decl:{start:{line:29,column:9},end:{line:29,column:16}},loc:{start:{line:29,column:39},end:{line:39,column:1}},line:29},"1":{name:"(anonymous_1)",decl:{start:{line:30,column:28},end:{line:30,column:29}},loc:{start:{line:30,column:52},end:{line:38,column:3}},line:30}},branchMap:{"0":{loc:{start:{line:32,column:4},end:{line:36,column:5}},type:"if",locations:[{start:{line:32,column:4},end:{line:36,column:5}},{start:{line:32,column:4},end:{line:36,column:5}}],line:32}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"050f39f2f7d7f484bc9213a4d96b48644a53d667"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1mxwyaq742=function(){return actualCoverage;};}return actualCoverage;}cov_1mxwyaq742();import baseAssignValue from'./.internal/baseAssignValue.js';import reduce from'./reduce.js';/** Used to check objects for own properties. */const hasOwnProperty=(cov_1mxwyaq742().s[0]++,Object.prototype.hasOwnProperty);/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * countBy(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 */function countBy(collection,iteratee){cov_1mxwyaq742().f[0]++;cov_1mxwyaq742().s[1]++;return reduce(collection,(result,value,key)=>{cov_1mxwyaq742().f[1]++;cov_1mxwyaq742().s[2]++;key=iteratee(value);cov_1mxwyaq742().s[3]++;if(hasOwnProperty.call(result,key)){cov_1mxwyaq742().b[0][0]++;cov_1mxwyaq742().s[4]++;++result[key];}else{cov_1mxwyaq742().b[0][1]++;cov_1mxwyaq742().s[5]++;baseAssignValue(result,key,0);}cov_1mxwyaq742().s[6]++;return result;},{});}export default countBy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlQXNzaWduVmFsdWUiLCJyZWR1Y2UiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNvdW50QnkiLCJjb2xsZWN0aW9uIiwiaXRlcmF0ZWUiLCJyZXN1bHQiLCJ2YWx1ZSIsImtleSIsImNhbGwiXSwic291cmNlcyI6WyJjb3VudEJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlQXNzaWduVmFsdWUgZnJvbSAnLi8uaW50ZXJuYWwvYmFzZUFzc2lnblZhbHVlLmpzJ1xyXG5pbXBvcnQgcmVkdWNlIGZyb20gJy4vcmVkdWNlLmpzJ1xyXG5cclxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXHJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IGNvbXBvc2VkIG9mIGtleXMgZ2VuZXJhdGVkIGZyb20gdGhlIHJlc3VsdHMgb2YgcnVubmluZ1xyXG4gKiBlYWNoIGVsZW1lbnQgb2YgYGNvbGxlY3Rpb25gIHRocnUgYGl0ZXJhdGVlYC4gVGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUgb2ZcclxuICogZWFjaCBrZXkgaXMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUga2V5IHdhcyByZXR1cm5lZCBieSBgaXRlcmF0ZWVgLiBUaGVcclxuICogaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogKHZhbHVlKS5cclxuICpcclxuICogQHNpbmNlIDAuNS4wXHJcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXHJcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGl0ZXJhdGVlIHRvIHRyYW5zZm9ybSBrZXlzLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjb21wb3NlZCBhZ2dyZWdhdGUgb2JqZWN0LlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBjb25zdCB1c2VycyA9IFtcclxuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhY3RpdmUnOiB0cnVlIH0sXHJcbiAqICAgeyAndXNlcic6ICdiZXR0eScsICdhY3RpdmUnOiB0cnVlIH0sXHJcbiAqICAgeyAndXNlcic6ICdmcmVkJywgJ2FjdGl2ZSc6IGZhbHNlIH1cclxuICogXVxyXG4gKlxyXG4gKiBjb3VudEJ5KHVzZXJzLCB2YWx1ZSA9PiB2YWx1ZS5hY3RpdmUpO1xyXG4gKiAvLyA9PiB7ICd0cnVlJzogMiwgJ2ZhbHNlJzogMSB9XHJcbiAqL1xyXG5mdW5jdGlvbiBjb3VudEJ5KGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XHJcbiAgcmV0dXJuIHJlZHVjZShjb2xsZWN0aW9uLCAocmVzdWx0LCB2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICBrZXkgPSBpdGVyYXRlZSh2YWx1ZSlcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwga2V5KSkge1xyXG4gICAgICArK3Jlc3VsdFtrZXldXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiYXNlQXNzaWduVmFsdWUocmVzdWx0LCBrZXksIDApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50QnlcclxuIl0sIm1hcHBpbmdzIjoiaTlDQWVZO0FBQUEsMkZBZlosTUFBT0EsZ0JBQWUsS0FBTSxnQ0FBZ0MsQ0FDNUQsTUFBT0MsT0FBTSxLQUFNLGFBQWEsQ0FFaEMsZ0RBQ0EsS0FBTUMsZUFBYywwQkFBR0MsTUFBTSxDQUFDQyxTQUFTLENBQUNGLGNBQWMsRUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTRyxRQUFPLENBQUNDLFVBQVUsQ0FBRUMsUUFBUSxDQUFFLGlEQUNyQyxNQUFPTixPQUFNLENBQUNLLFVBQVUsQ0FBRSxDQUFDRSxNQUFNLENBQUVDLEtBQUssQ0FBRUMsR0FBRyxHQUFLLGlEQUNoREEsR0FBRyxDQUFHSCxRQUFRLENBQUNFLEtBQUssQ0FBQyx5QkFDckIsR0FBSVAsY0FBYyxDQUFDUyxJQUFJLENBQUNILE1BQU0sQ0FBRUUsR0FBRyxDQUFDLENBQUUsb0RBQ3BDLEVBQUVGLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLENBQ2YsQ0FBQyxJQUFNLG9EQUNMVixlQUFlLENBQUNRLE1BQU0sQ0FBRUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUNqQyxDQUFDLHdCQUNELE1BQU9GLE9BQU0sQ0FDZixDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUVBLGNBQWVILFFBQU8ifQ==