import { describe, expect, it } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    const result = "The requested file was not found.";
    // Loose (to genereal)
    expect(result).toBeDefined();

    // Too specific (tight)
    expect(result).toBe("The requested file was not found.");

    // Better assertion
    expect(result).toMatch(/not found/i);
  });

  it("test case", () => {
    const numbers = [1, 2, 3];
    // Loose
    expect(numbers).toBeDefined();

    // Tight
    expect(numbers).toEqual([1, 2, 3]);
    expect(numbers).toHaveLength(3);
    // Better assertion
    expect(numbers).toEqual(expect.arrayContaining([1, 3, 2]));
    expect(numbers.length).toBeGreaterThan(0);
  });

  it("test case", () => {
    const result = { name: "Demis", id: "ETS0390/15" };
    expect(result).toMatchObject({ name: "Demis" });
    expect(result).toHaveProperty("name", "Demis");
    expect(typeof result).toBe("object");
    expect(typeof result.name).toBe("string");
  });
});
