function cov_1r4pd7anjn(){var path="C:\\git\\KalleEtRoosa\\src\\at.js";var hash="a87f84229b3b6216145f23d03c7a0cea4c9f033d";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\at.js",statementMap:{"0":{start:{line:19,column:11},end:{line:19,column:70}},"1":{start:{line:19,column:33},end:{line:19,column:70}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:19,column:11},end:{line:19,column:12}},loc:{start:{line:19,column:33},end:{line:19,column:70}},line:19}},branchMap:{},s:{"0":0,"1":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a87f84229b3b6216145f23d03c7a0cea4c9f033d"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1r4pd7anjn=function(){return actualCoverage;};}return actualCoverage;}cov_1r4pd7anjn();import baseAt from'./.internal/baseAt.js';import baseFlatten from'./.internal/baseFlatten.js';/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
 *
 * at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 */cov_1r4pd7anjn().s[0]++;const at=(object,...paths)=>{cov_1r4pd7anjn().f[0]++;cov_1r4pd7anjn().s[1]++;return baseAt(object,baseFlatten(paths,1));};export default at;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlQXQiLCJiYXNlRmxhdHRlbiIsImF0Iiwib2JqZWN0IiwicGF0aHMiXSwic291cmNlcyI6WyJhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZUF0IGZyb20gJy4vLmludGVybmFsL2Jhc2VBdC5qcydcclxuaW1wb3J0IGJhc2VGbGF0dGVuIGZyb20gJy4vLmludGVybmFsL2Jhc2VGbGF0dGVuLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gYHBhdGhzYCBvZiBgb2JqZWN0YC5cclxuICpcclxuICogQHNpbmNlIDEuMC4wXHJcbiAqIEBjYXRlZ29yeSBPYmplY3RcclxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cclxuICogQHBhcmFtIHsuLi4oc3RyaW5nfHN0cmluZ1tdKX0gW3BhdGhzXSBUaGUgcHJvcGVydHkgcGF0aHMgdG8gcGljay5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwaWNrZWQgdmFsdWVzLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBjb25zdCBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH0sIDRdIH1cclxuICpcclxuICogYXQob2JqZWN0LCBbJ2FbMF0uYi5jJywgJ2FbMV0nXSlcclxuICogLy8gPT4gWzMsIDRdXHJcbiAqL1xyXG5jb25zdCBhdCA9IChvYmplY3QsIC4uLnBhdGhzKSA9PiBiYXNlQXQob2JqZWN0LCBiYXNlRmxhdHRlbihwYXRocywgMSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdFxyXG4iXSwibWFwcGluZ3MiOiJvMEJBZVk7QUFBQSwyRkFmWixNQUFPQSxPQUFNLEtBQU0sdUJBQXVCLENBQzFDLE1BQU9DLFlBQVcsS0FBTSw0QkFBNEIsQ0FFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBZEEsd0JBZUEsS0FBTUMsR0FBRSxDQUFHLENBQUNDLE1BQU0sQ0FBRSxHQUFHQyxLQUFLLEdBQUssdURBQUFKLE9BQU0sQ0FBQ0csTUFBTSxDQUFFRixXQUFXLENBQUNHLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUMsQ0FFdEUsY0FBZUYsR0FBRSJ9