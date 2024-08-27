import { describe, test, it, expect } from "vitest";
import {
  Point,
  add,
  computeFibonacii,
  digitSum,
  factorial,
  fizzBuzz,
  max,
  square,
} from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if argument divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if argument divisible by 3", () => {
    expect(fizzBuzz(57)).toBe("Fizz");
  });

  it("should return Buzz if argument divisible by 5", () => {
    expect(fizzBuzz(55)).toBe("Buzz");
  });

  it("should return argument as a string if it not divisible by 3 or 5", () => {
    expect(fizzBuzz(13)).toBe("13");
  });
});

describe("factorial", () => {
  it("should return undefined if arg is negative", () => {
    expect(factorial(-1)).toBe(undefined);
  });

  it("should return 1 if arg is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if arg is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if arg is 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if arg is 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 if arg is 4", () => {
    expect(factorial(4)).toBe(24);
  });
});

describe("square", () => {
  it("should return 0 if arg is 0", () => {
    expect(square(0)).toBe(0);
  });

  it("should return 1 if arg is 1", () => {
    expect(square(1)).toBe(1);
  });
  it("should return 1 if arg is -1", () => {
    expect(square(-1)).toBe(1);
  });

  it("should return 4 if arg is 2", () => {
    expect(square(2)).toBe(4);
  });
});

describe("add", () => {
  it("should return NaN at least one value is invalid number", () => {
    const numbers = [1, "a", 3];
    const result = add(numbers);
    expect(result).toBeNaN();
  });

  test("should summarize sum of an array", () => {
    const numbers = [1, 2, 3];

    const result = add(numbers);
    const expectedResult = numbers.reduce(
      (previous, current) => previous + current,
      0
    );
    expect(result).toBe(expectedResult);
  });

  test("should return a correct sum if an array of numeric string provided", () => {
    const numbers = ["1", 2];
    const result = add(numbers);
    const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);
    expect(result).toBe(expectedResult);
  });

  it("should return 0 if array is empty", () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });
});

describe("computeFibonacci", () => {
  it("should return undefined if argument is not provided.", () => {
    const result = computeFibonacii();
    expect(result).toBeUndefined();
  });

  it("should return 1 if argument is 1.", () => {
    const result = computeFibonacii(1);
    expect(result).toBe(1);
  });

  it("should return 1 if argument is 2.", () => {
    const result = computeFibonacii(2);
    expect(result).toBe(1);
  });

  it("should return 2 if argument is 3.", () => {
    const result = computeFibonacii(3);
    expect(result).toBe(2);
  });

  it("should return 3 if argument is 4.", () => {
    const result = computeFibonacii(4);
    expect(result).toBe(3);
  });

  it("should return 8 if argument is 6.", () => {
    const result = computeFibonacii(6);
    expect(result).toBe(8);
  });
});
describe("digitSum", () => {
  it("should return undefined if type of arguemnet is not a number.", () => {
    const result = digitSum();
    expect(result).toBeUndefined();
  });

  it("should return 1 if arguement is 1.", () => {
    const result = digitSum(1);
    expect(result).toBe(1);
  });

  it("should return 2 if arguement is 11.", () => {
    const result = digitSum(11);
    expect(result).toBe(2);
  });

  it("should return 2 if arguement is 20.", () => {
    const result = digitSum(20);
    expect(result).toBe(2);
  });

  it("should return the number itself if arguement is negative.", () => {
    const result = digitSum(-20);
    expect(result).toBe(-20);
  });
});
describe("Point", () => {
  it("should return NaN if the points are not given/ defined", () => {
    const point = new Point();
    const point2 = new Point();

    const result = point.calculateDistance(point2);
    expect(result).toBeNaN();
  });

  it("should return the correct distance if the points are defined", () => {
    const point1 = new Point(1, 2);
    const point2 = new Point(2, 2);
    const distance = point1.calculateDistance(point2);

    expect(distance).toBe(1);
  });

  it("should return NaN if one of the point is not a number", () => {
    const point1 = new Point(1, 2);
    const point2 = new Point();
    const distance = point1.calculateDistance(point2);

    expect(distance).toBeNaN();
  });

  it("should return 0 if the points are equal.", () => {
    const point1 = new Point(1, 2);
    const point2 = new Point(1, 2);
    const distance = point1.calculateDistance(point2);

    expect(distance).toBe(0);
  });
});
