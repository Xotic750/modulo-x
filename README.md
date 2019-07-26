<a
  href="https://travis-ci.org/Xotic750/modulo-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/modulo-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/modulo-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/modulo-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/modulo-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/modulo-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/modulo-x"
  title="npm version">
<img src="https://badge.fury.io/js/modulo-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/modulo-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/modulo-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/modulo-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/modulo-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_modulo-x"></a>

## modulo-x

modulo - floored division implementation.

<a name="exp_module_modulo-x--module.exports"></a>

### `module.exports(dividend, divisor)` ⇒ <code>number</code> ⏏

The notation “x modulo y” (y must be finite and nonzero) computes a value k
of the same sign as y (or zero) such that abs(k) < abs(y) and x-k = q × y
for some integer q.

Donald Knuth described floored division where the quotient is defined by
the floor function q = ⌊a/n⌋ and thus according to equation the remainder
would have the same sign as the divisor. Due to the floor function, the
quotient is always rounded downwards, even if it is already negative.

**Kind**: Exported function  
**Returns**: <code>number</code> - The integer remainder.  
**See**

- [http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions](http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions)
- [https://en.wikipedia.org/wiki/Modulo_operation](https://en.wikipedia.org/wiki/Modulo_operation)

| Param    | Type                | Description                           |
| -------- | ------------------- | ------------------------------------- |
| dividend | <code>number</code> | The integer to find the remainder of. |
| divisor  | <code>number</code> | The integer to divide by.             |

**Example**

```js
import modulo from 'modulo-x';

console.log(modulo(1, 0x1000000)); // 1
console.log(modulo(-1, 0x1000000)); // 16777215 (2^24-1)
```
