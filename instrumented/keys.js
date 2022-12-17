function cov_2qlgpa80of(){var path="C:\\git\\KalleEtRoosa\\src\\keys.js";var hash="5dd9d87ebdcc3dcb99720f0543c66b3026d3cff1";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\git\\KalleEtRoosa\\src\\keys.js",statementMap:{"0":{start:{line:32,column:2},end:{line:34,column:33}}},fnMap:{"0":{name:"keys",decl:{start:{line:31,column:9},end:{line:31,column:13}},loc:{start:{line:31,column:22},end:{line:35,column:1}},line:31}},branchMap:{"0":{loc:{start:{line:32,column:9},end:{line:34,column:33}},type:"cond-expr",locations:[{start:{line:33,column:6},end:{line:33,column:27}},{start:{line:34,column:6},end:{line:34,column:33}}],line:32}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5dd9d87ebdcc3dcb99720f0543c66b3026d3cff1"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2qlgpa80of=function(){return actualCoverage;};}return actualCoverage;}cov_2qlgpa80of();import arrayLikeKeys from'./.internal/arrayLikeKeys.js';import isArrayLike from'./isArrayLike.js';/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @see values, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 */function keys(object){cov_2qlgpa80of().f[0]++;cov_2qlgpa80of().s[0]++;return isArrayLike(object)?(cov_2qlgpa80of().b[0][0]++,arrayLikeKeys(object)):(cov_2qlgpa80of().b[0][1]++,Object.keys(Object(object)));}export default keys;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhcnJheUxpa2VLZXlzIiwiaXNBcnJheUxpa2UiLCJrZXlzIiwib2JqZWN0IiwiT2JqZWN0Il0sInNvdXJjZXMiOlsia2V5cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlMaWtlS2V5cyBmcm9tICcuLy5pbnRlcm5hbC9hcnJheUxpa2VLZXlzLmpzJ1xyXG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcydcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cclxuICpcclxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcclxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxyXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAc2luY2UgMC4xLjBcclxuICogQGNhdGVnb3J5IE9iamVjdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXHJcbiAqIEBzZWUgdmFsdWVzLCB2YWx1ZXNJblxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBmdW5jdGlvbiBGb28oKSB7XHJcbiAqICAgdGhpcy5hID0gMVxyXG4gKiAgIHRoaXMuYiA9IDJcclxuICogfVxyXG4gKlxyXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzXHJcbiAqXHJcbiAqIGtleXMobmV3IEZvbylcclxuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxyXG4gKlxyXG4gKiBrZXlzKCdoaScpXHJcbiAqIC8vID0+IFsnMCcsICcxJ11cclxuICovXHJcbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XHJcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdClcclxuICAgID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpXHJcbiAgICA6IE9iamVjdC5rZXlzKE9iamVjdChvYmplY3QpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBrZXlzXHJcbiJdLCJtYXBwaW5ncyI6Ijg4QkFlWTtBQUFBLDJGQWZaLE1BQU9BLGNBQWEsS0FBTSw4QkFBOEIsQ0FDeEQsTUFBT0MsWUFBVyxLQUFNLGtCQUFrQixDQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQyxLQUFJLENBQUNDLE1BQU0sQ0FBRSxpREFDcEIsTUFBT0YsWUFBVyxDQUFDRSxNQUFNLENBQUMsNkJBQ3RCSCxhQUFhLENBQUNHLE1BQU0sQ0FBQyw4QkFDckJDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDRSxNQUFNLENBQUNELE1BQU0sQ0FBQyxDQUFDLEVBQ2pDLENBRUEsY0FBZUQsS0FBSSJ9