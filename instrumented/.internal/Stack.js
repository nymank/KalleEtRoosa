function cov_1ynupzetxb(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\Stack.js";var hash="1cfe7f9fe394f8a836dd93996cde9b258e4dba98";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\Stack.js",statementMap:{"0":{start:{line:5,column:25},end:{line:5,column:28}},"1":{start:{line:17,column:17},end:{line:17,column:55}},"2":{start:{line:18,column:4},end:{line:18,column:25}},"3":{start:{line:27,column:4},end:{line:27,column:33}},"4":{start:{line:28,column:4},end:{line:28,column:17}},"5":{start:{line:39,column:17},end:{line:39,column:30}},"6":{start:{line:40,column:19},end:{line:40,column:38}},"7":{start:{line:42,column:4},end:{line:42,column:25}},"8":{start:{line:43,column:4},end:{line:43,column:17}},"9":{start:{line:54,column:4},end:{line:54,column:33}},"10":{start:{line:65,column:4},end:{line:65,column:33}},"11":{start:{line:77,column:15},end:{line:77,column:28}},"12":{start:{line:78,column:4},end:{line:86,column:5}},"13":{start:{line:79,column:20},end:{line:79,column:33}},"14":{start:{line:80,column:6},end:{line:84,column:7}},"15":{start:{line:81,column:8},end:{line:81,column:32}},"16":{start:{line:82,column:8},end:{line:82,column:31}},"17":{start:{line:83,column:8},end:{line:83,column:19}},"18":{start:{line:85,column:6},end:{line:85,column:48}},"19":{start:{line:87,column:4},end:{line:87,column:24}},"20":{start:{line:88,column:4},end:{line:88,column:25}},"21":{start:{line:89,column:4},end:{line:89,column:15}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:16,column:2},end:{line:16,column:3}},loc:{start:{line:16,column:23},end:{line:19,column:3}},line:16},"1":{name:"(anonymous_1)",decl:{start:{line:26,column:2},end:{line:26,column:3}},loc:{start:{line:26,column:10},end:{line:29,column:3}},line:26},"2":{name:"(anonymous_2)",decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:38,column:14},end:{line:44,column:3}},line:38},"3":{name:"(anonymous_3)",decl:{start:{line:53,column:2},end:{line:53,column:3}},loc:{start:{line:53,column:11},end:{line:55,column:3}},line:53},"4":{name:"(anonymous_4)",decl:{start:{line:64,column:2},end:{line:64,column:3}},loc:{start:{line:64,column:11},end:{line:66,column:3}},line:64},"5":{name:"(anonymous_5)",decl:{start:{line:76,column:2},end:{line:76,column:3}},loc:{start:{line:76,column:18},end:{line:90,column:3}},line:76}},branchMap:{"0":{loc:{start:{line:78,column:4},end:{line:86,column:5}},type:"if",locations:[{start:{line:78,column:4},end:{line:86,column:5}},{start:{line:78,column:4},end:{line:86,column:5}}],line:78},"1":{loc:{start:{line:80,column:6},end:{line:84,column:7}},type:"if",locations:[{start:{line:80,column:6},end:{line:84,column:7}},{start:{line:80,column:6},end:{line:84,column:7}}],line:80}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1cfe7f9fe394f8a836dd93996cde9b258e4dba98"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1ynupzetxb=function(){return actualCoverage;};}return actualCoverage;}cov_1ynupzetxb();import ListCache from'./ListCache.js';import MapCache from'./MapCache.js';/** Used as the size to enable large array optimizations. */const LARGE_ARRAY_SIZE=(cov_1ynupzetxb().s[0]++,200);class Stack{/**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */constructor(entries){cov_1ynupzetxb().f[0]++;const data=(cov_1ynupzetxb().s[1]++,this.__data__=new ListCache(entries));cov_1ynupzetxb().s[2]++;this.size=data.size;}/**
   * Removes all key-value entries from the stack.
   *
   * @memberOf Stack
   */clear(){cov_1ynupzetxb().f[1]++;cov_1ynupzetxb().s[3]++;this.__data__=new ListCache();cov_1ynupzetxb().s[4]++;this.size=0;}/**
   * Removes `key` and its value from the stack.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */delete(key){cov_1ynupzetxb().f[2]++;const data=(cov_1ynupzetxb().s[5]++,this.__data__);const result=(cov_1ynupzetxb().s[6]++,data['delete'](key));cov_1ynupzetxb().s[7]++;this.size=data.size;cov_1ynupzetxb().s[8]++;return result;}/**
   * Gets the stack value for `key`.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */get(key){cov_1ynupzetxb().f[3]++;cov_1ynupzetxb().s[9]++;return this.__data__.get(key);}/**
   * Checks if a stack value for `key` exists.
   *
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */has(key){cov_1ynupzetxb().f[4]++;cov_1ynupzetxb().s[10]++;return this.__data__.has(key);}/**
   * Sets the stack `key` to `value`.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */set(key,value){cov_1ynupzetxb().f[5]++;let data=(cov_1ynupzetxb().s[11]++,this.__data__);cov_1ynupzetxb().s[12]++;if(data instanceof ListCache){cov_1ynupzetxb().b[0][0]++;const pairs=(cov_1ynupzetxb().s[13]++,data.__data__);cov_1ynupzetxb().s[14]++;if(pairs.length<LARGE_ARRAY_SIZE-1){cov_1ynupzetxb().b[1][0]++;cov_1ynupzetxb().s[15]++;pairs.push([key,value]);cov_1ynupzetxb().s[16]++;this.size=++data.size;cov_1ynupzetxb().s[17]++;return this;}else{cov_1ynupzetxb().b[1][1]++;}cov_1ynupzetxb().s[18]++;data=this.__data__=new MapCache(pairs);}else{cov_1ynupzetxb().b[0][1]++;}cov_1ynupzetxb().s[19]++;data.set(key,value);cov_1ynupzetxb().s[20]++;this.size=data.size;cov_1ynupzetxb().s[21]++;return this;}}export default Stack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMaXN0Q2FjaGUiLCJNYXBDYWNoZSIsIkxBUkdFX0FSUkFZX1NJWkUiLCJTdGFjayIsImNvbnN0cnVjdG9yIiwiZW50cmllcyIsImRhdGEiLCJfX2RhdGFfXyIsInNpemUiLCJjbGVhciIsImRlbGV0ZSIsImtleSIsInJlc3VsdCIsImdldCIsImhhcyIsInNldCIsInZhbHVlIiwicGFpcnMiLCJsZW5ndGgiLCJwdXNoIl0sInNvdXJjZXMiOlsiU3RhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL0xpc3RDYWNoZS5qcydcclxuaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vTWFwQ2FjaGUuanMnXHJcblxyXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cclxuY29uc3QgTEFSR0VfQVJSQVlfU0laRSA9IDIwMFxyXG5cclxuY2xhc3MgU3RhY2sge1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZW50cmllcykge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpXHJcbiAgICB0aGlzLnNpemUgPSBkYXRhLnNpemVcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxyXG4gICAqXHJcbiAgICogQG1lbWJlck9mIFN0YWNrXHJcbiAgICovXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZVxyXG4gICAgdGhpcy5zaXplID0gMFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxyXG4gICAqXHJcbiAgICogQG1lbWJlck9mIFN0YWNrXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxyXG4gICAqL1xyXG4gIGRlbGV0ZShrZXkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9fZGF0YV9fXHJcbiAgICBjb25zdCByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpXHJcblxyXG4gICAgdGhpcy5zaXplID0gZGF0YS5zaXplXHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyT2YgU3RhY2tcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cclxuICAgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXHJcbiAgICovXHJcbiAgZ2V0KGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyT2YgU3RhY2tcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXHJcbiAgICovXHJcbiAgaGFzKGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyT2YgU3RhY2tcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXHJcbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgc2V0KGtleSwgdmFsdWUpIHtcclxuICAgIGxldCBkYXRhID0gdGhpcy5fX2RhdGFfX1xyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcclxuICAgICAgY29uc3QgcGFpcnMgPSBkYXRhLl9fZGF0YV9fXHJcbiAgICAgIGlmIChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkge1xyXG4gICAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKVxyXG4gICAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgfVxyXG4gICAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycylcclxuICAgIH1cclxuICAgIGRhdGEuc2V0KGtleSwgdmFsdWUpXHJcbiAgICB0aGlzLnNpemUgPSBkYXRhLnNpemVcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFja1xyXG4iXSwibWFwcGluZ3MiOiIwckdBZVk7QUFBQSwyRkFmWixNQUFPQSxVQUFTLEtBQU0sZ0JBQWdCLENBQ3RDLE1BQU9DLFNBQVEsS0FBTSxlQUFlLENBRXBDLDREQUNBLEtBQU1DLGlCQUFnQiwwQkFBRyxHQUFHLEVBRTVCLEtBQU1DLE1BQU0sQ0FFVjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUNFQyxXQUFXLENBQUNDLE9BQU8sQ0FBRSx5QkFDbkIsS0FBTUMsS0FBSSwwQkFBRyxJQUFJLENBQUNDLFFBQVEsQ0FBRyxHQUFJUCxVQUFTLENBQUNLLE9BQU8sQ0FBQywwQkFDbkQsSUFBSSxDQUFDRyxJQUFJLENBQUdGLElBQUksQ0FBQ0UsSUFBSSxDQUN2QixDQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsS0FDRUMsS0FBSyxFQUFHLGlEQUNOLElBQUksQ0FBQ0YsUUFBUSxDQUFHLEdBQUlQLFVBQVMsMkJBQzdCLElBQUksQ0FBQ1EsSUFBSSxDQUFHLENBQUMsQ0FDZixDQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQ0VFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFFLHlCQUNWLEtBQU1MLEtBQUksMEJBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQzFCLEtBQU1LLE9BQU0sMEJBQUdOLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLDBCQUVsQyxJQUFJLENBQUNILElBQUksQ0FBR0YsSUFBSSxDQUFDRSxJQUFJLHlCQUNyQixNQUFPSSxPQUFNLENBQ2YsQ0FFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUNFQyxHQUFHLENBQUNGLEdBQUcsQ0FBRSxpREFDUCxNQUFPLEtBQUksQ0FBQ0osUUFBUSxDQUFDTSxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUMvQixDQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQ0VHLEdBQUcsQ0FBQ0gsR0FBRyxDQUFFLGtEQUNQLE1BQU8sS0FBSSxDQUFDSixRQUFRLENBQUNPLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQy9CLENBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUNFSSxHQUFHLENBQUNKLEdBQUcsQ0FBRUssS0FBSyxDQUFFLHlCQUNkLEdBQUlWLEtBQUksMkJBQUcsSUFBSSxDQUFDQyxRQUFRLDJCQUN4QixHQUFJRCxJQUFJLFdBQVlOLFVBQVMsQ0FBRSw0QkFDN0IsS0FBTWlCLE1BQUssMkJBQUdYLElBQUksQ0FBQ0MsUUFBUSwyQkFDM0IsR0FBSVUsS0FBSyxDQUFDQyxNQUFNLENBQUdoQixnQkFBZ0IsQ0FBRyxDQUFDLENBQUUscURBQ3ZDZSxLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDUixHQUFHLENBQUVLLEtBQUssQ0FBQyxDQUFDLDBCQUN4QixJQUFJLENBQUNSLElBQUksQ0FBRyxFQUFFRixJQUFJLENBQUNFLElBQUksMEJBQ3ZCLE1BQU8sS0FBSSxDQUNiLENBQUMsMERBQ0RGLElBQUksQ0FBRyxJQUFJLENBQUNDLFFBQVEsQ0FBRyxHQUFJTixTQUFRLENBQUNnQixLQUFLLENBQUMsQ0FDNUMsQ0FBQywwREFDRFgsSUFBSSxDQUFDUyxHQUFHLENBQUNKLEdBQUcsQ0FBRUssS0FBSyxDQUFDLDBCQUNwQixJQUFJLENBQUNSLElBQUksQ0FBR0YsSUFBSSxDQUFDRSxJQUFJLDBCQUNyQixNQUFPLEtBQUksQ0FDYixDQUNGLENBRUEsY0FBZUwsTUFBSyJ9