import { it, expect, describe } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    const result = { name: "Demis", age: 21 };
    // .toBe => is used for comparing premitive values
    // expect(result).toBe({ name: "Demis", age: 21 });

    // .toEqual => is used for coomparing reference type values
    expect(result).toEqual({ name: "Demis", age: 21 });
  });

  it("test truthy ness", () => {
    let value;
    // expect(value).toBeFalsy();
    // expect(value).toBeUndefined();
    // value = true;
    // expect(value).toBeTruthy();
    value = null;
    expect(value).toBeNull();
    value = "some type value";
    expect(value).toBeDefined();
  });

  it("test numbers", () => {
    let number = 10;
    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(20);
    expect(number).toBeLessThanOrEqual(10);
  });

  it("test string", () => {
    expect("Hello").toMatch(/Hello/);
    expect("Hello").toMatch(/[H]/);
    expect("Hello").toMatch(/[a-zA-Z]/);
  });

  it("test object", () => {
    const user = {
      username: "@demisgech",
      password: "123132dfasf",
    };

    expect(user).toMatchObject({ username: "@demisgech" });
    expect(user).toHaveProperty("password");
  });

  it("test arrays", () => {
    const fruits = ["apple", true, 3, undefined, null];

    expect(fruits).toContain(true);
    expect(fruits).toContain(3);
    expect(fruits).toHaveLength(5);
  });
});
