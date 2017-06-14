'use strict';

var modulo;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  modulo = require('../../index.js');
} else {
  modulo = returnExports;
}

describe('modulo', function () {
  it('is a function', function () {
    expect(typeof modulo).toBe('function');
  });

  it('a should be 1', function () {
    expect(modulo(1, 0x1000000)).toBe(1);
  });

  it('-1 is the maximum value', function () {
    expect(modulo(-1, 0x1000000)).toBe(16777215);
  });
});
