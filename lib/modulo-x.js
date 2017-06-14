(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/modulo-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/modulo-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/modulo-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/modulo-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/modulo-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/modulo-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/modulo-x" title="npm version">
 * <img src="https://badge.fury.io/js/modulo-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * modulo module.
 *
 * Requires ES3 or above.
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module modulo-x
 */

'use strict';

var modulo = function (dividend, divisor) {
  var remain = dividend % divisor;
  return Math.floor(remain >= 0 ? remain : remain + divisor);
};

/**
 * The notation “x modulo y” (y must be finite and nonzero) computes a value k
 * of the same sign as y (or zero) such that abs(k) < abs(y) and x-k = q × y
 * for some integer q.
 *
 * @param {number} dividend The integer to find the remainder of.
 * @param {number} divisor The integer to divide by.
 * @return {number} The  integer remainder.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-algorithm-conventions}
 * @see {@link https://en.wikipedia.org/wiki/Modulo_operation}
 * @example
 * var modulo = require('modulo-x');
 * modulo(1, 0x1000000); // 1
 * modulo(-1, 0x1000000); // 16777215 (2^24-1)
 */
module.exports = modulo;

},{}]},{},[1])(1)
});