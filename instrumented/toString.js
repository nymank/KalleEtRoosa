function cov_bqwlofqj8(){var path="C:\\git\\KalleEtRoosa\\src\\toString.js";var hash="a761ec132084d10ab80fb10f6bf813d8098d7b53";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\toString.js",statementMap:{"0":{start:{line:4,column:17},end:{line:4,column:22}},"1":{start:{line:28,column:2},end:{line:30,column:3}},"2":{start:{line:29,column:4},end:{line:29,column:16}},"3":{start:{line:31,column:2},end:{line:34,column:3}},"4":{start:{line:33,column:4},end:{line:33,column:77}},"5":{start:{line:33,column:35},end:{line:33,column:74}},"6":{start:{line:35,column:2},end:{line:37,column:3}},"7":{start:{line:36,column:4},end:{line:36,column:27}},"8":{start:{line:38,column:17},end:{line:38,column:27}},"9":{start:{line:39,column:2},end:{line:39,column:68}}},fnMap:{"0":{name:"toString",decl:{start:{line:25,column:9},end:{line:25,column:17}},loc:{start:{line:25,column:25},end:{line:40,column:1}},line:25},"1":{name:"(anonymous_1)",decl:{start:{line:33,column:24},end:{line:33,column:25}},loc:{start:{line:33,column:35},end:{line:33,column:74}},line:33}},branchMap:{"0":{loc:{start:{line:28,column:2},end:{line:30,column:3}},type:"if",locations:[{start:{line:28,column:2},end:{line:30,column:3}},{start:{line:28,column:2},end:{line:30,column:3}}],line:28},"1":{loc:{start:{line:31,column:2},end:{line:34,column:3}},type:"if",locations:[{start:{line:31,column:2},end:{line:34,column:3}},{start:{line:31,column:2},end:{line:34,column:3}}],line:31},"2":{loc:{start:{line:33,column:35},end:{line:33,column:74}},type:"cond-expr",locations:[{start:{line:33,column:51},end:{line:33,column:56}},{start:{line:33,column:59},end:{line:33,column:74}}],line:33},"3":{loc:{start:{line:35,column:2},end:{line:37,column:3}},type:"if",locations:[{start:{line:35,column:2},end:{line:37,column:3}},{start:{line:35,column:2},end:{line:37,column:3}}],line:35},"4":{loc:{start:{line:39,column:9},end:{line:39,column:68}},type:"cond-expr",locations:[{start:{line:39,column:55},end:{line:39,column:59}},{start:{line:39,column:62},end:{line:39,column:68}}],line:39},"5":{loc:{start:{line:39,column:10},end:{line:39,column:51}},type:"binary-expr",locations:[{start:{line:39,column:10},end:{line:39,column:23}},{start:{line:39,column:27},end:{line:39,column:51}}],line:39}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a761ec132084d10ab80fb10f6bf813d8098d7b53"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_bqwlofqj8=function(){return actualCoverage;};}return actualCoverage;}cov_bqwlofqj8();import isSymbol from'./isSymbol.js';/** Used as references for various `Number` constants. */const INFINITY=(cov_bqwlofqj8().s[0]++,1/0);/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */function toString(value){cov_bqwlofqj8().f[0]++;cov_bqwlofqj8().s[1]++;// Exit early for strings to avoid a performance hit in some environments.
if(typeof value==='string'){cov_bqwlofqj8().b[0][0]++;cov_bqwlofqj8().s[2]++;return value;}else{cov_bqwlofqj8().b[0][1]++;}cov_bqwlofqj8().s[3]++;if(Array.isArray(value)){cov_bqwlofqj8().b[1][0]++;cov_bqwlofqj8().s[4]++;// Recursively convert values (susceptible to call stack limits).
return`${value.map(other=>{cov_bqwlofqj8().f[1]++;cov_bqwlofqj8().s[5]++;return other==null?(cov_bqwlofqj8().b[2][0]++,other):(cov_bqwlofqj8().b[2][1]++,toString(other));})}`;}else{cov_bqwlofqj8().b[1][1]++;}cov_bqwlofqj8().s[6]++;if(isSymbol(value)){cov_bqwlofqj8().b[3][0]++;cov_bqwlofqj8().s[7]++;return value.toString();}else{cov_bqwlofqj8().b[3][1]++;}const result=(cov_bqwlofqj8().s[8]++,`${value}`);cov_bqwlofqj8().s[9]++;return(cov_bqwlofqj8().b[5][0]++,result=='0')&&(cov_bqwlofqj8().b[5][1]++,1/value==-INFINITY)?(cov_bqwlofqj8().b[4][0]++,'-0'):(cov_bqwlofqj8().b[4][1]++,result);}export default toString;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1N5bWJvbCIsIklORklOSVRZIiwidG9TdHJpbmciLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIm90aGVyIiwicmVzdWx0Il0sInNvdXJjZXMiOlsidG9TdHJpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnXHJcblxyXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cclxuY29uc3QgSU5GSU5JVFkgPSAxIC8gMFxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXHJcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAc2luY2UgNC4wLjBcclxuICogQGNhdGVnb3J5IExhbmdcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogdG9TdHJpbmcobnVsbClcclxuICogLy8gPT4gJydcclxuICpcclxuICogdG9TdHJpbmcoLTApXHJcbiAqIC8vID0+ICctMCdcclxuICpcclxuICogdG9TdHJpbmcoWzEsIDIsIDNdKVxyXG4gKiAvLyA9PiAnMSwyLDMnXHJcbiAqL1xyXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xyXG4gIFxyXG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXHJcbiAgICByZXR1cm4gYCR7dmFsdWUubWFwKChvdGhlcikgPT4gb3RoZXIgPT0gbnVsbCA/IG90aGVyIDogdG9TdHJpbmcob3RoZXIpKX1gXHJcbiAgfVxyXG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXHJcbiAgfVxyXG4gIGNvbnN0IHJlc3VsdCA9IGAke3ZhbHVlfWBcclxuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9TdHJpbmdcclxuIl0sIm1hcHBpbmdzIjoiNHBGQWVZO0FBQUEseUZBZlosTUFBT0EsU0FBUSxLQUFNLGVBQWUsQ0FFcEMseURBQ0EsS0FBTUMsU0FBUSx5QkFBRyxDQUFDLENBQUcsQ0FBQyxFQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNDLFNBQVEsQ0FBQ0MsS0FBSyxDQUFFLCtDQUV2QjtBQUNBLEdBQUksTUFBT0EsTUFBSyxHQUFLLFFBQVEsQ0FBRSxrREFDN0IsTUFBT0EsTUFBSyxDQUNkLENBQUMsdURBQ0QsR0FBSUMsS0FBSyxDQUFDQyxPQUFPLENBQUNGLEtBQUssQ0FBQyxDQUFFLGtEQUN4QjtBQUNBLE1BQVEsR0FBRUEsS0FBSyxDQUFDRyxHQUFHLENBQUVDLEtBQUssRUFBSyxxREFBQUEsTUFBSyxFQUFJLElBQUksNEJBQUdBLEtBQUssNkJBQUdMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLEVBQUQsQ0FBQyxDQUFFLEVBQUMsQ0FDM0UsQ0FBQyx1REFDRCxHQUFJUCxRQUFRLENBQUNHLEtBQUssQ0FBQyxDQUFFLGtEQUNuQixNQUFPQSxNQUFLLENBQUNELFFBQVEsRUFBRSxDQUN6QixDQUFDLGdDQUNELEtBQU1NLE9BQU0seUJBQUksR0FBRUwsS0FBTSxFQUFDLHlCQUN6QixNQUFRLDJCQUFBSyxNQUFNLEVBQUksR0FBRyw4QkFBSyxDQUFDLENBQUdMLEtBQUssRUFBSyxDQUFDRixRQUFRLDZCQUFJLElBQUksNkJBQUdPLE1BQU0sRUFDcEUsQ0FFQSxjQUFlTixTQUFRIn0=