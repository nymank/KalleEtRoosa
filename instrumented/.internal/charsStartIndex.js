function cov_1v6ipbyxi7(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\charsStartIndex.js";var hash="e7dae6b585ca1e24b8c37eead69a08892a8f5bb7";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\charsStartIndex.js",statementMap:{"0":{start:{line:13,column:14},end:{line:13,column:16}},"1":{start:{line:14,column:17},end:{line:14,column:34}},"2":{start:{line:16,column:2},end:{line:16,column:83}},"3":{start:{line:17,column:2},end:{line:17,column:14}}},fnMap:{"0":{name:"charsStartIndex",decl:{start:{line:12,column:9},end:{line:12,column:24}},loc:{start:{line:12,column:49},end:{line:18,column:1}},line:12}},branchMap:{"0":{loc:{start:{line:16,column:9},end:{line:16,column:79}},type:"binary-expr",locations:[{start:{line:16,column:9},end:{line:16,column:25}},{start:{line:16,column:29},end:{line:16,column:79}}],line:16}},s:{"0":0,"1":0,"2":0,"3":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e7dae6b585ca1e24b8c37eead69a08892a8f5bb7"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1v6ipbyxi7=function(){return actualCoverage;};}return actualCoverage;}cov_1v6ipbyxi7();import baseIndexOf from'./baseIndexOf.js';/**
 * Used by `trim` and `trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */function charsStartIndex(strSymbols,chrSymbols){cov_1v6ipbyxi7().f[0]++;let index=(cov_1v6ipbyxi7().s[0]++,-1);const length=(cov_1v6ipbyxi7().s[1]++,strSymbols.length);cov_1v6ipbyxi7().s[2]++;while((cov_1v6ipbyxi7().b[0][0]++,++index<length)&&(cov_1v6ipbyxi7().b[0][1]++,baseIndexOf(chrSymbols,strSymbols[index],0)>-1)){}cov_1v6ipbyxi7().s[3]++;return index;}export default charsStartIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlSW5kZXhPZiIsImNoYXJzU3RhcnRJbmRleCIsInN0clN5bWJvbHMiLCJjaHJTeW1ib2xzIiwiaW5kZXgiLCJsZW5ndGgiXSwic291cmNlcyI6WyJjaGFyc1N0YXJ0SW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VJbmRleE9mIGZyb20gJy4vYmFzZUluZGV4T2YuanMnXHJcblxyXG4vKipcclxuICogVXNlZCBieSBgdHJpbWAgYW5kIGB0cmltU3RhcnRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHN0cmluZyBzeW1ib2xcclxuICogdGhhdCBpcyBub3QgZm91bmQgaW4gdGhlIGNoYXJhY3RlciBzeW1ib2xzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBzdHJTeW1ib2xzIFRoZSBzdHJpbmcgc3ltYm9scyB0byBpbnNwZWN0LlxyXG4gKiBAcGFyYW0ge0FycmF5fSBjaHJTeW1ib2xzIFRoZSBjaGFyYWN0ZXIgc3ltYm9scyB0byBmaW5kLlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdW5tYXRjaGVkIHN0cmluZyBzeW1ib2wuXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGFyc1N0YXJ0SW5kZXgoc3RyU3ltYm9scywgY2hyU3ltYm9scykge1xyXG4gIGxldCBpbmRleCA9IC0xXHJcbiAgY29uc3QgbGVuZ3RoID0gc3RyU3ltYm9scy5sZW5ndGhcclxuXHJcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgYmFzZUluZGV4T2YoY2hyU3ltYm9scywgc3RyU3ltYm9sc1tpbmRleF0sIDApID4gLTEpIHt9XHJcbiAgcmV0dXJuIGluZGV4XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXJzU3RhcnRJbmRleFxyXG4iXSwibWFwcGluZ3MiOiJpc0NBZVk7QUFBQSwyRkFmWixNQUFPQSxZQUFXLEtBQU0sa0JBQWtCLENBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNDLGdCQUFlLENBQUNDLFVBQVUsQ0FBRUMsVUFBVSxDQUFFLHlCQUMvQyxHQUFJQyxNQUFLLDBCQUFHLENBQUMsQ0FBQyxFQUNkLEtBQU1DLE9BQU0sMEJBQUdILFVBQVUsQ0FBQ0csTUFBTSwwQkFFaEMsTUFBTyw4QkFBRUQsS0FBSyxDQUFHQyxNQUFNLCtCQUFJTCxXQUFXLENBQUNHLFVBQVUsQ0FBRUQsVUFBVSxDQUFDRSxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsd0JBQ2pGLE1BQU9BLE1BQUssQ0FDZCxDQUVBLGNBQWVILGdCQUFlIn0=