function cov_l7zaeorlz(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\createAssigner.js";var hash="8dc2a262d23a89543ef472898711396644c4a61a";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\createAssigner.js",statementMap:{"0":{start:{line:11,column:2},end:{line:33,column:3}},"1":{start:{line:12,column:16},end:{line:12,column:18}},"2":{start:{line:13,column:17},end:{line:13,column:31}},"3":{start:{line:14,column:21},end:{line:14,column:65}},"4":{start:{line:15,column:18},end:{line:15,column:53}},"5":{start:{line:17,column:4},end:{line:19,column:17}},"6":{start:{line:21,column:4},end:{line:24,column:5}},"7":{start:{line:22,column:6},end:{line:22,column:54}},"8":{start:{line:23,column:6},end:{line:23,column:16}},"9":{start:{line:25,column:4},end:{line:25,column:27}},"10":{start:{line:26,column:4},end:{line:31,column:5}},"11":{start:{line:27,column:21},end:{line:27,column:35}},"12":{start:{line:28,column:6},end:{line:30,column:7}},"13":{start:{line:29,column:8},end:{line:29,column:51}},"14":{start:{line:32,column:4},end:{line:32,column:17}}},fnMap:{"0":{name:"createAssigner",decl:{start:{line:10,column:9},end:{line:10,column:23}},loc:{start:{line:10,column:34},end:{line:34,column:1}},line:10},"1":{name:"(anonymous_1)",decl:{start:{line:11,column:9},end:{line:11,column:10}},loc:{start:{line:11,column:33},end:{line:33,column:3}},line:11}},branchMap:{"0":{loc:{start:{line:14,column:21},end:{line:14,column:65}},type:"cond-expr",locations:[{start:{line:14,column:34},end:{line:14,column:53}},{start:{line:14,column:56},end:{line:14,column:65}}],line:14},"1":{loc:{start:{line:15,column:18},end:{line:15,column:53}},type:"cond-expr",locations:[{start:{line:15,column:31},end:{line:15,column:41}},{start:{line:15,column:44},end:{line:15,column:53}}],line:15},"2":{loc:{start:{line:17,column:17},end:{line:19,column:17}},type:"cond-expr",locations:[{start:{line:18,column:9},end:{line:18,column:29}},{start:{line:19,column:8},end:{line:19,column:17}}],line:17},"3":{loc:{start:{line:17,column:18},end:{line:17,column:73}},type:"binary-expr",locations:[{start:{line:17,column:18},end:{line:17,column:37}},{start:{line:17,column:41},end:{line:17,column:73}}],line:17},"4":{loc:{start:{line:21,column:4},end:{line:24,column:5}},type:"if",locations:[{start:{line:21,column:4},end:{line:24,column:5}},{start:{line:21,column:4},end:{line:24,column:5}}],line:21},"5":{loc:{start:{line:21,column:8},end:{line:21,column:62}},type:"binary-expr",locations:[{start:{line:21,column:8},end:{line:21,column:13}},{start:{line:21,column:17},end:{line:21,column:62}}],line:21},"6":{loc:{start:{line:22,column:19},end:{line:22,column:54}},type:"cond-expr",locations:[{start:{line:22,column:32},end:{line:22,column:41}},{start:{line:22,column:44},end:{line:22,column:54}}],line:22},"7":{loc:{start:{line:28,column:6},end:{line:30,column:7}},type:"if",locations:[{start:{line:28,column:6},end:{line:30,column:7}},{start:{line:28,column:6},end:{line:30,column:7}}],line:28}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8dc2a262d23a89543ef472898711396644c4a61a"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_l7zaeorlz=function(){return actualCoverage;};}return actualCoverage;}cov_l7zaeorlz();import isIterateeCall from'./isIterateeCall.js';/**
 * Creates a function like `assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(assigner){cov_l7zaeorlz().f[0]++;cov_l7zaeorlz().s[0]++;return(object,...sources)=>{cov_l7zaeorlz().f[1]++;let index=(cov_l7zaeorlz().s[1]++,-1);let length=(cov_l7zaeorlz().s[2]++,sources.length);let customizer=(cov_l7zaeorlz().s[3]++,length>1?(cov_l7zaeorlz().b[0][0]++,sources[length-1]):(cov_l7zaeorlz().b[0][1]++,undefined));const guard=(cov_l7zaeorlz().s[4]++,length>2?(cov_l7zaeorlz().b[1][0]++,sources[2]):(cov_l7zaeorlz().b[1][1]++,undefined));cov_l7zaeorlz().s[5]++;customizer=(cov_l7zaeorlz().b[3][0]++,assigner.length>3)&&(cov_l7zaeorlz().b[3][1]++,typeof customizer==='function')?(cov_l7zaeorlz().b[2][0]++,(length--,customizer)):(cov_l7zaeorlz().b[2][1]++,undefined);cov_l7zaeorlz().s[6]++;if((cov_l7zaeorlz().b[5][0]++,guard)&&(cov_l7zaeorlz().b[5][1]++,isIterateeCall(sources[0],sources[1],guard))){cov_l7zaeorlz().b[4][0]++;cov_l7zaeorlz().s[7]++;customizer=length<3?(cov_l7zaeorlz().b[6][0]++,undefined):(cov_l7zaeorlz().b[6][1]++,customizer);cov_l7zaeorlz().s[8]++;length=1;}else{cov_l7zaeorlz().b[4][1]++;}cov_l7zaeorlz().s[9]++;object=Object(object);cov_l7zaeorlz().s[10]++;while(++index<length){const source=(cov_l7zaeorlz().s[11]++,sources[index]);cov_l7zaeorlz().s[12]++;if(source){cov_l7zaeorlz().b[7][0]++;cov_l7zaeorlz().s[13]++;assigner(object,source,index,customizer);}else{cov_l7zaeorlz().b[7][1]++;}}cov_l7zaeorlz().s[14]++;return object;};}export default createAssigner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc0l0ZXJhdGVlQ2FsbCIsImNyZWF0ZUFzc2lnbmVyIiwiYXNzaWduZXIiLCJvYmplY3QiLCJzb3VyY2VzIiwiaW5kZXgiLCJsZW5ndGgiLCJjdXN0b21pemVyIiwidW5kZWZpbmVkIiwiZ3VhcmQiLCJPYmplY3QiLCJzb3VyY2UiXSwic291cmNlcyI6WyJjcmVhdGVBc3NpZ25lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNJdGVyYXRlZUNhbGwgZnJvbSAnLi9pc0l0ZXJhdGVlQ2FsbC5qcydcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgYXNzaWduYC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcclxuICByZXR1cm4gKG9iamVjdCwgLi4uc291cmNlcykgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gLTFcclxuICAgIGxldCBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aFxyXG4gICAgbGV0IGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZFxyXG4gICAgY29uc3QgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZFxyXG5cclxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXHJcbiAgICAgIDogdW5kZWZpbmVkXHJcblxyXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xyXG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXJcclxuICAgICAgbGVuZ3RoID0gMVxyXG4gICAgfVxyXG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdClcclxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdXHJcbiAgICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3RcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFzc2lnbmVyXHJcbiJdLCJtYXBwaW5ncyI6InM3R0FlWTtBQUFBLHlGQWZaLE1BQU9BLGVBQWMsS0FBTSxxQkFBcUIsQ0FFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQyxlQUFjLENBQUNDLFFBQVEsQ0FBRSwrQ0FDaEMsTUFBTyxDQUFDQyxNQUFNLENBQUUsR0FBR0MsT0FBTyxHQUFLLHdCQUM3QixHQUFJQyxNQUFLLHlCQUFHLENBQUMsQ0FBQyxFQUNkLEdBQUlDLE9BQU0seUJBQUdGLE9BQU8sQ0FBQ0UsTUFBTSxFQUMzQixHQUFJQyxXQUFVLHlCQUFHRCxNQUFNLENBQUcsQ0FBQyw0QkFBR0YsT0FBTyxDQUFDRSxNQUFNLENBQUcsQ0FBQyxDQUFDLDZCQUFHRSxTQUFTLEdBQzdELEtBQU1DLE1BQUsseUJBQUdILE1BQU0sQ0FBRyxDQUFDLDRCQUFHRixPQUFPLENBQUMsQ0FBQyxDQUFDLDZCQUFHSSxTQUFTLDBCQUVqREQsVUFBVSxDQUFJLDJCQUFBTCxRQUFRLENBQUNJLE1BQU0sQ0FBRyxDQUFDLDhCQUFJLE1BQU9DLFdBQVUsR0FBSyxVQUFVLDhCQUNoRUQsTUFBTSxFQUFFLENBQUVDLFVBQVUsOEJBQ3JCQyxTQUFTLHlCQUViLEdBQUksMkJBQUFDLEtBQUssOEJBQUlULGNBQWMsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUVLLEtBQUssQ0FBQyxFQUFFLGtEQUMxREYsVUFBVSxDQUFHRCxNQUFNLENBQUcsQ0FBQyw0QkFBR0UsU0FBUyw2QkFBR0QsVUFBVSx5QkFDaERELE1BQU0sQ0FBRyxDQUFDLENBQ1osQ0FBQyx1REFDREgsTUFBTSxDQUFHTyxNQUFNLENBQUNQLE1BQU0sQ0FBQyx5QkFDdkIsTUFBTyxFQUFFRSxLQUFLLENBQUdDLE1BQU0sQ0FBRSxDQUN2QixLQUFNSyxPQUFNLDBCQUFHUCxPQUFPLENBQUNDLEtBQUssQ0FBQywwQkFDN0IsR0FBSU0sTUFBTSxDQUFFLG1EQUNWVCxRQUFRLENBQUNDLE1BQU0sQ0FBRVEsTUFBTSxDQUFFTixLQUFLLENBQUVFLFVBQVUsQ0FBQyxDQUM3QyxDQUFDLGdDQUNILENBQUMsd0JBQ0QsTUFBT0osT0FBTSxDQUNmLENBQUMsQ0FDSCxDQUVBLGNBQWVGLGVBQWMifQ==