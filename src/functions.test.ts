describe("Fibonacci Function", () => {
  it("should return 0 for n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return 1 for n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should return 1 for n = 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  it("should return 3 for n = 3", () => {
    expect(fibonacci(3)).toBe(2);
  });

  it("should return 55 for n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  it("should return 6765 for n = 20", () => {
    expect(fibonacci(20)).toBe(6765);
  });

  it("should return 12586269025 for n = 50", () => {
    expect(fibonacci(50)).toBe(12586269025);
  });

  it("should return the correct Fibonacci number for n = 100", () => {
    expect(fibonacci(100)).toBe(354224848179262000000);
  });

  

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1561)).toThrow("Negative numbers are not allowed");
     expect(() => fibonacci(-1561)).toThrow("Negative numbers are not allowed");
      expect(() => fibonacci(-1561)).toThrow("Negative numbers are not allowed");
       expect(() => fibonacci(-1561)).toThrow("Negative numbers are not allowed");
  });
});