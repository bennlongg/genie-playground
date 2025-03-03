# Contributing to Genie Playground

Thank you for your interest in contributing to Genie Playground! This document provides guidelines and instructions to help you contribute effectively to this project.

## Table of Contents

- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Contribution Workflow](#contribution-workflow)
- [Best Practices](#best-practices)
- [Error Handling](#error-handling)

## Setting Up the Development Environment

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/genie-playground.git
   cd genie-playground
   ```

2. **Install dependencies**
   This project uses `pnpm` as its package manager.
   ```bash
   pnpm install
   ```

3. **Verify your setup**
   Run the test suite to ensure everything is working correctly:
   ```bash
   pnpm test
   ```

## Coding Standards

### TypeScript Guidelines

- Use TypeScript for type safety. Include proper type annotations for all functions and variables.
- Utilize interfaces and types to define complex data structures.
- Avoid using `any` type unless absolutely necessary.

### Code Formatting

- The project follows a consistent code style enforced by ESLint and Prettier.
- Use 2 spaces for indentation.
- Use semicolons at the end of statements.
- Always use single quotes for strings except when avoiding escape characters.

### File Structure

- Maintain the modular structure of the codebase.
- Place utility functions in appropriate files (e.g., math-related functions in `functions.ts`).
- Create new files when introducing new categories of functionality.

## Testing

This project uses Vitest for testing. All new features or bug fixes should include appropriate tests.

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode during development
pnpm test -- --watch
```

### Writing Tests

- Tests should be placed in files with a `.test.ts` extension.
- Each function should have test cases covering:
  - Normal operations with valid inputs
  - Edge cases (empty arrays, zero values, etc.)
  - Error cases (invalid inputs, error handling)
- Follow the existing testing patterns in the codebase:
  ```typescript
  describe("Function Name", () => {
    it("should describe what this test case verifies", () => {
      expect(actualValue).toBe(expectedValue);
    });
  });
  ```

## Contribution Workflow

1. **Fork the repository** on GitHub.

2. **Create a branch** for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes** following the coding standards.

4. **Write tests** for your changes.

5. **Run the test suite** to ensure all tests pass.
   ```bash
   pnpm test
   ```

6. **Commit your changes** with a clear and descriptive commit message.
   ```bash
   git commit -m "Add feature: brief description of changes"
   ```

7. **Push your branch** to your fork.
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** against the main repository.
   - Provide a clear description of the changes.
   - Reference any related issues.

9. **Address review feedback** if requested by maintainers.

## Best Practices

### Function Design

- Write pure functions when possible (functions without side effects).
- Keep functions small and focused on a single responsibility.
- Use descriptive function and variable names.
- Functions should include error handling for invalid inputs.

### Examples

- When adding utility functions, follow patterns established in existing functions:
  ```typescript
  export function newUtilityFunction(param: ParamType): ReturnType {
    // Validate inputs
    if (!isValidInput(param)) {
      throw new Error("Clear error message");
    }
    
    // Implementation
    const result = doSomething(param);
    
    return result;
  }
  ```

## Error Handling

- Be explicit about function parameters and return types.
- Validate all inputs at the beginning of functions.
- Throw descriptive error messages for invalid inputs or unexpected conditions.
- Consider edge cases:
  - Empty arrays or strings
  - Null or undefined values
  - Zero or negative numbers (when applicable)
  - Out-of-bounds indices
  - Division by zero

Remember to always maintain the project's existing patterns and follow established conventions. When in doubt, look at similar implementations in the codebase for guidance.

Thank you for contributing to Genie Playground!
