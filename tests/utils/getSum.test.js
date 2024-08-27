import { describe, test, it, expect } from "vitest";
import { getSum } from "../../src/utils/getSum";

describe("getSum", () => {
  test("should return NaN if arg is not a number.", () => {
    const sum = getSum(undefined);
    expect(sum).toBeNaN();
  });

  test("should return 1 if arg is 1.", () => {
    const sum = getSum(1);
    expect(sum).toBe(1);
  });

  test("should return 6 if arg is (1,2,3).", () => {
    const sum = getSum(1, 2, 3);
    expect(sum).toBe(6);
  });
  test("should return -4 if arg is (1,-2,-3).", () => {
    const sum = getSum(1, -2, -3);
    expect(sum).toBe(-4);
  });
});
