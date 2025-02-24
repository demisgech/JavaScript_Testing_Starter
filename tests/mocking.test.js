import { beforeEach, afterEach, it, expect, describe, vi } from "vitest";

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
