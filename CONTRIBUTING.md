# Contributing to JavaScript Utilities Library

Thank you for considering contributing to this project! This document outlines the process for contributing to the JavaScript Utilities Library and helps ensure a smooth collaboration experience.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Setting Up Your Environment](#setting-up-your-environment)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Code Review Process](#code-review-process)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone. Please be considerate in your communication and respect differing viewpoints and experiences.

## Getting Started

1. **Fork the repository** by clicking the "Fork" button at the top right of the repository page on GitHub.

2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/javascript-utilities.git
   cd javascript-utilities
   ```

3. **Add the upstream repository** as a remote to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/original-owner/javascript-utilities.git
   ```

4. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Setting Up Your Environment

1. **Install dependencies**:
   ```bash
   npm install
   # or with yarn
   yarn install
   ```

2. **Verify your setup** by running the test suite:
   ```bash
   npm test
   # or with yarn
   yarn test
   ```

3. **Start the development server**:
   ```bash
   npm start
   # or with yarn
   yarn start
   ```

## Development Workflow

1. **Keep your fork up to date** with the upstream repository:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   git push origin main
   ```

2. **Always create a new branch** for each feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-you-are-fixing
   ```

3. **Write tests** for new features or bug fixes to ensure code quality and prevent regressions.

4. **Run tests regularly** during development:
   ```bash
   npm test
   # or
   npm run test:watch
   ```

## Coding Standards

This project follows specific coding standards to maintain consistency throughout the codebase:

1. **TypeScript**: All new code should be written in TypeScript with appropriate type annotations.

2. **Naming Conventions**:
   - Use `camelCase` for variables, functions, and method names
   - Use `PascalCase` for class names and type definitions
   - Use `UPPER_SNAKE_CASE` for constants
   - Prefix interface names with `I` (e.g., `IColorOptions`)

3. **Code Formatting**:
   - The project uses ESLint and Prettier for code formatting
   - Run linting before submitting your code:
     ```bash
     npm run lint
     # or to auto-fix issues
     npm run lint:fix
     ```

4. **Comments and Documentation**:
   - Add JSDoc comments for all public functions, classes, and methods
   - Include explanation for complex algorithms or non-obvious code
   - Update the README.md when adding new features

5. **Testing**:
   - Write unit tests for all new functionality
   - Maintain or improve code coverage
   - Tests should be named descriptively: `describe('functionName', () => { test('should do something specific', () => {...}) })`

## Submitting Changes

1. **Commit your changes** using clear and descriptive commit messages:
   ```bash
   git add .
   git commit -m "feat: add new color manipulation function"
   ```
   
   Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting, missing semi colons, etc.
   - `refactor:` for code refactoring
   - `test:` for adding or refactoring tests
   - `chore:` for tooling changes, build process, etc.

2. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** from your branch to the main repository's `main` branch:
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select "compare across forks"
   - Select your fork and branch
   - Add a descriptive title and detailed description
   - Link any related issues

4. **Address review feedback** if requested by maintainers.

## Code Review Process

All submissions require review before being merged:

1. Maintainers will review your code for:
   - Functionality
   - Code quality
   - Test coverage
   - Documentation
   - Adherence to coding standards

2. Automated CI checks must pass:
   - Tests
   - Linting
   - Type checking

3. Once approved, a maintainer will merge your Pull Request.

## Reporting Bugs

When reporting bugs, please include:

1. Clear and descriptive title
2. Steps to reproduce the bug
3. Expected behavior
4. Actual behavior
5. Screenshots if applicable
6. Environment information:
   - Browser/Node.js version
   - Operating system
   - Package version

Use the GitHub Issues feature with the "bug" label.

## Feature Requests

For feature requests:

1. Check existing issues to avoid duplicates
2. Provide a clear use case and rationale
3. Explain how the feature would benefit other users
4. If possible, outline a potential implementation approach

Use the GitHub Issues feature with the "enhancement" label.

---

Thank you for contributing to the JavaScript Utilities Library!
