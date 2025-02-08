import {
  describe,
  it,
  test,
  expect,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
  expectTypeOf,
} from "vitest";
import {
  calculateDiscount,
  canDrive,
  createProduct,
  fetchData,
  getCoupons,
  isPriceInRange,
  isStrongPassword,
  isValidUsername,
  Stack,
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

describe("isPriceInRange", () => {
  /** ***** Boundary Testing ****
   * A tesing techniques where we focus on the edges
   * or boundaries of input values
   * to ensure our software behaves correctly under extreme coditions
   */
  it("should return true when price is within the range", () => {
    expect(isPriceInRange(100, 0, 150)).toBeTruthy();
  });
  it("should return true if price is equal to the min or the max", () => {
    expect(isPriceInRange(100, 0, 100)).toBeTruthy();
    expect(isPriceInRange(0, 0, 100)).toBeTruthy();
  });
  it("should return false when the price is outside the range", () => {
    expect(isPriceInRange(-5, 0, 100)).toBeFalsy();
    expect(isPriceInRange(150, 0, 100)).toBeFalsy();
  });
});

describe("isValidUsername", () => {
  const minLength = 5;
  const maxLength = 15;
  test("should return false if username is too short", () => {
    expect(isValidUsername("D".repeat(minLength - 1))).toBeFalsy();
  });
  test("should return false if username is too long", () => {
    expect(isValidUsername("D".repeat(maxLength + 1))).toBeFalsy();
  });

  test("should return true when username is at the min or max Length", () => {
    expect(isValidUsername("a".repeat(minLength))).toBeTruthy();
    expect(isValidUsername("a".repeat(maxLength))).toBeTruthy();
  });
  test("should return true when username is within the length constraints", () => {
    expect(isValidUsername("d".repeat(minLength + 1))).toBe(true);
    expect(isValidUsername("d".repeat(maxLength - 1))).toBe(true);
  });

  test("should return false for invalid input types", () => {
    expect(isValidUsername(undefined)).toBeFalsy();
    expect(isValidUsername(null)).toBeFalsy();
    expect(isValidUsername(1)).toBeFalsy();
  });
});

describe("canDrive", () => {
  it("should return true for valid input", () => {
    expect(canDrive(16, "US")).toBe(true);
    expect(canDrive(17, "UK")).toBeTruthy();
    expect(canDrive(19, "US")).toBe(true);
  });

  it("should return error for invalid country code", () => {
    expect(canDrive(17, "ETH")).toMatch(/invalid/i);
  });
  it("should return false for underage in the US", () => {
    expect(canDrive(15, "US")).toBeFalsy();
  });
  it("should return true for min age in the US", () => {
    expect(canDrive(16, "US")).toBe(true);
  });
  it("should return false for underage in the UK", () => {
    expect(canDrive(16, "UK")).toBeFalsy();
  });
  it("should return true for min age in the UK", () => {
    expect(canDrive(17, "US")).toBe(true);
  });

  it("should handle invalid input", () => {
    expect(canDrive("16", "U")).toMatch(/invalid/i);
    expect(canDrive(null, undefined)).toMatch(/invalid/i);
  });
});

describe("ParametrizedTests", () => {
  /**
   * Parametrized tests:
   * are a way to run the same test multiple times with different sets of input data.
   */

  it.each([
    { age: 15, country: "US", result: false },
    { age: 16, country: "US", result: true },
    { age: 17, country: "US", result: true },
    { age: 16, country: "UK", result: false },
    { age: 17, country: "UK", result: true },
    { age: 18, country: "UK", result: true },
  ])(
    "should return $result for age $age in $country",
    ({ age, country, result }) => {
      expect(canDrive(age, country)).toBe(result);
    }
  );
});

describe("ParametrizedTests:isPriceInRange", () => {
  const min = 0;
  const max = 100;
  it.each([
    { scenario: "price < min", price: -1, result: false },
    { scenario: "price = min", price: 0, result: true },
    { scenario: "price between min and max", price: 50, result: true },
    { scenario: "price = max", price: 100, result: true },
    { scenario: "price > max", price: 101, result: false },
  ])("should return $result when $scenario", ({ price, result }) => {
    expect(isPriceInRange(price, min, max)).toBe(result);
  });
});

describe("fetchData", () => {
  // it("should return an array of numbers", () => {
  //   const result = fetchData();
  //   expect(Array.isArray(result)).toBeTruthy();
  //   expect(result.length).toBeGreaterThan(0);
  // });

  test("should return a promise that will resolve an array of numbers", async () => {
    try {
      const result = await fetchData();
      // the following two line of codes are not necessary
      // to check if the Promise is fullfield
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      expect(error).toHaveProperty("reason");
      expect(error.reason).toMatch(/fail/i);
    }
  });
  // Another way to test the above code
  test("should return a promise that will resolve an array of numbers", () => {
    fetchData()
      .then((result) => {
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
      })
      .catch((error) => {
        expect(error).toHaveProperty("reason");
        expect(error.reason).toMatch(/fail/i);
      });
  });
});

describe("Setup and Treardown", () => {
  beforeAll(() => {
    console.log("beforeAll called");
  });

  beforeEach(() => {
    console.log("beforeEach called");
  });

  afterEach(() => {
    console.log("afterEach called");
  });

  afterAll(() => {
    console.log("afterAll called");
  });
  it("test case 1", () => {});

  it("test case 2", () => {});
});

describe("Stack", () => {
  it("should push(add) an item to the stack", () => {
    // Arrange
    const stack = new Stack();
    //Act
    stack.push(1);
    //Assert
    expect(stack.size()).toBe(1);
  });

  it("should pop(remove) the top item from the stack and return it", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    const poppedItem = stack.pop();

    expect(poppedItem).toBe(2);
    expect(stack.size()).toBe(1);
  });

  it("should throw an error when an item is popped if stack is empty", () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  it("should peek(return) the top item from the stack without removing it", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    const peekItem = stack.peek();

    expect(peekItem).toBe(2);
    expect(stack.size()).toBe(2);
  });

  it("isEmpty() should return true it the stack is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test("isEmpty() should return false if the stack is not empty", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("size() should return the number of items in the stack", () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);

    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);

    stack.pop();
    expect(stack.size()).toBe(1);
  });

  it("should clear(remove) all item from the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.clear();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });
});

describe("Stack:SetupAndTeardown", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack = null;
  });
  it("push() should add an item to the stack", () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  it("pop() should remove and return the top item from the stack", () => {
    stack.push(1);
    stack.push(2);
    const poppedItem = stack.pop();
    expect(poppedItem).toBe(2);
    expect(stack.size()).toBe(1);
  });

  test("pop() should throw an error if stack is empty", () => {
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  test("peek() should return the top item from the stack without removing it", () => {
    stack.push(1);
    stack.push(2);
    const peekedItem = stack.peek();

    expect(peekedItem).toBe(2);
    expect(stack.size()).toBe(2);
  });

  test("peek() should throw an error if stack is empty", () => {
    expect(() => stack.peek()).toThrow(/empty/i);
  });

  test("isEmpty() should return true if stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("isEmpty() should return false if the stack is not empty", () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("size() should return the number of items in the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
  });

  test("clear() should remove all items from the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.clear();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });
});

describe("createProduct", () => {
  const product = { name: "", price: 0 };

  let result;
  beforeEach(() => {
    result = createProduct(product);
  });

  afterEach(() => {
    result = null;
  });
  test("should return an error object when name is invalid", () => {
    expect(typeof result).toBe("object");
    expect(result).toHaveProperty("success");
    expect(result.success).toBe(false);

    expect(result).toHaveProperty("error");
    expect(typeof result.error).toBe("object");

    expect(result.error).toHaveProperty("code");
    expect(result.error.code).toMatch(/invalid_name/i);

    expect(result.error).toHaveProperty("message");
    expect(result.error.message).toMatch(/miss/i);
  });

  test("should return an error object when price is <= 0", () => {
    product.name = "a"; // Assum product name is valid here
    result = createProduct(product);
    expect(typeof result).toBe("object");
    expect(result).toHaveProperty("success");
    expect(result.success).toBe(false);

    expect(result).toHaveProperty("error");
    expect(typeof result.error).toBe("object");

    expect(result.error).toHaveProperty("code");
    expect(result.error.code).toMatch(/invalid_price/i);

    expect(result.error).toHaveProperty("message");
    expect(result.error.message).toMatch(/miss/i);
  });

  test("should return an object of success for valid input", () => {
    product.name = "a";
    product.price = 1;
    result = createProduct(product);

    // the following two line of code produces the same result
    expect(typeof result).toBe("object");
    expectTypeOf(result).toBeObject();

    expectTypeOf(result).toHaveProperty("success");
    expect(result.success).toBe(true);

    expect(result).not.toHaveProperty("error");
    expect(result).toHaveProperty("message");
    expect(result.message).toMatch(/success/i);
  });
});

describe("isStrongPassword", () => {
  const prametrizedTest = test.each([
    {
      scenario: "password that has length less than 8",
      password: "asdf123",
      result: false,
    },
    {
      scenario: "password that does not contain at least one uppercase letter",
      password: "asdfwer231",
      result: false,
    },
    {
      scenario: "password that does not contain at least one lowercase letter",
      password: "ASFD12334",
      result: false,
    },
    {
      scenario: "password that does not contain at least one digit",
      password: "ASFDdfed",
      result: false,
    },
    {
      scenario: "password that met all criteria",
      password: "ASFDasdf1234",
      result: true,
    },
  ]);
  prametrizedTest(
    "should return $result for $scenario",
    ({ result, password }) => {
      expect(isStrongPassword(password)).toBe(result);
    }
  );
});
