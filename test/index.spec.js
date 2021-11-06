const { describe, it } = require("mocha");
const assert = require("assert");
const { isOdd } = require("..");

describe("package-publish", function () {
  describe("isOdd", function () {
    it("should return true for odd number", function () {
      const expected = true;
      const actual = isOdd(1);

      assert.equal(actual, expected);
    });
    it("should return false for even number", function () {
      const expected = false;
      const actual = isOdd(2);

      assert.equal(actual, expected);
    });
    it("should work for -ve numbers", function () {
      const expected = false;
      const actual = isOdd(-2);

      assert.equal(actual, expected);
    });
    it("should throw error if input is invalid", function () {
      assert.throws(() => isOdd("string"));
      assert.throws(() => isOdd(Buffer.alloc(2, 0x1111)));
      assert.throws(() => isOdd(true));
    });
  });
});
