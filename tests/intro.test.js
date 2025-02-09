import {
  describe,
  test,
  it,
  expect,
  beforeEach,
  afterEach,
  expectTypeOf,
} from "vitest";
import {
  Point,
  add,
  computeFibonacii,
  digitSum,
  factorial,
  fizzBuzz,
  isPalindrome,
  max,
  sieveOfEratosthens,
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

  it("should return 0 if array  is empty", () => {
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

describe("sieveOfEratosthens", () => {
  it("should return typeof array element", () => {
    const result = sieveOfEratosthens(1);
    expect(Array.isArray(result)).toBe(true);
    expectTypeOf(result).toBeArray();
    expect(result.length).toBeGreaterThanOrEqual(0);
  });

  it("should return an empty array if input is <= 1", () => {
    expect(sieveOfEratosthens(0).length).toBe(0);
    expect(sieveOfEratosthens(-1).length).toBe(0);
    expect(sieveOfEratosthens(1).length).toBe(0);
  });

  it("should return an array of at least one element of numbers if input is >= 2", () => {
    expect(sieveOfEratosthens(2).length).toBeGreaterThanOrEqual(1);
    expect(sieveOfEratosthens(3).length).toBeGreaterThanOrEqual(2);
  });

  it("should contains only prime number below 20 if input is 20", () => {
    expect(sieveOfEratosthens(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(sieveOfEratosthens(20)).toEqual(
      expect.arrayContaining([5, 2, 7, 3, 11, 19, 17, 13, 19])
    );
  });

  it("should contain prime number 997 if input is 1000", () => {
    expect(sieveOfEratosthens(1000)).toContain(997);
  });
});

describe("isPalindrome", () => {
  it("should return false if value is undefind or null.", () => {
    const result = isPalindrome();
    expect(result).toBeFalsy();
  });

  it("should return true if value provided 121 as a number", () => {
    const result = isPalindrome(121);
    expect(result).toBeTruthy();
  });
  it("should return true if value provided 121 as string.", () => {
    const result = isPalindrome("121");
    expect(result).toBeTruthy();
  });

  it("should return true if value provided -121 as number.", () => {
    const result = isPalindrome(-121);
    expect(result).toBeTruthy();
  });
  it("should return true if value provided -121 as string.", () => {
    const result = isPalindrome("-121");
    expect(result).toBeTruthy();
  });
  it("should return true if value provided A man, a plan, a canal: Panama", () => {
    const result = isPalindrome("a man, a plan, a canal: panama");
    expect(result).toBeTruthy();
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

describe("Point:SetupAndTeardown", () => {
  let point1;
  let point2;
  beforeEach(() => {
    point1 = new Point(1, 2);
    point2 = new Point(1, 5);
  });

  afterEach(() => {
    point1 = null;
    point2 = null;
  });

  it("setX() should set a value for x", () => {
    point1.setX(1);
    point2.setX(2);
    expect(point1.getX()).toBe(1);
    expect(point2.getX()).toBe(2);
  });

  it("setY() should set a value for y", () => {
    point1.setY(1);
    point2.setY(2);
    expect(point1.getY()).toBe(1);
    expect(point2.getY()).toBe(2);
  });

  it("calculateDistance() should return calculated distance between two points", () => {
    const distance = point1.calculateDistance(point2);
    expect(distance).toBe(3);
  });
});
