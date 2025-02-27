# Contributing to JavaScript Utility Functions

Thank you for your interest in contributing to JavaScript Utility Functions! This document provides guidelines and instructions to help you get started.

## Table of Contents

- [Setting Up Development Environment](#setting-up-development-environment)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Contributions](#submitting-contributions)
- [Code of Conduct](#code-of-conduct)

## Setting Up Development Environment

### Prerequisites

- Node.js (version 14 or higher)
- npm or pnpm

### Installation

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/js-utility-functions.git
   cd js-utility-functions
   ```
3. Install dependencies:
   ```bash
   npm install
   # or if using pnpm
   pnpm install
   ```
4. Set up the upstream remote:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/js-utility-functions.git
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-you-are-fixing
   ```

2. Make your changes and commit them with clear, descriptive commit messages:
   ```bash
   git commit -m "Add new utility function: functionName"
   ```

3. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

- Use TypeScript for all new code
- Follow existing naming conventions:
  - Use camelCase for variable and function names
  - Use descriptive names that clearly indicate purpose
- Add JSDoc comments for all new functions, including:
  - Description of the function's purpose
  - Parameters, their types, and what they represent
  - Return value and its type
  - Examples of usage
  - Any exceptions that might be thrown
- Maintain a clean code style with proper indentation (2 spaces)
- Keep functions focused on a single responsibility
- Avoid unnecessary dependencies

## Testing

We use Jest for testing. All new features should include appropriate tests.

### Writing Tests

- Create test files with the `.test.ts` extension
- Place tests in the same directory as the functions they test
- Test both normal operation and edge cases
- Ensure tests are descriptive of what they're testing

### Running Tests

```bash
npm test
# or to run tests with coverage
npm test -- --coverage
```

All tests must pass before submitting your contribution.

## Submitting Contributions

1. Ensure all tests pass and your code adheres to the project's coding standards
2. Update or add documentation as necessary
3. Create a pull request from your feature branch to the project's `main` branch
4. In your pull request description:
   - Clearly describe the problem you're solving or feature you're adding
   - Reference any related issues
   - Provide examples of how to use the new functionality
   - List any breaking changes

### Pull Request Review Process

After submitting a pull request, maintainers will review your code. Be open to feedback and be prepared to make changes if requested.

## Code of Conduct

Please note that this project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

Thank you for contributing to JavaScript Utility Functions!
