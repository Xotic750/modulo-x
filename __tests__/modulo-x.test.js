import modulo from '../src/modulo-x';

describe('modulo', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof modulo).toBe('function');
  });

  it('a should be 1', function() {
    expect.assertions(1);
    expect(modulo(1, 0x1000000)).toBe(1);
  });

  it('-1 is the maximum value', function() {
    expect.assertions(1);
    expect(modulo(-1, 0x1000000)).toBe(16777215);
  });
});
