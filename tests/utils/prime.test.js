import { describe, test, it, expect } from "vitest";
import {
  getAverageOfPrimeNumber,
  getSumOfPrimeNumber,
  isPrimeNumber,
} from "../../src/utils/prime.js";

describe("isPrimeNumber", () => {
  it("should return NaN if type of arg is not a number", () => {
    const isPrime = isPrimeNumber("1");
    expect(isPrime).toBe(NaN);
    // expect(result).toBeNaN();
  });

  test("should return false if arg is 1.", () => {
    const isPrime = isPrimeNumber(1);
    expect(isPrime).toBe(false);
  });
  test("should return true if arg is 2.", () => {
    const isPrime = isPrimeNumber(2);
    expect(isPrime).toBe(true);
  });

  test("should return true if arg is 3.", () => {
    const isPrime = isPrimeNumber(2);
    expect(isPrime).toBe(true);
  });

  test("should return false if arg is 4.", () => {
    const isPrime = isPrimeNumber(2);
    expect(isPrime).toBe(true);
  });
});

describe("getSumOfPrimeNumber", () => {
  it("should return NaN if type of arg is not a number", () => {
    const primeSum = getSumOfPrimeNumber("1");
    expect(primeSum).toBeNaN();
  });

  it("should return 0 if arg is provided to 1 or 0.", () => {
    const primeSum = getSumOfPrimeNumber(1);
    expect(primeSum).toBe(0);
  });

  it("should return 2 if arg is provided to 2.", () => {
    const primeSum = getSumOfPrimeNumber(2);
    expect(primeSum).toBe(2);
  });

  it("should return 5 if arg is provided to 3.", () => {
    const primeSum = getSumOfPrimeNumber(3);
    expect(primeSum).toBe(5);
  });
});

describe("getAverageOfPrimeNumber", () => {
  it("should return NaN if type of arg is not a number.", () => {
    const primeAverage = getAverageOfPrimeNumber("1");
    expect(primeAverage).toBeNaN();
  });

  it("should return 0 if arg is 1 0r 0", () => {
    const primeAverage = getAverageOfPrimeNumber(0);
    expect(primeAverage).toBe(0);
  });

  it("should return 2 if arg is 2", () => {
    const primeAverage = getAverageOfPrimeNumber(2);
    expect(primeAverage).toBe(2);
  });

  it("should return 2.5 if arg is 3", () => {
    const primeAverage = getAverageOfPrimeNumber(3);
    expect(primeAverage).toBe(2.5);
  });
});
