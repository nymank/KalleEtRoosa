function cov_n925odgkg(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\assignMergeValue.js";var hash="b084bb9ab6c55e13cb0fb8a1106c39d2c94c978b";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\assignMergeValue.js",statementMap:{"0":{start:{line:14,column:2},end:{line:17,column:3}},"1":{start:{line:16,column:4},end:{line:16,column:39}}},fnMap:{"0":{name:"assignMergeValue",decl:{start:{line:13,column:9},end:{line:13,column:25}},loc:{start:{line:13,column:46},end:{line:18,column:1}},line:13}},branchMap:{"0":{loc:{start:{line:14,column:2},end:{line:17,column:3}},type:"if",locations:[{start:{line:14,column:2},end:{line:17,column:3}},{start:{line:14,column:2},end:{line:17,column:3}}],line:14},"1":{loc:{start:{line:14,column:6},end:{line:15,column:47}},type:"binary-expr",locations:[{start:{line:14,column:7},end:{line:14,column:26}},{start:{line:14,column:30},end:{line:14,column:53}},{start:{line:15,column:7},end:{line:15,column:26}},{start:{line:15,column:30},end:{line:15,column:46}}],line:14}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0],"1":[0,0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b084bb9ab6c55e13cb0fb8a1106c39d2c94c978b"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_n925odgkg=function(){return actualCoverage;};}return actualCoverage;}cov_n925odgkg();import baseAssignValue from'./baseAssignValue.js';import eq from'../eq.js';/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignMergeValue(object,key,value){cov_n925odgkg().f[0]++;cov_n925odgkg().s[0]++;if((cov_n925odgkg().b[1][0]++,value!==undefined)&&(cov_n925odgkg().b[1][1]++,!eq(object[key],value))||(cov_n925odgkg().b[1][2]++,value===undefined)&&(cov_n925odgkg().b[1][3]++,!(key in object))){cov_n925odgkg().b[0][0]++;cov_n925odgkg().s[1]++;baseAssignValue(object,key,value);}else{cov_n925odgkg().b[0][1]++;}}export default assignMergeValue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlQXNzaWduVmFsdWUiLCJlcSIsImFzc2lnbk1lcmdlVmFsdWUiLCJvYmplY3QiLCJrZXkiLCJ2YWx1ZSIsInVuZGVmaW5lZCJdLCJzb3VyY2VzIjpbImFzc2lnbk1lcmdlVmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VBc3NpZ25WYWx1ZSBmcm9tICcuL2Jhc2VBc3NpZ25WYWx1ZS5qcydcclxuaW1wb3J0IGVxIGZyb20gJy4uL2VxLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduXHJcbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cclxuICovXHJcbmZ1bmN0aW9uIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XHJcbiAgaWYgKCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFlcShvYmplY3Rba2V5XSwgdmFsdWUpKSB8fFxyXG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xyXG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzc2lnbk1lcmdlVmFsdWVcclxuIl0sIm1hcHBpbmdzIjoieTNDQWVZO0FBQUEseUZBZlosTUFBT0EsZ0JBQWUsS0FBTSxzQkFBc0IsQ0FDbEQsTUFBT0MsR0FBRSxLQUFNLFVBQVUsQ0FFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0MsaUJBQWdCLENBQUNDLE1BQU0sQ0FBRUMsR0FBRyxDQUFFQyxLQUFLLENBQUUsK0NBQzVDLEdBQUssMkJBQUFBLEtBQUssR0FBS0MsU0FBUyw4QkFBSSxDQUFDTCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUVDLEtBQUssQ0FBQyxHQUM5QywyQkFBQUEsS0FBSyxHQUFLQyxTQUFTLDhCQUFJLEVBQUVGLEdBQUcsR0FBSUQsT0FBTSxDQUFDLENBQUMsQ0FBRSxrREFDN0NILGVBQWUsQ0FBQ0csTUFBTSxDQUFFQyxHQUFHLENBQUVDLEtBQUssQ0FBQyxDQUNyQyxDQUFDLGdDQUNILENBRUEsY0FBZUgsaUJBQWdCIn0=