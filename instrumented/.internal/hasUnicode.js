function cov_1tpgrofz8p(){var path="C:\\git\\KalleEtRoosa\\src\\.internal\\hasUnicode.js";var hash="6031c62d812ca83c41e0f1c1fb7f220152be57fe";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\.internal\\hasUnicode.js",statementMap:{"0":{start:{line:2,column:22},end:{line:2,column:39}},"1":{start:{line:3,column:26},end:{line:3,column:43}},"2":{start:{line:4,column:30},end:{line:4,column:47}},"3":{start:{line:5,column:28},end:{line:5,column:45}},"4":{start:{line:6,column:34},end:{line:6,column:51}},"5":{start:{line:7,column:36},end:{line:7,column:53}},"6":{start:{line:8,column:21},end:{line:8,column:142}},"7":{start:{line:9,column:19},end:{line:9,column:35}},"8":{start:{line:12,column:14},end:{line:12,column:23}},"9":{start:{line:15,column:21},end:{line:15,column:85}},"10":{start:{line:25,column:2},end:{line:25,column:34}}},fnMap:{"0":{name:"hasUnicode",decl:{start:{line:24,column:9},end:{line:24,column:19}},loc:{start:{line:24,column:28},end:{line:26,column:1}},line:24}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6031c62d812ca83c41e0f1c1fb7f220152be57fe"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1tpgrofz8p=function(){return actualCoverage;};}return actualCoverage;}cov_1tpgrofz8p();/** Used to compose unicode character classes. */const rsAstralRange=(cov_1tpgrofz8p().s[0]++,'\\ud800-\\udfff');const rsComboMarksRange=(cov_1tpgrofz8p().s[1]++,'\\u0300-\\u036f');const reComboHalfMarksRange=(cov_1tpgrofz8p().s[2]++,'\\ufe20-\\ufe2f');const rsComboSymbolsRange=(cov_1tpgrofz8p().s[3]++,'\\u20d0-\\u20ff');const rsComboMarksExtendedRange=(cov_1tpgrofz8p().s[4]++,'\\u1ab0-\\u1aff');const rsComboMarksSupplementRange=(cov_1tpgrofz8p().s[5]++,'\\u1dc0-\\u1dff');const rsComboRange=(cov_1tpgrofz8p().s[6]++,rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange+rsComboMarksExtendedRange+rsComboMarksSupplementRange);const rsVarRange=(cov_1tpgrofz8p().s[7]++,'\\ufe0e\\ufe0f');/** Used to compose unicode capture groups. */const rsZWJ=(cov_1tpgrofz8p().s[8]++,'\\u200d');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */const reHasUnicode=(cov_1tpgrofz8p().s[9]++,RegExp(`[${rsZWJ+rsAstralRange+rsComboRange+rsVarRange}]`));/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */function hasUnicode(string){cov_1tpgrofz8p().f[0]++;cov_1tpgrofz8p().s[10]++;return reHasUnicode.test(string);}export default hasUnicode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyc0FzdHJhbFJhbmdlIiwicnNDb21ib01hcmtzUmFuZ2UiLCJyZUNvbWJvSGFsZk1hcmtzUmFuZ2UiLCJyc0NvbWJvU3ltYm9sc1JhbmdlIiwicnNDb21ib01hcmtzRXh0ZW5kZWRSYW5nZSIsInJzQ29tYm9NYXJrc1N1cHBsZW1lbnRSYW5nZSIsInJzQ29tYm9SYW5nZSIsInJzVmFyUmFuZ2UiLCJyc1pXSiIsInJlSGFzVW5pY29kZSIsIlJlZ0V4cCIsImhhc1VuaWNvZGUiLCJzdHJpbmciLCJ0ZXN0Il0sInNvdXJjZXMiOlsiaGFzVW5pY29kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXHJcbmNvbnN0IHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZidcclxuY29uc3QgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZidcclxuY29uc3QgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnXHJcbmNvbnN0IHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZidcclxuY29uc3QgcnNDb21ib01hcmtzRXh0ZW5kZWRSYW5nZSA9ICdcXFxcdTFhYjAtXFxcXHUxYWZmJ1xyXG5jb25zdCByc0NvbWJvTWFya3NTdXBwbGVtZW50UmFuZ2UgPSAnXFxcXHUxZGMwLVxcXFx1MWRmZidcclxuY29uc3QgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlICsgcnNDb21ib01hcmtzRXh0ZW5kZWRSYW5nZSArIHJzQ29tYm9NYXJrc1N1cHBsZW1lbnRSYW5nZVxyXG5jb25zdCByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZidcclxuXHJcbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cclxuY29uc3QgcnNaV0ogPSAnXFxcXHUyMDBkJ1xyXG5cclxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXHJcbmNvbnN0IHJlSGFzVW5pY29kZSA9IFJlZ0V4cChgWyR7cnNaV0ogKyByc0FzdHJhbFJhbmdlICsgcnNDb21ib1JhbmdlICsgcnNWYXJSYW5nZX1dYClcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xyXG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhc1VuaWNvZGVcclxuIl0sIm1hcHBpbmdzIjoicTRDQWVZO0FBQUEsMkZBZlosaURBQ0EsS0FBTUEsY0FBYSwwQkFBRyxpQkFBaUIsRUFDdkMsS0FBTUMsa0JBQWlCLDBCQUFHLGlCQUFpQixFQUMzQyxLQUFNQyxzQkFBcUIsMEJBQUcsaUJBQWlCLEVBQy9DLEtBQU1DLG9CQUFtQiwwQkFBRyxpQkFBaUIsRUFDN0MsS0FBTUMsMEJBQXlCLDBCQUFHLGlCQUFpQixFQUNuRCxLQUFNQyw0QkFBMkIsMEJBQUcsaUJBQWlCLEVBQ3JELEtBQU1DLGFBQVksMEJBQUdMLGlCQUFpQixDQUFHQyxxQkFBcUIsQ0FBR0MsbUJBQW1CLENBQUdDLHlCQUF5QixDQUFHQywyQkFBMkIsRUFDOUksS0FBTUUsV0FBVSwwQkFBRyxnQkFBZ0IsRUFFbkMsOENBQ0EsS0FBTUMsTUFBSywwQkFBRyxTQUFTLEVBRXZCLHNKQUNBLEtBQU1DLGFBQVksMEJBQUdDLE1BQU0sQ0FBRSxJQUFHRixLQUFLLENBQUdSLGFBQWEsQ0FBR00sWUFBWSxDQUFHQyxVQUFXLEdBQUUsQ0FBQyxFQUVyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVNJLFdBQVUsQ0FBQ0MsTUFBTSxDQUFFLGtEQUMxQixNQUFPSCxhQUFZLENBQUNJLElBQUksQ0FBQ0QsTUFBTSxDQUFDLENBQ2xDLENBRUEsY0FBZUQsV0FBVSJ9