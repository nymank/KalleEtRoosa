function cov_2nnueqpiou(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\baseSortedUniq.js";var hash="016d9fbef246470acf69439fec09f76fb2ecc3ed";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\baseSortedUniq.js",statementMap:{"0":{start:{line:13,column:14},end:{line:13,column:16}},"1":{start:{line:14,column:17},end:{line:14,column:18}},"2":{start:{line:16,column:21},end:{line:16,column:26}},"3":{start:{line:17,column:17},end:{line:17,column:19}},"4":{start:{line:19,column:2},end:{line:25,column:3}},"5":{start:{line:20,column:18},end:{line:20,column:30}},"6":{start:{line:20,column:43},end:{line:20,column:77}},"7":{start:{line:21,column:4},end:{line:24,column:5}},"8":{start:{line:22,column:6},end:{line:22,column:21}},"9":{start:{line:23,column:6},end:{line:23,column:50}},"10":{start:{line:26,column:2},end:{line:26,column:15}}},fnMap:{"0":{name:"baseSortedUniq",decl:{start:{line:11,column:9},end:{line:11,column:23}},loc:{start:{line:11,column:41},end:{line:27,column:1}},line:11}},branchMap:{"0":{loc:{start:{line:20,column:43},end:{line:20,column:77}},type:"cond-expr",locations:[{start:{line:20,column:54},end:{line:20,column:69}},{start:{line:20,column:72},end:{line:20,column:77}}],line:20},"1":{loc:{start:{line:21,column:4},end:{line:24,column:5}},type:"if",locations:[{start:{line:21,column:4},end:{line:24,column:5}},{start:{line:21,column:4},end:{line:24,column:5}}],line:21},"2":{loc:{start:{line:21,column:8},end:{line:21,column:37}},type:"binary-expr",locations:[{start:{line:21,column:8},end:{line:21,column:14}},{start:{line:21,column:18},end:{line:21,column:37}}],line:21},"3":{loc:{start:{line:23,column:27},end:{line:23,column:50}},type:"cond-expr",locations:[{start:{line:23,column:41},end:{line:23,column:42}},{start:{line:23,column:45},end:{line:23,column:50}}],line:23}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"016d9fbef246470acf69439fec09f76fb2ecc3ed"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2nnueqpiou=function(){return actualCoverage;};}return actualCoverage;}cov_2nnueqpiou();import eq from'../eq.js';/**
 * The base implementation of `sortedUniq` and `sortedUniqBy`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */function baseSortedUniq(array,iteratee){cov_2nnueqpiou().f[0]++;let seen;let index=(cov_2nnueqpiou().s[0]++,-1);let resIndex=(cov_2nnueqpiou().s[1]++,0);const{length}=(cov_2nnueqpiou().s[2]++,array);const result=(cov_2nnueqpiou().s[3]++,[]);cov_2nnueqpiou().s[4]++;while(++index<length){const value=(cov_2nnueqpiou().s[5]++,array[index]),computed=(cov_2nnueqpiou().s[6]++,iteratee?(cov_2nnueqpiou().b[0][0]++,iteratee(value)):(cov_2nnueqpiou().b[0][1]++,value));cov_2nnueqpiou().s[7]++;if((cov_2nnueqpiou().b[2][0]++,!index)||(cov_2nnueqpiou().b[2][1]++,!eq(computed,seen))){cov_2nnueqpiou().b[1][0]++;cov_2nnueqpiou().s[8]++;seen=computed;cov_2nnueqpiou().s[9]++;result[resIndex++]=value===0?(cov_2nnueqpiou().b[3][0]++,0):(cov_2nnueqpiou().b[3][1]++,value);}else{cov_2nnueqpiou().b[1][1]++;}}cov_2nnueqpiou().s[10]++;return result;}export default baseSortedUniq;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlcSIsImJhc2VTb3J0ZWRVbmlxIiwiYXJyYXkiLCJpdGVyYXRlZSIsInNlZW4iLCJpbmRleCIsInJlc0luZGV4IiwibGVuZ3RoIiwicmVzdWx0IiwidmFsdWUiLCJjb21wdXRlZCJdLCJzb3VyY2VzIjpbImJhc2VTb3J0ZWRVbmlxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlcSBmcm9tICcuLi9lcS5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc29ydGVkVW5pcWAgYW5kIGBzb3J0ZWRVbmlxQnlgLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlU29ydGVkVW5pcShhcnJheSwgaXRlcmF0ZWUpIHtcclxuICBsZXQgc2VlblxyXG4gIGxldCBpbmRleCA9IC0xXHJcbiAgbGV0IHJlc0luZGV4ID0gMFxyXG5cclxuICBjb25zdCB7IGxlbmd0aCB9ID0gYXJyYXlcclxuICBjb25zdCByZXN1bHQgPSBbXVxyXG5cclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBhcnJheVtpbmRleF0sIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgaWYgKCFpbmRleCB8fCAhZXEoY29tcHV0ZWQsIHNlZW4pKSB7XHJcbiAgICAgIHNlZW4gPSBjb21wdXRlZFxyXG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VTb3J0ZWRVbmlxXHJcbiJdLCJtYXBwaW5ncyI6Iit0RUFlWTtBQUFBLDJGQWZaLE1BQU9BLEdBQUUsS0FBTSxVQUFVLENBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQyxlQUFjLENBQUNDLEtBQUssQ0FBRUMsUUFBUSxDQUFFLHlCQUN2QyxHQUFJQyxLQUFJLENBQ1IsR0FBSUMsTUFBSywwQkFBRyxDQUFDLENBQUMsRUFDZCxHQUFJQyxTQUFRLDBCQUFHLENBQUMsRUFFaEIsS0FBTSxDQUFFQyxNQUFPLENBQUMsMEJBQUdMLEtBQUssRUFDeEIsS0FBTU0sT0FBTSwwQkFBRyxFQUFFLDBCQUVqQixNQUFPLEVBQUVILEtBQUssQ0FBR0UsTUFBTSxDQUFFLENBQ3ZCLEtBQU1FLE1BQUssMEJBQUdQLEtBQUssQ0FBQ0csS0FBSyxDQUFDLEVBQUVLLFFBQVEsMEJBQUdQLFFBQVEsNkJBQUdBLFFBQVEsQ0FBQ00sS0FBSyxDQUFDLDhCQUFHQSxLQUFLLDJCQUN6RSxHQUFJLDZCQUFDSixLQUFLLCtCQUFJLENBQUNMLEVBQUUsQ0FBQ1UsUUFBUSxDQUFFTixJQUFJLENBQUMsRUFBRSxvREFDakNBLElBQUksQ0FBR00sUUFBUSx5QkFDZkYsTUFBTSxDQUFDRixRQUFRLEVBQUUsQ0FBQyxDQUFHRyxLQUFLLEdBQUssQ0FBQyw2QkFBRyxDQUFDLDhCQUFHQSxLQUFLLEVBQzlDLENBQUMsaUNBQ0gsQ0FBQyx5QkFDRCxNQUFPRCxPQUFNLENBQ2YsQ0FFQSxjQUFlUCxlQUFjIn0=