const {floor} = Math;
/**
 * The notation “x modulo y” (y must be finite and nonzero) computes a value k
 * of the same sign as y (or zero) such that abs(k) < abs(y) and x-k = q × y
 * for some integer q.
 *
 * Donald Knuth described floored division where the quotient is defined by
 * the floor function q = ⌊a/n⌋ and thus according to equation the remainder
 * would have the same sign as the divisor. Due to the floor function, the
 * quotient is always rounded downwards, even if it is already negative.
 *
 * @param {number} dividend - The integer to find the remainder of.
 * @param {number} divisor - The integer to divide by.
 * @returns {number} The integer remainder.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions}
 * @see {@link https://en.wikipedia.org/wiki/Modulo_operation}
 */
const modulo = function modulo(dividend, divisor) {
  const remain = dividend % divisor;

  return floor(remain >= 0 ? remain : remain + divisor);
};

export default modulo;
