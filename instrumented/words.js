function cov_162sw33inu(){var path="C:\\git\\KalleEtRoosa\\src\\words.js";var hash="4bbcfe74a00c2f9100d4d91e792443e9ae395ed6";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\words.js",statementMap:{"0":{start:{line:3,column:23},end:{line:5,column:1}},"1":{start:{line:8,column:20},end:{line:8,column:63}},"2":{start:{line:11,column:2},end:{line:11,column:34}},"3":{start:{line:31,column:2},end:{line:34,column:3}},"4":{start:{line:32,column:19},end:{line:32,column:85}},"5":{start:{line:33,column:4},end:{line:33,column:23}},"6":{start:{line:35,column:2},end:{line:35,column:36}}},fnMap:{"0":{name:"asciiWords",decl:{start:{line:10,column:9},end:{line:10,column:19}},loc:{start:{line:10,column:28},end:{line:12,column:1}},line:10},"1":{name:"words",decl:{start:{line:30,column:9},end:{line:30,column:14}},loc:{start:{line:30,column:32},end:{line:36,column:1}},line:30}},branchMap:{"0":{loc:{start:{line:31,column:2},end:{line:34,column:3}},type:"if",locations:[{start:{line:31,column:2},end:{line:34,column:3}},{start:{line:31,column:2},end:{line:34,column:3}}],line:31},"1":{loc:{start:{line:32,column:19},end:{line:32,column:85}},type:"cond-expr",locations:[{start:{line:32,column:44},end:{line:32,column:64}},{start:{line:32,column:67},end:{line:32,column:85}}],line:32},"2":{loc:{start:{line:33,column:11},end:{line:33,column:23}},type:"binary-expr",locations:[{start:{line:33,column:11},end:{line:33,column:17}},{start:{line:33,column:21},end:{line:33,column:23}}],line:33},"3":{loc:{start:{line:35,column:9},end:{line:35,column:36}},type:"binary-expr",locations:[{start:{line:35,column:9},end:{line:35,column:30}},{start:{line:35,column:34},end:{line:35,column:36}}],line:35}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4bbcfe74a00c2f9100d4d91e792443e9ae395ed6"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_162sw33inu=function(){return actualCoverage;};}return actualCoverage;}cov_162sw33inu();import unicodeWords from'./.internal/unicodeWords.js';const hasUnicodeWord=(cov_162sw33inu().s[0]++,RegExp.prototype.test.bind(/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/));/** Used to match words composed of alphanumeric characters. */const reAsciiWord=(cov_162sw33inu().s[1]++,/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g);function asciiWords(string){cov_162sw33inu().f[0]++;cov_162sw33inu().s[2]++;return string.match(reAsciiWord);}/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */function words(string,pattern){cov_162sw33inu().f[1]++;cov_162sw33inu().s[3]++;if(pattern===undefined){cov_162sw33inu().b[0][0]++;const result=(cov_162sw33inu().s[4]++,hasUnicodeWord(string)?(cov_162sw33inu().b[1][0]++,unicodeWords(string)):(cov_162sw33inu().b[1][1]++,asciiWords(string)));cov_162sw33inu().s[5]++;return(cov_162sw33inu().b[2][0]++,result)||(cov_162sw33inu().b[2][1]++,[]);}else{cov_162sw33inu().b[0][1]++;}cov_162sw33inu().s[6]++;return(cov_162sw33inu().b[3][0]++,string.match(pattern))||(cov_162sw33inu().b[3][1]++,[]);}export default words;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1bmljb2RlV29yZHMiLCJoYXNVbmljb2RlV29yZCIsIlJlZ0V4cCIsInByb3RvdHlwZSIsInRlc3QiLCJiaW5kIiwicmVBc2NpaVdvcmQiLCJhc2NpaVdvcmRzIiwic3RyaW5nIiwibWF0Y2giLCJ3b3JkcyIsInBhdHRlcm4iLCJ1bmRlZmluZWQiLCJyZXN1bHQiXSwic291cmNlcyI6WyJ3b3Jkcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pY29kZVdvcmRzIGZyb20gJy4vLmludGVybmFsL3VuaWNvZGVXb3Jkcy5qcydcclxuXHJcbmNvbnN0IGhhc1VuaWNvZGVXb3JkID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0LmJpbmQoXHJcbiAgL1thLXpdW0EtWl18W0EtWl17Mn1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS9cclxuKVxyXG5cclxuLyoqIFVzZWQgdG8gbWF0Y2ggd29yZHMgY29tcG9zZWQgb2YgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMuICovXHJcbmNvbnN0IHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nXHJcblxyXG5mdW5jdGlvbiBhc2NpaVdvcmRzKHN0cmluZykge1xyXG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXHJcbiAqXHJcbiAqIEBzaW5jZSAzLjAuMFxyXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXHJcbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW3BhdHRlcm5dIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIHdvcmRzLlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiB3b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnKVxyXG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnXVxyXG4gKlxyXG4gKiB3b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnLCAvW14sIF0rL2cpXHJcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAnJicsICdwZWJibGVzJ11cclxuICovXHJcbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybikge1xyXG4gIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKVxyXG4gICAgcmV0dXJuIHJlc3VsdCB8fCBbXVxyXG4gIH1cclxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdvcmRzXHJcbiJdLCJtYXBwaW5ncyI6IndrRUFlWTtBQUFBLDJGQWZaLE1BQU9BLGFBQVksS0FBTSw2QkFBNkIsQ0FFdEQsS0FBTUMsZUFBYywwQkFBR0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUMvQyxvRUFBb0UsQ0FDckUsRUFFRCwrREFDQSxLQUFNQyxZQUFXLDBCQUFHLDJDQUEyQyxFQUUvRCxRQUFTQyxXQUFVLENBQUNDLE1BQU0sQ0FBRSxpREFDMUIsTUFBT0EsT0FBTSxDQUFDQyxLQUFLLENBQUNILFdBQVcsQ0FBQyxDQUNsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBU0ksTUFBSyxDQUFDRixNQUFNLENBQUVHLE9BQU8sQ0FBRSxpREFDOUIsR0FBSUEsT0FBTyxHQUFLQyxTQUFTLENBQUUsNEJBQ3pCLEtBQU1DLE9BQU0sMEJBQUdaLGNBQWMsQ0FBQ08sTUFBTSxDQUFDLDZCQUFHUixZQUFZLENBQUNRLE1BQU0sQ0FBQyw4QkFBR0QsVUFBVSxDQUFDQyxNQUFNLENBQUMsMkJBQ2pGLE1BQU8sNEJBQUFLLE1BQU0sK0JBQUksRUFBRSxFQUNyQixDQUFDLHlEQUNELE1BQU8sNEJBQUFMLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDRSxPQUFPLENBQUMsK0JBQUksRUFBRSxFQUNwQyxDQUVBLGNBQWVELE1BQUsifQ==