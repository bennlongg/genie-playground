import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { wow } from "./functions.new";

describe("Wow Function", () => {
  // Setup console.log spy before each test
  let consoleLogSpy: any;
  
  beforeEach(() => {
    // Create a spy on console.log
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore the original console.log after each test
    consoleLogSpy.mockRestore();
  });

  it("should log 'wow' when called without arguments", () => {
    // Call the function
    wow();
    
    // Check that console.log was called with 'wow'
    expect(consoleLogSpy).toHaveBeenCalledWith('wow');
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  it("should log the provided message when called with an argument", () => {
    // Call the function with a custom message
    const customMessage = "hello world";
    wow(customMessage);
    
    // Check that console.log was called with the custom message
    expect(consoleLogSpy).toHaveBeenCalledWith(customMessage);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  it("should still work with empty string as message", () => {
    // Call the function with an empty string
    wow("");
    
    // Check that console.log was called with an empty string
    expect(consoleLogSpy).toHaveBeenCalledWith("");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });
});
