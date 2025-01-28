import { describe, it, test, expect } from "vitest";
import {
  calculateDiscount,
  getCoupons,
  validateUserInput,
} from "../src/core.js";
describe("getCoupons", () => {
  it("should result an array of coupons", () => {
    const result = getCoupons();
    // expect(Array.isArray(result)).toBe(true);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
  });
  it("should return true an array with valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return an array with valid discounts", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});

describe("calculateDiscount", () => {
  // Positive test
  // * It ensures that out application works correctly under normal conditions.
  // * Calling with valid input
  it("should return discounted price if given valid code", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });

  // Negative test
  // * It checks how well our applications handles unexpected or incorrect input.
  // * Calling with invalid input
  it("should handle non-numberic price", () => {
    expect(calculateDiscount("10", "SAVE10")).toMatch(/Invalid/i);
  });
  it("should handle negative price", () => {
    expect(calculateDiscount(-10, "SAVE10")).toMatch(/Invalid/i);
  });

  it("should handle non-string discount code", () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });

  it("should handle invalid discount code", () => {
    expect(calculateDiscount(10, "INVALID")).toBe(10);
  });
});

describe("validateUserInput", () => {
  test("should return succes if given valid input", () => {
    expect(validateUserInput("Demis", 21)).toMatch(/success/i);
  });

  test("should return an error if username is not string", () => {
    expect(validateUserInput(123, 21)).toMatch(/Invalid/i);
  });
  test("should return an error if username less than 3 characters", () => {
    expect(validateUserInput("ab", 21)).toMatch(/Invalid/i);
  });
  test("should return an error if username longer than 255 characters", () => {
    expect(validateUserInput("ab".repeat(255), 21)).toMatch(/Invalid/i);
  });

  test("should return an error if age is not a number", () => {
    expect(validateUserInput("Demis", "21")).toMatch(/Invalid/i);
  });
  test("should return an error if age less than 18", () => {
    expect(validateUserInput("Demis", 17)).toMatch(/Invalid/i);
  });
  test("should return an error if age greater than 100", () => {
    expect(validateUserInput("Demis", 101)).toMatch(/Invalid/i);
  });

  test("should return an error if username and age are invalid", () => {
    expect(validateUserInput("", 0)).toMatch(/Invalid username/i);
    expect(validateUserInput("", 0)).toMatch(/Invalid age/i);
  });
});
