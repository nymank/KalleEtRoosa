function cov_1qfmjhrb5o(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\baseMatches.js";var hash="7ac811d8ecc19d98ea50ae48747a7493d8d29bb7";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\baseMatches.js",statementMap:{"0":{start:{line:13,column:20},end:{line:13,column:40}},"1":{start:{line:14,column:2},end:{line:16,column:3}},"2":{start:{line:15,column:4},end:{line:15,column:68}},"3":{start:{line:17,column:2},end:{line:17,column:80}},"4":{start:{line:17,column:21},end:{line:17,column:80}}},fnMap:{"0":{name:"baseMatches",decl:{start:{line:12,column:9},end:{line:12,column:20}},loc:{start:{line:12,column:29},end:{line:18,column:1}},line:12},"1":{name:"(anonymous_1)",decl:{start:{line:17,column:9},end:{line:17,column:10}},loc:{start:{line:17,column:21},end:{line:17,column:80}},line:17}},branchMap:{"0":{loc:{start:{line:14,column:2},end:{line:16,column:3}},type:"if",locations:[{start:{line:14,column:2},end:{line:16,column:3}},{start:{line:14,column:2},end:{line:16,column:3}}],line:14},"1":{loc:{start:{line:14,column:6},end:{line:14,column:47}},type:"binary-expr",locations:[{start:{line:14,column:6},end:{line:14,column:28}},{start:{line:14,column:32},end:{line:14,column:47}}],line:14},"2":{loc:{start:{line:17,column:21},end:{line:17,column:80}},type:"binary-expr",locations:[{start:{line:17,column:21},end:{line:17,column:38}},{start:{line:17,column:42},end:{line:17,column:80}}],line:17}},s:{"0":0,"1":0,"2":0,"3":0,"4":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7ac811d8ecc19d98ea50ae48747a7493d8d29bb7"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1qfmjhrb5o=function(){return actualCoverage;};}return actualCoverage;}cov_1qfmjhrb5o();import baseIsMatch from'./baseIsMatch.js';import getMatchData from'./getMatchData.js';import matchesStrictComparable from'./matchesStrictComparable.js';/**
 * The base implementation of `matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){cov_1qfmjhrb5o().f[0]++;const matchData=(cov_1qfmjhrb5o().s[0]++,getMatchData(source));cov_1qfmjhrb5o().s[1]++;if((cov_1qfmjhrb5o().b[1][0]++,matchData.length===1)&&(cov_1qfmjhrb5o().b[1][1]++,matchData[0][2])){cov_1qfmjhrb5o().b[0][0]++;cov_1qfmjhrb5o().s[2]++;return matchesStrictComparable(matchData[0][0],matchData[0][1]);}else{cov_1qfmjhrb5o().b[0][1]++;}cov_1qfmjhrb5o().s[3]++;return object=>{cov_1qfmjhrb5o().f[1]++;cov_1qfmjhrb5o().s[4]++;return(cov_1qfmjhrb5o().b[2][0]++,object===source)||(cov_1qfmjhrb5o().b[2][1]++,baseIsMatch(object,source,matchData));};}export default baseMatches;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlSXNNYXRjaCIsImdldE1hdGNoRGF0YSIsIm1hdGNoZXNTdHJpY3RDb21wYXJhYmxlIiwiYmFzZU1hdGNoZXMiLCJzb3VyY2UiLCJtYXRjaERhdGEiLCJsZW5ndGgiLCJvYmplY3QiXSwic291cmNlcyI6WyJiYXNlTWF0Y2hlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZUlzTWF0Y2ggZnJvbSAnLi9iYXNlSXNNYXRjaC5qcydcclxuaW1wb3J0IGdldE1hdGNoRGF0YSBmcm9tICcuL2dldE1hdGNoRGF0YS5qcydcclxuaW1wb3J0IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlIGZyb20gJy4vbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMnXHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYG1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcclxuICBjb25zdCBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKVxyXG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xyXG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKVxyXG4gIH1cclxuICByZXR1cm4gKG9iamVjdCkgPT4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZU1hdGNoZXNcclxuIl0sIm1hcHBpbmdzIjoieXlEQWVZO0FBQUEsMkZBZlosTUFBT0EsWUFBVyxLQUFNLGtCQUFrQixDQUMxQyxNQUFPQyxhQUFZLEtBQU0sbUJBQW1CLENBQzVDLE1BQU9DLHdCQUF1QixLQUFNLDhCQUE4QixDQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNDLFlBQVcsQ0FBQ0MsTUFBTSxDQUFFLHlCQUMzQixLQUFNQyxVQUFTLDBCQUFHSixZQUFZLENBQUNHLE1BQU0sQ0FBQywwQkFDdEMsR0FBSSw0QkFBQUMsU0FBUyxDQUFDQyxNQUFNLEdBQUssQ0FBQywrQkFBSUQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLG9EQUM3QyxNQUFPSCx3QkFBdUIsQ0FBQ0csU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFQSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbEUsQ0FBQyx5REFDRCxNQUFRRSxPQUFNLEVBQUssbUZBQUFBLE1BQU0sR0FBS0gsTUFBTSwrQkFBSUosV0FBVyxDQUFDTyxNQUFNLENBQUVILE1BQU0sQ0FBRUMsU0FBUyxDQUFDLEVBQUQsQ0FBQyxDQUNoRixDQUVBLGNBQWVGLFlBQVcifQ==