function cov_1188lox50g(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\cloneBuffer.js";var hash="40be4869e32fac4524317fc04310dc09cc2e1346";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\cloneBuffer.js",statementMap:{"0":{start:{line:4,column:20},end:{line:4,column:99}},"1":{start:{line:7,column:19},end:{line:7,column:109}},"2":{start:{line:10,column:22},end:{line:10,column:70}},"3":{start:{line:13,column:15},end:{line:13,column:54}},"4":{start:{line:13,column:70},end:{line:13,column:109}},"5":{start:{line:24,column:2},end:{line:26,column:3}},"6":{start:{line:25,column:4},end:{line:25,column:25}},"7":{start:{line:27,column:17},end:{line:27,column:30}},"8":{start:{line:28,column:17},end:{line:28,column:83}},"9":{start:{line:30,column:2},end:{line:30,column:21}},"10":{start:{line:31,column:2},end:{line:31,column:15}}},fnMap:{"0":{name:"cloneBuffer",decl:{start:{line:23,column:9},end:{line:23,column:20}},loc:{start:{line:23,column:37},end:{line:32,column:1}},line:23}},branchMap:{"0":{loc:{start:{line:4,column:20},end:{line:4,column:99}},type:"binary-expr",locations:[{start:{line:4,column:20},end:{line:4,column:47}},{start:{line:4,column:51},end:{line:4,column:67}},{start:{line:4,column:71},end:{line:4,column:88}},{start:{line:4,column:92},end:{line:4,column:99}}],line:4},"1":{loc:{start:{line:7,column:19},end:{line:7,column:109}},type:"binary-expr",locations:[{start:{line:7,column:19},end:{line:7,column:30}},{start:{line:7,column:34},end:{line:7,column:60}},{start:{line:7,column:64},end:{line:7,column:79}},{start:{line:7,column:83},end:{line:7,column:99}},{start:{line:7,column:103},end:{line:7,column:109}}],line:7},"2":{loc:{start:{line:10,column:22},end:{line:10,column:70}},type:"binary-expr",locations:[{start:{line:10,column:22},end:{line:10,column:32}},{start:{line:10,column:36},end:{line:10,column:70}}],line:10},"3":{loc:{start:{line:13,column:15},end:{line:13,column:54}},type:"cond-expr",locations:[{start:{line:13,column:31},end:{line:13,column:42}},{start:{line:13,column:45},end:{line:13,column:54}}],line:13},"4":{loc:{start:{line:13,column:70},end:{line:13,column:109}},type:"cond-expr",locations:[{start:{line:13,column:79},end:{line:13,column:97}},{start:{line:13,column:100},end:{line:13,column:109}}],line:13},"5":{loc:{start:{line:24,column:2},end:{line:26,column:3}},type:"if",locations:[{start:{line:24,column:2},end:{line:26,column:3}},{start:{line:24,column:2},end:{line:26,column:3}}],line:24},"6":{loc:{start:{line:28,column:17},end:{line:28,column:83}},type:"cond-expr",locations:[{start:{line:28,column:31},end:{line:28,column:50}},{start:{line:28,column:53},end:{line:28,column:83}}],line:28}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0},b:{"0":[0,0,0,0],"1":[0,0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"40be4869e32fac4524317fc04310dc09cc2e1346"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1188lox50g=function(){return actualCoverage;};}return actualCoverage;}cov_1188lox50g();import root from'./root.js';/** Detect free variable `exports`. */const freeExports=(cov_1188lox50g().s[0]++,(cov_1188lox50g().b[0][0]++,typeof exports==='object')&&(cov_1188lox50g().b[0][1]++,exports!==null)&&(cov_1188lox50g().b[0][2]++,!exports.nodeType)&&(cov_1188lox50g().b[0][3]++,exports));/** Detect free variable `module`. */const freeModule=(cov_1188lox50g().s[1]++,(cov_1188lox50g().b[1][0]++,freeExports)&&(cov_1188lox50g().b[1][1]++,typeof module==='object')&&(cov_1188lox50g().b[1][2]++,module!==null)&&(cov_1188lox50g().b[1][3]++,!module.nodeType)&&(cov_1188lox50g().b[1][4]++,module));/** Detect the popular CommonJS extension `module.exports`. */const moduleExports=(cov_1188lox50g().s[2]++,(cov_1188lox50g().b[2][0]++,freeModule)&&(cov_1188lox50g().b[2][1]++,freeModule.exports===freeExports));/** Built-in value references. */const Buffer=(cov_1188lox50g().s[3]++,moduleExports?(cov_1188lox50g().b[3][0]++,root.Buffer):(cov_1188lox50g().b[3][1]++,undefined)),allocUnsafe=(cov_1188lox50g().s[4]++,Buffer?(cov_1188lox50g().b[4][0]++,Buffer.allocUnsafe):(cov_1188lox50g().b[4][1]++,undefined));/**
 * Creates a clone of `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){cov_1188lox50g().f[0]++;cov_1188lox50g().s[5]++;if(isDeep){cov_1188lox50g().b[5][0]++;cov_1188lox50g().s[6]++;return buffer.slice();}else{cov_1188lox50g().b[5][1]++;}const length=(cov_1188lox50g().s[7]++,buffer.length);const result=(cov_1188lox50g().s[8]++,allocUnsafe?(cov_1188lox50g().b[6][0]++,allocUnsafe(length)):(cov_1188lox50g().b[6][1]++,new buffer.constructor(length)));cov_1188lox50g().s[9]++;buffer.copy(result);cov_1188lox50g().s[10]++;return result;}export default cloneBuffer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb290IiwiZnJlZUV4cG9ydHMiLCJleHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsInVuZGVmaW5lZCIsImFsbG9jVW5zYWZlIiwiY2xvbmVCdWZmZXIiLCJidWZmZXIiLCJpc0RlZXAiLCJzbGljZSIsImxlbmd0aCIsInJlc3VsdCIsImNvbnN0cnVjdG9yIiwiY29weSJdLCJzb3VyY2VzIjpbImNsb25lQnVmZmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb290IGZyb20gJy4vcm9vdC5qcydcclxuXHJcbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXHJcbmNvbnN0IGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIGV4cG9ydHMgIT09IG51bGwgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0c1xyXG5cclxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xyXG5jb25zdCBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlICE9PSBudWxsICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlXHJcblxyXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xyXG5jb25zdCBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzXHJcblxyXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cclxuY29uc3QgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLCBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZFxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYnVmZmVyYC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxyXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxyXG4gKi9cclxuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcclxuICBpZiAoaXNEZWVwKSB7XHJcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKClcclxuICB9XHJcbiAgY29uc3QgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aFxyXG4gIGNvbnN0IHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKVxyXG5cclxuICBidWZmZXIuY29weShyZXN1bHQpXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbG9uZUJ1ZmZlclxyXG4iXSwibWFwcGluZ3MiOiJ1bEdBZVk7QUFBQSwyRkFmWixNQUFPQSxLQUFJLEtBQU0sV0FBVyxDQUU1QixzQ0FDQSxLQUFNQyxZQUFXLDBCQUFHLGtDQUFPQyxRQUFPLEdBQUssUUFBUSwrQkFBSUEsT0FBTyxHQUFLLElBQUksK0JBQUksQ0FBQ0EsT0FBTyxDQUFDQyxRQUFRLCtCQUFJRCxPQUFPLEdBRW5HLHFDQUNBLEtBQU1FLFdBQVUsMEJBQUcsNEJBQUFILFdBQVcsK0JBQUksTUFBT0ksT0FBTSxHQUFLLFFBQVEsK0JBQUlBLE1BQU0sR0FBSyxJQUFJLCtCQUFJLENBQUNBLE1BQU0sQ0FBQ0YsUUFBUSwrQkFBSUUsTUFBTSxHQUU3Ryw4REFDQSxLQUFNQyxjQUFhLDBCQUFHLDRCQUFBRixVQUFVLCtCQUFJQSxVQUFVLENBQUNGLE9BQU8sR0FBS0QsV0FBVyxHQUV0RSxpQ0FDQSxLQUFNTSxPQUFNLDBCQUFHRCxhQUFhLDZCQUFHTixJQUFJLENBQUNPLE1BQU0sOEJBQUdDLFNBQVMsR0FBRUMsV0FBVywwQkFBR0YsTUFBTSw2QkFBR0EsTUFBTSxDQUFDRSxXQUFXLDhCQUFHRCxTQUFTLEdBRTdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTRSxZQUFXLENBQUNDLE1BQU0sQ0FBRUMsTUFBTSxDQUFFLGlEQUNuQyxHQUFJQSxNQUFNLENBQUUsb0RBQ1YsTUFBT0QsT0FBTSxDQUFDRSxLQUFLLEVBQUUsQ0FDdkIsQ0FBQyxpQ0FDRCxLQUFNQyxPQUFNLDBCQUFHSCxNQUFNLENBQUNHLE1BQU0sRUFDNUIsS0FBTUMsT0FBTSwwQkFBR04sV0FBVyw2QkFBR0EsV0FBVyxDQUFDSyxNQUFNLENBQUMsOEJBQUcsR0FBSUgsT0FBTSxDQUFDSyxXQUFXLENBQUNGLE1BQU0sQ0FBQywyQkFFakZILE1BQU0sQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUMsMEJBQ25CLE1BQU9BLE9BQU0sQ0FDZixDQUVBLGNBQWVMLFlBQVcifQ==