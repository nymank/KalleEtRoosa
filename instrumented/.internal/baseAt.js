function cov_28rsnocnr8(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\baseAt.js";var hash="35a290ac8a5050c24ec5eac3e43bc7a149f8660f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\baseAt.js",statementMap:{"0":{start:{line:12,column:14},end:{line:12,column:16}},"1":{start:{line:13,column:17},end:{line:13,column:29}},"2":{start:{line:14,column:17},end:{line:14,column:34}},"3":{start:{line:15,column:15},end:{line:15,column:29}},"4":{start:{line:17,column:2},end:{line:19,column:3}},"5":{start:{line:18,column:4},end:{line:18,column:64}},"6":{start:{line:20,column:2},end:{line:20,column:15}}},fnMap:{"0":{name:"baseAt",decl:{start:{line:11,column:9},end:{line:11,column:15}},loc:{start:{line:11,column:31},end:{line:21,column:1}},line:11}},branchMap:{"0":{loc:{start:{line:18,column:20},end:{line:18,column:64}},type:"cond-expr",locations:[{start:{line:18,column:27},end:{line:18,column:36}},{start:{line:18,column:39},end:{line:18,column:64}}],line:18}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"35a290ac8a5050c24ec5eac3e43bc7a149f8660f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_28rsnocnr8=function(){return actualCoverage;};}return actualCoverage;}cov_28rsnocnr8();import get from'../get.js';/**
 * The base implementation of `at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */function baseAt(object,paths){cov_28rsnocnr8().f[0]++;let index=(cov_28rsnocnr8().s[0]++,-1);const length=(cov_28rsnocnr8().s[1]++,paths.length);const result=(cov_28rsnocnr8().s[2]++,new Array(length));const skip=(cov_28rsnocnr8().s[3]++,object==null);cov_28rsnocnr8().s[4]++;while(++index<length){cov_28rsnocnr8().s[5]++;result[index]=skip?(cov_28rsnocnr8().b[0][0]++,undefined):(cov_28rsnocnr8().b[0][1]++,get(object,paths[index]));}cov_28rsnocnr8().s[6]++;return result;}export default baseAt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXQiLCJiYXNlQXQiLCJvYmplY3QiLCJwYXRocyIsImluZGV4IiwibGVuZ3RoIiwicmVzdWx0IiwiQXJyYXkiLCJza2lwIiwidW5kZWZpbmVkIl0sInNvdXJjZXMiOlsiYmFzZUF0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXQgZnJvbSAnLi4vZ2V0LmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhdGAgd2l0aG91dCBzdXBwb3J0IGZvciBpbmRpdmlkdWFsIHBhdGhzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRocyBUaGUgcHJvcGVydHkgcGF0aHMgdG8gcGljay5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwaWNrZWQgZWxlbWVudHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlQXQob2JqZWN0LCBwYXRocykge1xyXG4gIGxldCBpbmRleCA9IC0xXHJcbiAgY29uc3QgbGVuZ3RoID0gcGF0aHMubGVuZ3RoXHJcbiAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aClcclxuICBjb25zdCBza2lwID0gb2JqZWN0ID09IG51bGxcclxuXHJcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgIHJlc3VsdFtpbmRleF0gPSBza2lwID8gdW5kZWZpbmVkIDogZ2V0KG9iamVjdCwgcGF0aHNbaW5kZXhdKVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VBdFxyXG4iXSwibWFwcGluZ3MiOiI4MUNBZVk7QUFBQSwyRkFmWixNQUFPQSxJQUFHLEtBQU0sV0FBVyxDQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0MsT0FBTSxDQUFDQyxNQUFNLENBQUVDLEtBQUssQ0FBRSx5QkFDN0IsR0FBSUMsTUFBSywwQkFBRyxDQUFDLENBQUMsRUFDZCxLQUFNQyxPQUFNLDBCQUFHRixLQUFLLENBQUNFLE1BQU0sRUFDM0IsS0FBTUMsT0FBTSwwQkFBRyxHQUFJQyxNQUFLLENBQUNGLE1BQU0sQ0FBQyxFQUNoQyxLQUFNRyxLQUFJLDBCQUFHTixNQUFNLEVBQUksSUFBSSwwQkFFM0IsTUFBTyxFQUFFRSxLQUFLLENBQUdDLE1BQU0sQ0FBRSx5QkFDdkJDLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLENBQUdJLElBQUksNkJBQUdDLFNBQVMsOEJBQUdULEdBQUcsQ0FBQ0UsTUFBTSxDQUFFQyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQzlELENBQUMsd0JBQ0QsTUFBT0UsT0FBTSxDQUNmLENBRUEsY0FBZUwsT0FBTSJ9