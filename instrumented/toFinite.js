function cov_18zqjv7ec2(){var path="C:\\git\\KalleEtRoosa\\src\\toFinite.js";var hash="364ac6ee137f5ca911cc0719b860f0254f568546";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\toFinite.js",statementMap:{"0":{start:{line:4,column:17},end:{line:4,column:22}},"1":{start:{line:5,column:20},end:{line:5,column:43}},"2":{start:{line:29,column:2},end:{line:31,column:3}},"3":{start:{line:30,column:4},end:{line:30,column:34}},"4":{start:{line:32,column:2},end:{line:32,column:25}},"5":{start:{line:33,column:2},end:{line:36,column:3}},"6":{start:{line:34,column:18},end:{line:34,column:36}},"7":{start:{line:35,column:4},end:{line:35,column:29}},"8":{start:{line:37,column:2},end:{line:37,column:36}}},fnMap:{"0":{name:"toFinite",decl:{start:{line:28,column:9},end:{line:28,column:17}},loc:{start:{line:28,column:25},end:{line:38,column:1}},line:28}},branchMap:{"0":{loc:{start:{line:29,column:2},end:{line:31,column:3}},type:"if",locations:[{start:{line:29,column:2},end:{line:31,column:3}},{start:{line:29,column:2},end:{line:31,column:3}}],line:29},"1":{loc:{start:{line:30,column:11},end:{line:30,column:34}},type:"cond-expr",locations:[{start:{line:30,column:25},end:{line:30,column:30}},{start:{line:30,column:33},end:{line:30,column:34}}],line:30},"2":{loc:{start:{line:33,column:2},end:{line:36,column:3}},type:"if",locations:[{start:{line:33,column:2},end:{line:36,column:3}},{start:{line:33,column:2},end:{line:36,column:3}}],line:33},"3":{loc:{start:{line:33,column:6},end:{line:33,column:47}},type:"binary-expr",locations:[{start:{line:33,column:6},end:{line:33,column:24}},{start:{line:33,column:28},end:{line:33,column:47}}],line:33},"4":{loc:{start:{line:34,column:18},end:{line:34,column:36}},type:"cond-expr",locations:[{start:{line:34,column:30},end:{line:34,column:32}},{start:{line:34,column:35},end:{line:34,column:36}}],line:34},"5":{loc:{start:{line:37,column:9},end:{line:37,column:36}},type:"cond-expr",locations:[{start:{line:37,column:27},end:{line:37,column:32}},{start:{line:37,column:35},end:{line:37,column:36}}],line:37}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"364ac6ee137f5ca911cc0719b860f0254f568546"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_18zqjv7ec2=function(){return actualCoverage;};}return actualCoverage;}cov_18zqjv7ec2();import toNumber from'./toNumber.js';/** Used as references for various `Number` constants. */const INFINITY=(cov_18zqjv7ec2().s[0]++,1/0);const MAX_INTEGER=(cov_18zqjv7ec2().s[1]++,1.7976931348623157e+308);/**
 * Converts `value` to a finite number.
 *
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * toFinite(3.2)
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 */function toFinite(value){cov_18zqjv7ec2().f[0]++;cov_18zqjv7ec2().s[2]++;if(!value){cov_18zqjv7ec2().b[0][0]++;cov_18zqjv7ec2().s[3]++;return value===0?(cov_18zqjv7ec2().b[1][0]++,value):(cov_18zqjv7ec2().b[1][1]++,0);}else{cov_18zqjv7ec2().b[0][1]++;}cov_18zqjv7ec2().s[4]++;value=toNumber(value);cov_18zqjv7ec2().s[5]++;if((cov_18zqjv7ec2().b[3][0]++,value===INFINITY)||(cov_18zqjv7ec2().b[3][1]++,value===-INFINITY)){cov_18zqjv7ec2().b[2][0]++;const sign=(cov_18zqjv7ec2().s[6]++,value<0?(cov_18zqjv7ec2().b[4][0]++,-1):(cov_18zqjv7ec2().b[4][1]++,1));cov_18zqjv7ec2().s[7]++;return sign*MAX_INTEGER;}else{cov_18zqjv7ec2().b[2][1]++;}cov_18zqjv7ec2().s[8]++;return value===value?(cov_18zqjv7ec2().b[5][0]++,value):(cov_18zqjv7ec2().b[5][1]++,0);}export default toFinite;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0b051bWJlciIsIklORklOSVRZIiwiTUFYX0lOVEVHRVIiLCJ0b0Zpbml0ZSIsInZhbHVlIiwic2lnbiJdLCJzb3VyY2VzIjpbInRvRmluaXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b051bWJlciBmcm9tICcuL3RvTnVtYmVyLmpzJ1xyXG5cclxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXHJcbmNvbnN0IElORklOSVRZID0gMSAvIDBcclxuY29uc3QgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxyXG4gKlxyXG4gKiBAc2luY2UgNC4xMi4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIHRvRmluaXRlKDMuMilcclxuICogLy8gPT4gMy4yXHJcbiAqXHJcbiAqIHRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpXHJcbiAqIC8vID0+IDVlLTMyNFxyXG4gKlxyXG4gKiB0b0Zpbml0ZShJbmZpbml0eSlcclxuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcclxuICpcclxuICogdG9GaW5pdGUoJzMuMicpXHJcbiAqIC8vID0+IDMuMlxyXG4gKi9cclxuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDBcclxuICB9XHJcbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSlcclxuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcclxuICAgIGNvbnN0IHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKVxyXG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUlxyXG4gIH1cclxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRmluaXRlXHJcbiJdLCJtYXBwaW5ncyI6Imc5RUFlWTtBQUFBLDJGQWZaLE1BQU9BLFNBQVEsS0FBTSxlQUFlLENBRXBDLHlEQUNBLEtBQU1DLFNBQVEsMEJBQUcsQ0FBQyxDQUFHLENBQUMsRUFDdEIsS0FBTUMsWUFBVywwQkFBRyx1QkFBdUIsRUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0MsU0FBUSxDQUFDQyxLQUFLLENBQUUsaURBQ3ZCLEdBQUksQ0FBQ0EsS0FBSyxDQUFFLG9EQUNWLE1BQU9BLE1BQUssR0FBSyxDQUFDLDZCQUFHQSxLQUFLLDhCQUFHLENBQUMsRUFDaEMsQ0FBQyx5REFDREEsS0FBSyxDQUFHSixRQUFRLENBQUNJLEtBQUssQ0FBQyx5QkFDdkIsR0FBSSw0QkFBQUEsS0FBSyxHQUFLSCxRQUFRLCtCQUFJRyxLQUFLLEdBQUssQ0FBQ0gsUUFBUSxFQUFFLDRCQUM3QyxLQUFNSSxLQUFJLDBCQUFJRCxLQUFLLENBQUcsQ0FBQyw2QkFBRyxDQUFDLENBQUMsOEJBQUcsQ0FBQyxFQUFDLHlCQUNqQyxNQUFPQyxLQUFJLENBQUdILFdBQVcsQ0FDM0IsQ0FBQyx5REFDRCxNQUFPRSxNQUFLLEdBQUtBLEtBQUssNkJBQUdBLEtBQUssOEJBQUcsQ0FBQyxFQUNwQyxDQUVBLGNBQWVELFNBQVEifQ==