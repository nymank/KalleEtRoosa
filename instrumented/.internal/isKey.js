function cov_kdgiwueej(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\isKey.js";var hash="f0a4262bce537f4597af5251af9ffac0356aa457";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\isKey.js",statementMap:{"0":{start:{line:4,column:21},end:{line:4,column:71}},"1":{start:{line:5,column:22},end:{line:5,column:29}},"2":{start:{line:16,column:2},end:{line:18,column:3}},"3":{start:{line:17,column:4},end:{line:17,column:16}},"4":{start:{line:19,column:15},end:{line:19,column:27}},"5":{start:{line:20,column:2},end:{line:22,column:3}},"6":{start:{line:21,column:4},end:{line:21,column:15}},"7":{start:{line:23,column:2},end:{line:24,column:47}}},fnMap:{"0":{name:"isKey",decl:{start:{line:15,column:9},end:{line:15,column:14}},loc:{start:{line:15,column:30},end:{line:25,column:1}},line:15}},branchMap:{"0":{loc:{start:{line:16,column:2},end:{line:18,column:3}},type:"if",locations:[{start:{line:16,column:2},end:{line:18,column:3}},{start:{line:16,column:2},end:{line:18,column:3}}],line:16},"1":{loc:{start:{line:20,column:2},end:{line:22,column:3}},type:"if",locations:[{start:{line:20,column:2},end:{line:22,column:3}},{start:{line:20,column:2},end:{line:22,column:3}}],line:20},"2":{loc:{start:{line:20,column:6},end:{line:20,column:81}},type:"binary-expr",locations:[{start:{line:20,column:6},end:{line:20,column:23}},{start:{line:20,column:27},end:{line:20,column:45}},{start:{line:20,column:49},end:{line:20,column:62}},{start:{line:20,column:66},end:{line:20,column:81}}],line:20},"3":{loc:{start:{line:23,column:9},end:{line:24,column:47}},type:"binary-expr",locations:[{start:{line:23,column:9},end:{line:23,column:34}},{start:{line:23,column:38},end:{line:23,column:63}},{start:{line:24,column:5},end:{line:24,column:19}},{start:{line:24,column:23},end:{line:24,column:46}}],line:23}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0,0,0],"3":[0,0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f0a4262bce537f4597af5251af9ffac0356aa457"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_kdgiwueej=function(){return actualCoverage;};}return actualCoverage;}cov_kdgiwueej();import isSymbol from'../isSymbol.js';/** Used to match property names within property paths. */const reIsDeepProp=(cov_kdgiwueej().s[0]++,/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/);const reIsPlainProp=(cov_kdgiwueej().s[1]++,/^\w*$/);/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){cov_kdgiwueej().f[0]++;cov_kdgiwueej().s[2]++;if(Array.isArray(value)){cov_kdgiwueej().b[0][0]++;cov_kdgiwueej().s[3]++;return false;}else{cov_kdgiwueej().b[0][1]++;}const type=(cov_kdgiwueej().s[4]++,typeof value);cov_kdgiwueej().s[5]++;if((cov_kdgiwueej().b[2][0]++,type==='number')||(cov_kdgiwueej().b[2][1]++,type==='boolean')||(cov_kdgiwueej().b[2][2]++,value==null)||(cov_kdgiwueej().b[2][3]++,isSymbol(value))){cov_kdgiwueej().b[1][0]++;cov_kdgiwueej().s[6]++;return true;}else{cov_kdgiwueej().b[1][1]++;}cov_kdgiwueej().s[7]++;return(cov_kdgiwueej().b[3][0]++,reIsPlainProp.test(value))||(cov_kdgiwueej().b[3][1]++,!reIsDeepProp.test(value))||(cov_kdgiwueej().b[3][2]++,object!=null)&&(cov_kdgiwueej().b[3][3]++,value in Object(object));}export default isKey;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1N5bWJvbCIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInZhbHVlIiwib2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwidHlwZSIsInRlc3QiLCJPYmplY3QiXSwic291cmNlcyI6WyJpc0tleS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi4vaXNTeW1ib2wuanMnXHJcblxyXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXHJcbmNvbnN0IHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS9cclxuY29uc3QgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvXHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZVxyXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcclxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNLZXlcclxuIl0sIm1hcHBpbmdzIjoiNnNFQWVZO0FBQUEseUZBZlosTUFBT0EsU0FBUSxLQUFNLGdCQUFnQixDQUVyQywwREFDQSxLQUFNQyxhQUFZLHlCQUFHLGtEQUFrRCxFQUN2RSxLQUFNQyxjQUFhLHlCQUFHLE9BQU8sRUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNDLE1BQUssQ0FBQ0MsS0FBSyxDQUFFQyxNQUFNLENBQUUsK0NBQzVCLEdBQUlDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxLQUFLLENBQUMsQ0FBRSxrREFDeEIsTUFBTyxNQUFLLENBQ2QsQ0FBQyxnQ0FDRCxLQUFNSSxLQUFJLHlCQUFHLE1BQU9KLE1BQUsseUJBQ3pCLEdBQUksMkJBQUFJLElBQUksR0FBSyxRQUFRLDhCQUFJQSxJQUFJLEdBQUssU0FBUyw4QkFBSUosS0FBSyxFQUFJLElBQUksOEJBQUlKLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDLEVBQUUsa0RBQy9FLE1BQU8sS0FBSSxDQUNiLENBQUMsdURBQ0QsTUFBTywyQkFBQUYsYUFBYSxDQUFDTyxJQUFJLENBQUNMLEtBQUssQ0FBQyw4QkFBSSxDQUFDSCxZQUFZLENBQUNRLElBQUksQ0FBQ0wsS0FBSyxDQUFDLEdBQzFELDJCQUFBQyxNQUFNLEVBQUksSUFBSSw4QkFBSUQsS0FBSyxHQUFJTSxPQUFNLENBQUNMLE1BQU0sQ0FBQyxDQUFDLENBQy9DLENBRUEsY0FBZUYsTUFBSyJ9