function cov_1sqc1o6aqn(){var path="C:\\git\\KalleEtRoosa\\src\\toInteger.js";var hash="27723d33ff979496119ff6029ced69040162d27a";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\toInteger.js",statementMap:{"0":{start:{line:29,column:17},end:{line:29,column:32}},"1":{start:{line:30,column:20},end:{line:30,column:30}},"2":{start:{line:32,column:2},end:{line:32,column:48}}},fnMap:{"0":{name:"toInteger",decl:{start:{line:28,column:9},end:{line:28,column:18}},loc:{start:{line:28,column:26},end:{line:33,column:1}},line:28}},branchMap:{"0":{loc:{start:{line:32,column:9},end:{line:32,column:48}},type:"cond-expr",locations:[{start:{line:32,column:21},end:{line:32,column:39}},{start:{line:32,column:42},end:{line:32,column:48}}],line:32}},s:{"0":0,"1":0,"2":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"27723d33ff979496119ff6029ced69040162d27a"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1sqc1o6aqn=function(){return actualCoverage;};}return actualCoverage;}cov_1sqc1o6aqn();import toFinite from'./toFinite.js';/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @see isInteger, isNumber, toNumber
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */function toInteger(value){cov_1sqc1o6aqn().f[0]++;const result=(cov_1sqc1o6aqn().s[0]++,toFinite(value));const remainder=(cov_1sqc1o6aqn().s[1]++,result%1);cov_1sqc1o6aqn().s[2]++;return remainder?(cov_1sqc1o6aqn().b[0][0]++,result-remainder):(cov_1sqc1o6aqn().b[0][1]++,result);}export default toInteger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0b0Zpbml0ZSIsInRvSW50ZWdlciIsInZhbHVlIiwicmVzdWx0IiwicmVtYWluZGVyIl0sInNvdXJjZXMiOlsidG9JbnRlZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0Zpbml0ZSBmcm9tICcuL3RvRmluaXRlLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cclxuICpcclxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cclxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cclxuICpcclxuICogQHNpbmNlIDQuMC4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxyXG4gKiBAc2VlIGlzSW50ZWdlciwgaXNOdW1iZXIsIHRvTnVtYmVyXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIHRvSW50ZWdlcigzLjIpXHJcbiAqIC8vID0+IDNcclxuICpcclxuICogdG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpXHJcbiAqIC8vID0+IDBcclxuICpcclxuICogdG9JbnRlZ2VyKEluZmluaXR5KVxyXG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxyXG4gKlxyXG4gKiB0b0ludGVnZXIoJzMuMicpXHJcbiAqIC8vID0+IDNcclxuICovXHJcbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKVxyXG4gIGNvbnN0IHJlbWFpbmRlciA9IHJlc3VsdCAlIDFcclxuXHJcbiAgcmV0dXJuIHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b0ludGVnZXJcclxuIl0sIm1hcHBpbmdzIjoiMmxDQWVZO0FBQUEsMkZBZlosTUFBT0EsU0FBUSxLQUFNLGVBQWUsQ0FFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQyxVQUFTLENBQUNDLEtBQUssQ0FBRSx5QkFDeEIsS0FBTUMsT0FBTSwwQkFBR0gsUUFBUSxDQUFDRSxLQUFLLENBQUMsRUFDOUIsS0FBTUUsVUFBUywwQkFBR0QsTUFBTSxDQUFHLENBQUMsMEJBRTVCLE1BQU9DLFVBQVMsNkJBQUdELE1BQU0sQ0FBR0MsU0FBUyw4QkFBR0QsTUFBTSxFQUNoRCxDQUVBLGNBQWVGLFVBQVMifQ==