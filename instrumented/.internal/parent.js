function cov_s0asxhpsb(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\parent.js";var hash="d6f5ddd7fdbe4e314ac109c539d54910146064c6";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\parent.js",statementMap:{"0":{start:{line:13,column:2},end:{line:13,column:71}}},fnMap:{"0":{name:"parent",decl:{start:{line:12,column:9},end:{line:12,column:15}},loc:{start:{line:12,column:30},end:{line:14,column:1}},line:12}},branchMap:{"0":{loc:{start:{line:13,column:9},end:{line:13,column:71}},type:"cond-expr",locations:[{start:{line:13,column:27},end:{line:13,column:33}},{start:{line:13,column:36},end:{line:13,column:71}}],line:13}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d6f5ddd7fdbe4e314ac109c539d54910146064c6"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_s0asxhpsb=function(){return actualCoverage;};}return actualCoverage;}cov_s0asxhpsb();import baseGet from'./baseGet.js';import slice from'../slice.js';/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */function parent(object,path){cov_s0asxhpsb().f[0]++;cov_s0asxhpsb().s[0]++;return path.length<2?(cov_s0asxhpsb().b[0][0]++,object):(cov_s0asxhpsb().b[0][1]++,baseGet(object,slice(path,0,-1)));}export default parent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlR2V0Iiwic2xpY2UiLCJwYXJlbnQiLCJvYmplY3QiLCJwYXRoIiwibGVuZ3RoIl0sInNvdXJjZXMiOlsicGFyZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlR2V0IGZyb20gJy4vYmFzZUdldC5qcydcclxuaW1wb3J0IHNsaWNlIGZyb20gJy4uL3NsaWNlLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIHBhcmVudCB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cclxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBUaGUgcGF0aCB0byBnZXQgdGhlIHBhcmVudCB2YWx1ZSBvZi5cclxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHBhcmVudCB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIHBhcmVudChvYmplY3QsIHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5sZW5ndGggPCAyID8gb2JqZWN0IDogYmFzZUdldChvYmplY3QsIHNsaWNlKHBhdGgsIDAsIC0xKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFyZW50XHJcbiJdLCJtYXBwaW5ncyI6IjIrQkFlWTtBQUFBLHlGQWZaLE1BQU9BLFFBQU8sS0FBTSxjQUFjLENBQ2xDLE1BQU9DLE1BQUssS0FBTSxhQUFhLENBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQyxPQUFNLENBQUNDLE1BQU0sQ0FBRUMsSUFBSSxDQUFFLCtDQUM1QixNQUFPQSxLQUFJLENBQUNDLE1BQU0sQ0FBRyxDQUFDLDRCQUFHRixNQUFNLDZCQUFHSCxPQUFPLENBQUNHLE1BQU0sQ0FBRUYsS0FBSyxDQUFDRyxJQUFJLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdkUsQ0FFQSxjQUFlRixPQUFNIn0=