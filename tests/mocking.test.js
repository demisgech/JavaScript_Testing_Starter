import {
  beforeEach,
  afterEach,
  it,
  expect,
  describe,
  vi,
  expectTypeOf,
} from "vitest";
import { getExchangeRate } from "../src/libs/currency";
import { getPriceInCurrency, getShippingInfo } from "../src/mocking";
import { getShippingQuote } from "../src/libs/shipping";

describe("test suite", () => {
  /** Mock Function
   * A function that imitates(to follow as a model or a pattern to make copy) the behavior of a real function
   * (To mock something mean to imitate sth)
   */

  it("test case", () => {
    const greet = vi.fn();
    // default
    const returnUndefinde = greet();
    console.log(returnUndefinde);

    // Return a value
    greet.mockReturnValue("Hello");
    const returnValue = greet();
    console.log(returnValue);

    //return a promise
    greet.mockResolvedValue("Hello");

    greet()
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));

    // Add logic to mock function
    greet.mockImplementation((name) => "Hello " + name);
    const sayHello = greet("Demis");
    console.log(sayHello);

    expect(greet).toHaveBeenCalled();
    expect(greet).toHaveBeenCalledWith("Demis");
    // expect(greet).toHaveBeenCalledOnce(); // The test fail
  });

  it("should sent text message", () => {
    // Create a mock function
    const sendText = vi.fn();
    sendText.mockReturnValue("ok");

    // Call the mock function
    const result = sendText("message");

    // Assert the mock function is called
    expect(sendText).toHaveBeenCalledWith("message");
    // Assert the result if ok
    expect(result).toMatch(/ok/i); // or
    expect(result).toBe("ok");
  });
});

vi.mock("../src/libs/currency");
describe("getPriceInCurrency", () => {
  it("should return price in target currency", () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);
    const price = getPriceInCurrency(10, "AUD");
    expect(price).toBe(15);
  });
});

vi.mock("../src/libs/shipping");
describe("getShippingInfo", () => {
  it("should return shipping unavailable if quote cannot be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);
    const result = getShippingInfo("US");

    expect(result).toMatch(/unavailable/i);
  });

  it("should return shipping info if quote can be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue({
      cost: 10,
      estimatedDays: 3,
    });

    const result = getShippingInfo("Ethiopia");

    expect(result).toMatch("$10");
    expect(result).toMatch(/3 Days/i);
    // Another way for the above two line of code
    expect(result).toMatch(/Shipping cost: \$10 \(3 days\)/i);
  });
});
