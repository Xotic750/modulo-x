<a name="module_module-x"></a>

## module-x
<a href="https://travis-ci.org/Xotic750/module-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/module-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/module-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/module-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/module-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/module-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/module-x" title="npm version">
<img src="https://badge.fury.io/js/module-x.svg"
alt="npm version" height="18">
</a>

modulo module.

Requires ES3 or above.

**Version**: 1.0.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_module-x--module.exports"></a>

### `module.exports` ⇒ <code>number</code> ⏏
The notation “x modulo y” (y must be finite and nonzero) computes a value k
of the same sign as y (or zero) such that abs(k) < abs(y) and x-k = q × y
for some integer q.

**Kind**: Exported member  
**Returns**: <code>number</code> - The  integer remainder.  
**See**

- [http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions](http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions)
- [https://en.wikipedia.org/wiki/Modulo_operation](https://en.wikipedia.org/wiki/Modulo_operation)


| Param | Type | Description |
| --- | --- | --- |
| dividend | <code>number</code> | The integer to find the remainder of. |
| divisor | <code>number</code> | The integer to divide by. |

**Example**  
```js
var modulo = require('modulo-x');
modulo(1, 0x1000000); // 1
modulo(-1, 0x1000000); // 1
```
