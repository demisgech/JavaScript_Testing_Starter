import { describe, it, expect } from "vitest";
import { getCoupons } from "../src/core.js";
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
