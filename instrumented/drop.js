function cov_1wujhwp79g(){var path="C:\\git\\KalleEtRoosa\\src\\drop.js";var hash="b106eb14acfa656aef975c857e71f3c1935c7a4e";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\drop.js",statementMap:{"0":{start:{line:27,column:17},end:{line:27,column:49}},"1":{start:{line:28,column:2},end:{line:30,column:8}}},fnMap:{"0":{name:"drop",decl:{start:{line:26,column:9},end:{line:26,column:13}},loc:{start:{line:26,column:26},end:{line:31,column:1}},line:26}},branchMap:{"0":{loc:{start:{line:26,column:21},end:{line:26,column:24}},type:"default-arg",locations:[{start:{line:26,column:23},end:{line:26,column:24}}],line:26},"1":{loc:{start:{line:27,column:17},end:{line:27,column:49}},type:"cond-expr",locations:[{start:{line:27,column:33},end:{line:27,column:34}},{start:{line:27,column:37},end:{line:27,column:49}}],line:27},"2":{loc:{start:{line:28,column:9},end:{line:30,column:8}},type:"cond-expr",locations:[{start:{line:29,column:6},end:{line:29,column:52}},{start:{line:30,column:6},end:{line:30,column:8}}],line:28},"3":{loc:{start:{line:29,column:19},end:{line:29,column:43}},type:"cond-expr",locations:[{start:{line:29,column:27},end:{line:29,column:28}},{start:{line:29,column:31},end:{line:29,column:43}}],line:29}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b106eb14acfa656aef975c857e71f3c1935c7a4e"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1wujhwp79g=function(){return actualCoverage;};}return actualCoverage;}cov_1wujhwp79g();import slice from'./slice.js';import toInteger from'./toInteger.js';/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */function drop(array,n=(cov_1wujhwp79g().b[0][0]++,1)){cov_1wujhwp79g().f[0]++;const length=(cov_1wujhwp79g().s[0]++,array==null?(cov_1wujhwp79g().b[1][0]++,0):(cov_1wujhwp79g().b[1][1]++,array.length));cov_1wujhwp79g().s[1]++;return length?(cov_1wujhwp79g().b[2][0]++,slice(array,n<0?(cov_1wujhwp79g().b[3][0]++,0):(cov_1wujhwp79g().b[3][1]++,toInteger(n)),length)):(cov_1wujhwp79g().b[2][1]++,[]);}export default drop;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzbGljZSIsInRvSW50ZWdlciIsImRyb3AiLCJhcnJheSIsIm4iLCJsZW5ndGgiXSwic291cmNlcyI6WyJkcm9wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbGljZSBmcm9tICcuL3NsaWNlLmpzJ1xyXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4vdG9JbnRlZ2VyLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzbGljZSBvZiBgYXJyYXlgIHdpdGggYG5gIGVsZW1lbnRzIGRyb3BwZWQgZnJvbSB0aGUgYmVnaW5uaW5nLlxyXG4gKlxyXG4gKiBAc2luY2UgMC41LjBcclxuICogQGNhdGVnb3J5IEFycmF5XHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gZHJvcC5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBkcm9wKFsxLCAyLCAzXSlcclxuICogLy8gPT4gWzIsIDNdXHJcbiAqXHJcbiAqIGRyb3AoWzEsIDIsIDNdLCAyKVxyXG4gKiAvLyA9PiBbM11cclxuICpcclxuICogZHJvcChbMSwgMiwgM10sIDUpXHJcbiAqIC8vID0+IFtdXHJcbiAqXHJcbiAqIGRyb3AoWzEsIDIsIDNdLCAwKVxyXG4gKiAvLyA9PiBbMSwgMiwgM11cclxuICovXHJcbmZ1bmN0aW9uIGRyb3AoYXJyYXksIG49MSkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoXHJcbiAgcmV0dXJuIGxlbmd0aFxyXG4gICAgPyBzbGljZShhcnJheSwgbiA8IDAgPyAwIDogdG9JbnRlZ2VyKG4pLCBsZW5ndGgpXHJcbiAgICA6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyb3BcclxuIl0sIm1hcHBpbmdzIjoib2xEQWVZO0FBQUEsMkZBZlosTUFBT0EsTUFBSyxLQUFNLFlBQVksQ0FDOUIsTUFBT0MsVUFBUyxLQUFNLGdCQUFnQixDQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNDLEtBQUksQ0FBQ0MsS0FBSyxDQUFFQyxDQUFDLDZCQUFDLENBQUMsRUFBRSx5QkFDeEIsS0FBTUMsT0FBTSwwQkFBR0YsS0FBSyxFQUFJLElBQUksNkJBQUcsQ0FBQyw4QkFBR0EsS0FBSyxDQUFDRSxNQUFNLDJCQUMvQyxNQUFPQSxPQUFNLDZCQUNUTCxLQUFLLENBQUNHLEtBQUssQ0FBRUMsQ0FBQyxDQUFHLENBQUMsNkJBQUcsQ0FBQyw4QkFBR0gsU0FBUyxDQUFDRyxDQUFDLENBQUMsRUFBRUMsTUFBTSxDQUFDLDhCQUM5QyxFQUFFLEVBQ1IsQ0FFQSxjQUFlSCxLQUFJIn0=