function cov_1u663bqtsl(){var path="C:\\git\\KalleEtRoosa\\src\\isDate.js";var hash="4d14dda6402d0551deb1a5f38dfd2ab0c23049d8";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\isDate.js",statementMap:{"0":{start:{line:6,column:19},end:{line:6,column:48}},"1":{start:{line:23,column:15},end:{line:25,column:70}},"2":{start:{line:24,column:15},end:{line:24,column:32}},"3":{start:{line:25,column:15},end:{line:25,column:70}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:24,column:4},end:{line:24,column:5}},loc:{start:{line:24,column:15},end:{line:24,column:32}},line:24},"1":{name:"(anonymous_1)",decl:{start:{line:25,column:4},end:{line:25,column:5}},loc:{start:{line:25,column:15},end:{line:25,column:70}},line:25}},branchMap:{"0":{loc:{start:{line:6,column:19},end:{line:6,column:48}},type:"binary-expr",locations:[{start:{line:6,column:19},end:{line:6,column:28}},{start:{line:6,column:32},end:{line:6,column:48}}],line:6},"1":{loc:{start:{line:23,column:15},end:{line:25,column:70}},type:"cond-expr",locations:[{start:{line:24,column:4},end:{line:24,column:32}},{start:{line:25,column:4},end:{line:25,column:70}}],line:23},"2":{loc:{start:{line:25,column:15},end:{line:25,column:70}},type:"binary-expr",locations:[{start:{line:25,column:15},end:{line:25,column:34}},{start:{line:25,column:38},end:{line:25,column:70}}],line:25}},s:{"0":0,"1":0,"2":0,"3":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4d14dda6402d0551deb1a5f38dfd2ab0c23049d8"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1u663bqtsl=function(){return actualCoverage;};}return actualCoverage;}cov_1u663bqtsl();import getTag from'./.internal/getTag.js';import isObjectLike from'./isObjectLike.js';import nodeTypes from'./.internal/nodeTypes.js';/* Node.js helper references. */const nodeIsDate=(cov_1u663bqtsl().s[0]++,(cov_1u663bqtsl().b[0][0]++,nodeTypes)&&(cov_1u663bqtsl().b[0][1]++,nodeTypes.isDate));/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 */const isDate=(cov_1u663bqtsl().s[1]++,nodeIsDate?(cov_1u663bqtsl().b[1][0]++,value=>{cov_1u663bqtsl().f[0]++;cov_1u663bqtsl().s[2]++;return nodeIsDate(value);}):(cov_1u663bqtsl().b[1][1]++,value=>{cov_1u663bqtsl().f[1]++;cov_1u663bqtsl().s[3]++;return(cov_1u663bqtsl().b[2][0]++,isObjectLike(value))&&(cov_1u663bqtsl().b[2][1]++,getTag(value)=='[object Date]');}));export default isDate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRUYWciLCJpc09iamVjdExpa2UiLCJub2RlVHlwZXMiLCJub2RlSXNEYXRlIiwiaXNEYXRlIiwidmFsdWUiXSwic291cmNlcyI6WyJpc0RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFRhZyBmcm9tICcuLy5pbnRlcm5hbC9nZXRUYWcuanMnXHJcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnXHJcbmltcG9ydCBub2RlVHlwZXMgZnJvbSAnLi8uaW50ZXJuYWwvbm9kZVR5cGVzLmpzJ1xyXG5cclxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cclxuY29uc3Qgbm9kZUlzRGF0ZSA9IG5vZGVUeXBlcyAmJiBub2RlVHlwZXMuaXNEYXRlXHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBEYXRlYCBvYmplY3QuXHJcbiAqXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBkYXRlIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpc0RhdGUobmV3IERhdGUpXHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogaXNEYXRlKCdNb24gQXByaWwgMjMgMjAxMicpXHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqL1xyXG5jb25zdCBpc0RhdGUgPSBub2RlSXNEYXRlXHJcbiAgPyAodmFsdWUpID0+IG5vZGVJc0RhdGUodmFsdWUpXHJcbiAgOiAodmFsdWUpID0+IGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBEYXRlXSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZVxyXG4iXSwibWFwcGluZ3MiOiJvdERBZVk7QUFBQSwyRkFmWixNQUFPQSxPQUFNLEtBQU0sdUJBQXVCLENBQzFDLE1BQU9DLGFBQVksS0FBTSxtQkFBbUIsQ0FDNUMsTUFBT0MsVUFBUyxLQUFNLDBCQUEwQixDQUVoRCxnQ0FDQSxLQUFNQyxXQUFVLDBCQUFHLDRCQUFBRCxTQUFTLCtCQUFJQSxTQUFTLENBQUNFLE1BQU0sR0FFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsS0FBTUEsT0FBTSwwQkFBR0QsVUFBVSw2QkFDcEJFLEtBQUssRUFBSyx1REFBQUYsV0FBVSxDQUFDRSxLQUFLLENBQUMsQ0FBRCxDQUFDLDhCQUMzQkEsS0FBSyxFQUFLLG1GQUFBSixZQUFZLENBQUNJLEtBQUssQ0FBQywrQkFBSUwsTUFBTSxDQUFDSyxLQUFLLENBQUMsRUFBSSxlQUFlLEVBQUQsQ0FBQyxHQUV0RSxjQUFlRCxPQUFNIn0=