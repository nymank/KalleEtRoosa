function cov_k9flgoz2x(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\baseMatchesProperty.js";var hash="68792850dd36daa5b2e0fb54e9a35a6c8a316909";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\baseMatchesProperty.js",statementMap:{"0":{start:{line:10,column:29},end:{line:10,column:30}},"1":{start:{line:11,column:31},end:{line:11,column:32}},"2":{start:{line:22,column:2},end:{line:24,column:3}},"3":{start:{line:23,column:4},end:{line:23,column:57}},"4":{start:{line:25,column:2},end:{line:30,column:3}},"5":{start:{line:26,column:21},end:{line:26,column:38}},"6":{start:{line:27,column:4},end:{line:29,column:86}}},fnMap:{"0":{name:"baseMatchesProperty",decl:{start:{line:21,column:9},end:{line:21,column:28}},loc:{start:{line:21,column:45},end:{line:31,column:1}},line:21},"1":{name:"(anonymous_1)",decl:{start:{line:25,column:9},end:{line:25,column:10}},loc:{start:{line:25,column:21},end:{line:30,column:3}},line:25}},branchMap:{"0":{loc:{start:{line:22,column:2},end:{line:24,column:3}},type:"if",locations:[{start:{line:22,column:2},end:{line:24,column:3}},{start:{line:22,column:2},end:{line:24,column:3}}],line:22},"1":{loc:{start:{line:22,column:6},end:{line:22,column:49}},type:"binary-expr",locations:[{start:{line:22,column:6},end:{line:22,column:17}},{start:{line:22,column:21},end:{line:22,column:49}}],line:22},"2":{loc:{start:{line:27,column:11},end:{line:29,column:86}},type:"cond-expr",locations:[{start:{line:28,column:8},end:{line:28,column:27}},{start:{line:29,column:8},end:{line:29,column:86}}],line:27},"3":{loc:{start:{line:27,column:12},end:{line:27,column:59}},type:"binary-expr",locations:[{start:{line:27,column:12},end:{line:27,column:34}},{start:{line:27,column:38},end:{line:27,column:59}}],line:27}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"68792850dd36daa5b2e0fb54e9a35a6c8a316909"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_k9flgoz2x=function(){return actualCoverage;};}return actualCoverage;}cov_k9flgoz2x();import baseIsEqual from'./baseIsEqual.js';import get from'../get.js';import hasIn from'../hasIn.js';import isKey from'./isKey.js';import isStrictComparable from'./isStrictComparable.js';import matchesStrictComparable from'./matchesStrictComparable.js';import toKey from'./toKey.js';/** Used to compose bitmasks for value comparisons. */const COMPARE_PARTIAL_FLAG=(cov_k9flgoz2x().s[0]++,1);const COMPARE_UNORDERED_FLAG=(cov_k9flgoz2x().s[1]++,2);/**
 * The base implementation of `matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){cov_k9flgoz2x().f[0]++;cov_k9flgoz2x().s[2]++;if((cov_k9flgoz2x().b[1][0]++,isKey(path))&&(cov_k9flgoz2x().b[1][1]++,isStrictComparable(srcValue))){cov_k9flgoz2x().b[0][0]++;cov_k9flgoz2x().s[3]++;return matchesStrictComparable(toKey(path),srcValue);}else{cov_k9flgoz2x().b[0][1]++;}cov_k9flgoz2x().s[4]++;return object=>{cov_k9flgoz2x().f[1]++;const objValue=(cov_k9flgoz2x().s[5]++,get(object,path));cov_k9flgoz2x().s[6]++;return(cov_k9flgoz2x().b[3][0]++,objValue===undefined)&&(cov_k9flgoz2x().b[3][1]++,objValue===srcValue)?(cov_k9flgoz2x().b[2][0]++,hasIn(object,path)):(cov_k9flgoz2x().b[2][1]++,baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG));};}export default baseMatchesProperty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlSXNFcXVhbCIsImdldCIsImhhc0luIiwiaXNLZXkiLCJpc1N0cmljdENvbXBhcmFibGUiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsInRvS2V5IiwiQ09NUEFSRV9QQVJUSUFMX0ZMQUciLCJDT01QQVJFX1VOT1JERVJFRF9GTEFHIiwiYmFzZU1hdGNoZXNQcm9wZXJ0eSIsInBhdGgiLCJzcmNWYWx1ZSIsIm9iamVjdCIsIm9ialZhbHVlIiwidW5kZWZpbmVkIl0sInNvdXJjZXMiOlsiYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZUlzRXF1YWwgZnJvbSAnLi9iYXNlSXNFcXVhbC5qcydcclxuaW1wb3J0IGdldCBmcm9tICcuLi9nZXQuanMnXHJcbmltcG9ydCBoYXNJbiBmcm9tICcuLi9oYXNJbi5qcydcclxuaW1wb3J0IGlzS2V5IGZyb20gJy4vaXNLZXkuanMnXHJcbmltcG9ydCBpc1N0cmljdENvbXBhcmFibGUgZnJvbSAnLi9pc1N0cmljdENvbXBhcmFibGUuanMnXHJcbmltcG9ydCBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSBmcm9tICcuL21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzJ1xyXG5pbXBvcnQgdG9LZXkgZnJvbSAnLi90b0tleS5qcydcclxuXHJcbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xyXG5jb25zdCBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDFcclxuY29uc3QgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDJcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXHJcbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xyXG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XHJcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gKG9iamVjdCkgPT4ge1xyXG4gICAgY29uc3Qgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKVxyXG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcclxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXHJcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlTWF0Y2hlc1Byb3BlcnR5XHJcbiJdLCJtYXBwaW5ncyI6IjRvRUFlWTtBQUFBLHlGQWZaLE1BQU9BLFlBQVcsS0FBTSxrQkFBa0IsQ0FDMUMsTUFBT0MsSUFBRyxLQUFNLFdBQVcsQ0FDM0IsTUFBT0MsTUFBSyxLQUFNLGFBQWEsQ0FDL0IsTUFBT0MsTUFBSyxLQUFNLFlBQVksQ0FDOUIsTUFBT0MsbUJBQWtCLEtBQU0seUJBQXlCLENBQ3hELE1BQU9DLHdCQUF1QixLQUFNLDhCQUE4QixDQUNsRSxNQUFPQyxNQUFLLEtBQU0sWUFBWSxDQUU5QixzREFDQSxLQUFNQyxxQkFBb0IseUJBQUcsQ0FBQyxFQUM5QixLQUFNQyx1QkFBc0IseUJBQUcsQ0FBQyxFQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0Msb0JBQW1CLENBQUNDLElBQUksQ0FBRUMsUUFBUSxDQUFFLCtDQUMzQyxHQUFJLDJCQUFBUixLQUFLLENBQUNPLElBQUksQ0FBQyw4QkFBSU4sa0JBQWtCLENBQUNPLFFBQVEsQ0FBQyxFQUFFLGtEQUMvQyxNQUFPTix3QkFBdUIsQ0FBQ0MsS0FBSyxDQUFDSSxJQUFJLENBQUMsQ0FBRUMsUUFBUSxDQUFDLENBQ3ZELENBQUMsdURBQ0QsTUFBUUMsT0FBTSxFQUFLLHdCQUNqQixLQUFNQyxTQUFRLHlCQUFHWixHQUFHLENBQUNXLE1BQU0sQ0FBRUYsSUFBSSxDQUFDLHlCQUNsQyxNQUFRLDJCQUFBRyxRQUFRLEdBQUtDLFNBQVMsOEJBQUlELFFBQVEsR0FBS0YsUUFBUSw2QkFDbkRULEtBQUssQ0FBQ1UsTUFBTSxDQUFFRixJQUFJLENBQUMsNkJBQ25CVixXQUFXLENBQUNXLFFBQVEsQ0FBRUUsUUFBUSxDQUFFTixvQkFBb0IsQ0FBR0Msc0JBQXNCLENBQUMsRUFDcEYsQ0FBQyxDQUNILENBRUEsY0FBZUMsb0JBQW1CIn0=