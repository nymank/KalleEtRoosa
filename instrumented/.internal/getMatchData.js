function cov_27hlbpjr51(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\getMatchData.js";var hash="fac66f0f48f5c70a6ee6349cd9b92bf291f4f7f7";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\getMatchData.js",statementMap:{"0":{start:{line:12,column:17},end:{line:12,column:29}},"1":{start:{line:13,column:15},end:{line:13,column:28}},"2":{start:{line:15,column:2},end:{line:19,column:3}},"3":{start:{line:16,column:16},end:{line:16,column:30}},"4":{start:{line:17,column:18},end:{line:17,column:29}},"5":{start:{line:18,column:4},end:{line:18,column:60}},"6":{start:{line:20,column:2},end:{line:20,column:15}}},fnMap:{"0":{name:"getMatchData",decl:{start:{line:11,column:9},end:{line:11,column:21}},loc:{start:{line:11,column:30},end:{line:21,column:1}},line:11}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fac66f0f48f5c70a6ee6349cd9b92bf291f4f7f7"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_27hlbpjr51=function(){return actualCoverage;};}return actualCoverage;}cov_27hlbpjr51();import isStrictComparable from'./isStrictComparable.js';import keys from'../keys.js';/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){cov_27hlbpjr51().f[0]++;const result=(cov_27hlbpjr51().s[0]++,keys(object));let length=(cov_27hlbpjr51().s[1]++,result.length);cov_27hlbpjr51().s[2]++;while(length--){const key=(cov_27hlbpjr51().s[3]++,result[length]);const value=(cov_27hlbpjr51().s[4]++,object[key]);cov_27hlbpjr51().s[5]++;result[length]=[key,value,isStrictComparable(value)];}cov_27hlbpjr51().s[6]++;return result;}export default getMatchData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1N0cmljdENvbXBhcmFibGUiLCJrZXlzIiwiZ2V0TWF0Y2hEYXRhIiwib2JqZWN0IiwicmVzdWx0IiwibGVuZ3RoIiwia2V5IiwidmFsdWUiXSwic291cmNlcyI6WyJnZXRNYXRjaERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzU3RyaWN0Q29tcGFyYWJsZSBmcm9tICcuL2lzU3RyaWN0Q29tcGFyYWJsZS5qcydcclxuaW1wb3J0IGtleXMgZnJvbSAnLi4va2V5cy5qcydcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XHJcbiAgY29uc3QgcmVzdWx0ID0ga2V5cyhvYmplY3QpXHJcbiAgbGV0IGxlbmd0aCA9IHJlc3VsdC5sZW5ndGhcclxuXHJcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICBjb25zdCBrZXkgPSByZXN1bHRbbGVuZ3RoXVxyXG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XVxyXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNYXRjaERhdGFcclxuIl0sIm1hcHBpbmdzIjoiNnBDQWVZO0FBQUEsMkZBZlosTUFBT0EsbUJBQWtCLEtBQU0seUJBQXlCLENBQ3hELE1BQU9DLEtBQUksS0FBTSxZQUFZLENBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0MsYUFBWSxDQUFDQyxNQUFNLENBQUUseUJBQzVCLEtBQU1DLE9BQU0sMEJBQUdILElBQUksQ0FBQ0UsTUFBTSxDQUFDLEVBQzNCLEdBQUlFLE9BQU0sMEJBQUdELE1BQU0sQ0FBQ0MsTUFBTSwwQkFFMUIsTUFBT0EsTUFBTSxFQUFFLENBQUUsQ0FDZixLQUFNQyxJQUFHLDBCQUFHRixNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUMxQixLQUFNRSxNQUFLLDBCQUFHSixNQUFNLENBQUNHLEdBQUcsQ0FBQywwQkFDekJGLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUcsQ0FBQ0MsR0FBRyxDQUFFQyxLQUFLLENBQUVQLGtCQUFrQixDQUFDTyxLQUFLLENBQUMsQ0FBQyxDQUMxRCxDQUFDLHdCQUNELE1BQU9ILE9BQU0sQ0FDZixDQUVBLGNBQWVGLGFBQVkifQ==