function cov_1uq81ar6qs(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\baseAssignValue.js";var hash="aaa10aa91ba30484959f895dbf4e6021572ccb3f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\baseAssignValue.js",statementMap:{"0":{start:{line:11,column:2},end:{line:20,column:3}},"1":{start:{line:12,column:4},end:{line:17,column:6}},"2":{start:{line:19,column:4},end:{line:19,column:23}}},fnMap:{"0":{name:"baseAssignValue",decl:{start:{line:10,column:9},end:{line:10,column:24}},loc:{start:{line:10,column:45},end:{line:21,column:1}},line:10}},branchMap:{"0":{loc:{start:{line:11,column:2},end:{line:20,column:3}},type:"if",locations:[{start:{line:11,column:2},end:{line:20,column:3}},{start:{line:11,column:2},end:{line:20,column:3}}],line:11}},s:{"0":0,"1":0,"2":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"aaa10aa91ba30484959f895dbf4e6021572ccb3f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1uq81ar6qs=function(){return actualCoverage;};}return actualCoverage;}cov_1uq81ar6qs();/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){cov_1uq81ar6qs().f[0]++;cov_1uq81ar6qs().s[0]++;if(key=='__proto__'){cov_1uq81ar6qs().b[0][0]++;cov_1uq81ar6qs().s[1]++;Object.defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{cov_1uq81ar6qs().b[0][1]++;cov_1uq81ar6qs().s[2]++;object[key]=value;}}export default baseAssignValue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlQXNzaWduVmFsdWUiLCJvYmplY3QiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiYmFzZUFzc2lnblZhbHVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxyXG4gKiB2YWx1ZSBjaGVja3MuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XHJcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJykge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XHJcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxyXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXHJcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxyXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlQXNzaWduVmFsdWVcclxuIl0sIm1hcHBpbmdzIjoibW5DQWVZO0FBQUEsMkZBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0EsZ0JBQWUsQ0FBQ0MsTUFBTSxDQUFFQyxHQUFHLENBQUVDLEtBQUssQ0FBRSxpREFDM0MsR0FBSUQsR0FBRyxFQUFJLFdBQVcsQ0FBRSxvREFDdEJFLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDSixNQUFNLENBQUVDLEdBQUcsQ0FBRSxDQUNqQyxjQUFjLENBQUUsSUFBSSxDQUNwQixZQUFZLENBQUUsSUFBSSxDQUNsQixPQUFPLENBQUVDLEtBQUssQ0FDZCxVQUFVLENBQUUsSUFDZCxDQUFDLENBQUMsQ0FDSixDQUFDLElBQU0sb0RBQ0xGLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUdDLEtBQUssQ0FDckIsQ0FDRixDQUVBLGNBQWVILGdCQUFlIn0=