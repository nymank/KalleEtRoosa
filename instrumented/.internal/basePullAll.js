function cov_14bu0h34xd(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\basePullAll.js";var hash="8a4a79b8d2118925bd204844cf48e1811a7103fd";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\basePullAll.js",statementMap:{"0":{start:{line:17,column:18},end:{line:17,column:60}},"1":{start:{line:18,column:17},end:{line:18,column:30}},"2":{start:{line:20,column:14},end:{line:20,column:16}},"3":{start:{line:21,column:13},end:{line:21,column:18}},"4":{start:{line:23,column:2},end:{line:25,column:3}},"5":{start:{line:24,column:4},end:{line:24,column:30}},"6":{start:{line:26,column:2},end:{line:28,column:3}},"7":{start:{line:27,column:4},end:{line:27,column:49}},"8":{start:{line:27,column:33},end:{line:27,column:48}},"9":{start:{line:29,column:2},end:{line:40,column:3}},"10":{start:{line:30,column:20},end:{line:30,column:21}},"11":{start:{line:31,column:18},end:{line:31,column:31}},"12":{start:{line:32,column:21},end:{line:32,column:55}},"13":{start:{line:34,column:4},end:{line:39,column:5}},"14":{start:{line:35,column:6},end:{line:37,column:7}},"15":{start:{line:36,column:8},end:{line:36,column:33}},"16":{start:{line:38,column:6},end:{line:38,column:32}},"17":{start:{line:41,column:2},end:{line:41,column:14}}},fnMap:{"0":{name:"basePullAll",decl:{start:{line:16,column:9},end:{line:16,column:20}},loc:{start:{line:16,column:58},end:{line:42,column:1}},line:16},"1":{name:"(anonymous_1)",decl:{start:{line:27,column:22},end:{line:27,column:23}},loc:{start:{line:27,column:33},end:{line:27,column:48}},line:27}},branchMap:{"0":{loc:{start:{line:17,column:18},end:{line:17,column:60}},type:"cond-expr",locations:[{start:{line:17,column:31},end:{line:17,column:46}},{start:{line:17,column:49},end:{line:17,column:60}}],line:17},"1":{loc:{start:{line:23,column:2},end:{line:25,column:3}},type:"if",locations:[{start:{line:23,column:2},end:{line:25,column:3}},{start:{line:23,column:2},end:{line:25,column:3}}],line:23},"2":{loc:{start:{line:26,column:2},end:{line:28,column:3}},type:"if",locations:[{start:{line:26,column:2},end:{line:28,column:3}},{start:{line:26,column:2},end:{line:28,column:3}}],line:26},"3":{loc:{start:{line:32,column:21},end:{line:32,column:55}},type:"cond-expr",locations:[{start:{line:32,column:32},end:{line:32,column:47}},{start:{line:32,column:50},end:{line:32,column:55}}],line:32},"4":{loc:{start:{line:35,column:6},end:{line:37,column:7}},type:"if",locations:[{start:{line:35,column:6},end:{line:37,column:7}},{start:{line:35,column:6},end:{line:37,column:7}}],line:35}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8a4a79b8d2118925bd204844cf48e1811a7103fd"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_14bu0h34xd=function(){return actualCoverage;};}return actualCoverage;}cov_14bu0h34xd();import map from'../map.js';import baseIndexOf from'./baseIndexOf.js';import baseIndexOfWith from'./baseIndexOfWith.js';import copyArray from'./copyArray.js';/**
 * The base implementation of `pullAllBy`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */function basePullAll(array,values,iteratee,comparator){cov_14bu0h34xd().f[0]++;const indexOf=(cov_14bu0h34xd().s[0]++,comparator?(cov_14bu0h34xd().b[0][0]++,baseIndexOfWith):(cov_14bu0h34xd().b[0][1]++,baseIndexOf));const length=(cov_14bu0h34xd().s[1]++,values.length);let index=(cov_14bu0h34xd().s[2]++,-1);let seen=(cov_14bu0h34xd().s[3]++,array);cov_14bu0h34xd().s[4]++;if(array===values){cov_14bu0h34xd().b[1][0]++;cov_14bu0h34xd().s[5]++;values=copyArray(values);}else{cov_14bu0h34xd().b[1][1]++;}cov_14bu0h34xd().s[6]++;if(iteratee){cov_14bu0h34xd().b[2][0]++;cov_14bu0h34xd().s[7]++;seen=map(array,value=>{cov_14bu0h34xd().f[1]++;cov_14bu0h34xd().s[8]++;return iteratee(value);});}else{cov_14bu0h34xd().b[2][1]++;}cov_14bu0h34xd().s[9]++;while(++index<length){let fromIndex=(cov_14bu0h34xd().s[10]++,0);const value=(cov_14bu0h34xd().s[11]++,values[index]);const computed=(cov_14bu0h34xd().s[12]++,iteratee?(cov_14bu0h34xd().b[3][0]++,iteratee(value)):(cov_14bu0h34xd().b[3][1]++,value));cov_14bu0h34xd().s[13]++;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){cov_14bu0h34xd().s[14]++;if(seen!==array){cov_14bu0h34xd().b[4][0]++;cov_14bu0h34xd().s[15]++;seen.splice(fromIndex,1);}else{cov_14bu0h34xd().b[4][1]++;}cov_14bu0h34xd().s[16]++;array.splice(fromIndex,1);}}cov_14bu0h34xd().s[17]++;return array;}export default basePullAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYXAiLCJiYXNlSW5kZXhPZiIsImJhc2VJbmRleE9mV2l0aCIsImNvcHlBcnJheSIsImJhc2VQdWxsQWxsIiwiYXJyYXkiLCJ2YWx1ZXMiLCJpdGVyYXRlZSIsImNvbXBhcmF0b3IiLCJpbmRleE9mIiwibGVuZ3RoIiwiaW5kZXgiLCJzZWVuIiwidmFsdWUiLCJmcm9tSW5kZXgiLCJjb21wdXRlZCIsInNwbGljZSJdLCJzb3VyY2VzIjpbImJhc2VQdWxsQWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXAgZnJvbSAnLi4vbWFwLmpzJ1xyXG5pbXBvcnQgYmFzZUluZGV4T2YgZnJvbSAnLi9iYXNlSW5kZXhPZi5qcydcclxuaW1wb3J0IGJhc2VJbmRleE9mV2l0aCBmcm9tICcuL2Jhc2VJbmRleE9mV2l0aC5qcydcclxuaW1wb3J0IGNvcHlBcnJheSBmcm9tICcuL2NvcHlBcnJheS5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgcHVsbEFsbEJ5YC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cclxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gcmVtb3ZlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlUHVsbEFsbChhcnJheSwgdmFsdWVzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xyXG4gIGNvbnN0IGluZGV4T2YgPSBjb21wYXJhdG9yID8gYmFzZUluZGV4T2ZXaXRoIDogYmFzZUluZGV4T2ZcclxuICBjb25zdCBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXHJcblxyXG4gIGxldCBpbmRleCA9IC0xXHJcbiAgbGV0IHNlZW4gPSBhcnJheVxyXG5cclxuICBpZiAoYXJyYXkgPT09IHZhbHVlcykge1xyXG4gICAgdmFsdWVzID0gY29weUFycmF5KHZhbHVlcylcclxuICB9XHJcbiAgaWYgKGl0ZXJhdGVlKSB7XHJcbiAgICBzZWVuID0gbWFwKGFycmF5LCAodmFsdWUpID0+IGl0ZXJhdGVlKHZhbHVlKSlcclxuICB9XHJcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgIGxldCBmcm9tSW5kZXggPSAwXHJcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpbmRleF1cclxuICAgIGNvbnN0IGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZVxyXG5cclxuICAgIHdoaWxlICgoZnJvbUluZGV4ID0gaW5kZXhPZihzZWVuLCBjb21wdXRlZCwgZnJvbUluZGV4LCBjb21wYXJhdG9yKSkgPiAtMSkge1xyXG4gICAgICBpZiAoc2VlbiAhPT0gYXJyYXkpIHtcclxuICAgICAgICBzZWVuLnNwbGljZShmcm9tSW5kZXgsIDEpXHJcbiAgICAgIH1cclxuICAgICAgYXJyYXkuc3BsaWNlKGZyb21JbmRleCwgMSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGFycmF5XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VQdWxsQWxsXHJcbiJdLCJtYXBwaW5ncyI6Im0rRkFlWTtBQUFBLDJGQWZaLE1BQU9BLElBQUcsS0FBTSxXQUFXLENBQzNCLE1BQU9DLFlBQVcsS0FBTSxrQkFBa0IsQ0FDMUMsTUFBT0MsZ0JBQWUsS0FBTSxzQkFBc0IsQ0FDbEQsTUFBT0MsVUFBUyxLQUFNLGdCQUFnQixDQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNDLFlBQVcsQ0FBQ0MsS0FBSyxDQUFFQyxNQUFNLENBQUVDLFFBQVEsQ0FBRUMsVUFBVSxDQUFFLHlCQUN4RCxLQUFNQyxRQUFPLDBCQUFHRCxVQUFVLDZCQUFHTixlQUFlLDhCQUFHRCxXQUFXLEdBQzFELEtBQU1TLE9BQU0sMEJBQUdKLE1BQU0sQ0FBQ0ksTUFBTSxFQUU1QixHQUFJQyxNQUFLLDBCQUFHLENBQUMsQ0FBQyxFQUNkLEdBQUlDLEtBQUksMEJBQUdQLEtBQUssMEJBRWhCLEdBQUlBLEtBQUssR0FBS0MsTUFBTSxDQUFFLG9EQUNwQkEsTUFBTSxDQUFHSCxTQUFTLENBQUNHLE1BQU0sQ0FBQyxDQUM1QixDQUFDLHlEQUNELEdBQUlDLFFBQVEsQ0FBRSxvREFDWkssSUFBSSxDQUFHWixHQUFHLENBQUNLLEtBQUssQ0FBR1EsS0FBSyxFQUFLLHVEQUFBTixTQUFRLENBQUNNLEtBQUssQ0FBQyxDQUFELENBQUMsQ0FBQyxDQUMvQyxDQUFDLHlEQUNELE1BQU8sRUFBRUYsS0FBSyxDQUFHRCxNQUFNLENBQUUsQ0FDdkIsR0FBSUksVUFBUywyQkFBRyxDQUFDLEVBQ2pCLEtBQU1ELE1BQUssMkJBQUdQLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDLEVBQzNCLEtBQU1JLFNBQVEsMkJBQUdSLFFBQVEsNkJBQUdBLFFBQVEsQ0FBQ00sS0FBSyxDQUFDLDhCQUFHQSxLQUFLLDRCQUVuRCxNQUFPLENBQUNDLFNBQVMsQ0FBR0wsT0FBTyxDQUFDRyxJQUFJLENBQUVHLFFBQVEsQ0FBRUQsU0FBUyxDQUFFTixVQUFVLENBQUMsRUFBSSxDQUFDLENBQUMsQ0FBRSwwQkFDeEUsR0FBSUksSUFBSSxHQUFLUCxLQUFLLENBQUUscURBQ2xCTyxJQUFJLENBQUNJLE1BQU0sQ0FBQ0YsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUMzQixDQUFDLDBEQUNEVCxLQUFLLENBQUNXLE1BQU0sQ0FBQ0YsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUM1QixDQUNGLENBQUMseUJBQ0QsTUFBT1QsTUFBSyxDQUNkLENBRUEsY0FBZUQsWUFBVyJ9