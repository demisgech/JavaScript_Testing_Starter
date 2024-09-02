import { describe, test, it, expect } from "vitest";
import { calculateTax } from "../../src/utils/calculateTax";

describe("calculateTax", () => {
  it("should return NaN if arg is not a number", () => {
    const tax = calculateTax();
    expect(tax).toBeNaN();
  });

  it("should return NaN if income is negative.", () => {
    const tax = calculateTax(-20);
    expect(tax).toBeNaN();
  });

  it("should return 18 if income is 120", () => {
    const tax = calculateTax(120);
    expect(tax).toBe(18);
  });

  it("should return 300 if income is 1500 with taxRate 0.2", () => {
    const tax = calculateTax(1500, 0.2);
    expect(tax).toBe(300);
  });
});
