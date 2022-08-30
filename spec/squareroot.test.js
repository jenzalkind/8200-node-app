const sut = require('../squareroot.js');
describe("tsting", () => {
  describe("j", () => {
    test("should return 5", () => {
      expect(sut.findSqrt(25)).toBe(5);
    });
  });
});