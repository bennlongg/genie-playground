/**
 * Collection of utility functions for the project
 */

/**
 * Takes two parameters and returns something awesome.
 * 
 * @param param1 - Description of param1
 * @param param2 - Description of param2
 * @returns An awesome result
 */
export function function1(param1: string, param2: number): Record<string, any> {
  return {
    message: "Something awesome happened!",
    param1,
    param2,
  };
}

/**
 * Returns a random npx joke.
 * 
 * @returns A joke about npx
 */
export function getNpxJoke(): string {
  const jokes = [
    "Why did the developer use npx? Because they heard it was 'node package execute-llent'!",
    "What do you call an npx command that failed? A package deal-breaker!",
    "How does npx stay in shape? It does package runs!",
  ];
  
  return jokes[Math.floor(Math.random() * jokes.length)];
}

/**
 * Utility function to format project output
 * 
 * @param input - The input to format
 * @returns Formatted output
 */
export function formatOutput(input: string): string {
  return `✨ ${input} ✨`;
}
