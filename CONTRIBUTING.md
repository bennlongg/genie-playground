# Contributing Guidelines

Thank you for considering contributing to our project! We welcome contributions from everyone. By following these guidelines, you can help us maintain a high-quality codebase and ensure a smooth collaboration process.

## Getting Started

### Development Environment Setup

1. **Install Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Install pnpm**: We use pnpm as our package manager. You can install it globally by running:
   ```sh
   npm install -g pnpm
   ```

3. **Clone the Repository**: Clone the repository to your local machine using Git:
   ```sh
   git clone https://github.com/your-repo/project.git
   cd project
   ```

4. **Install Dependencies**: Install all necessary dependencies by running:
   ```sh
   pnpm install
   ```

### Running Tests

We use Vitest for testing our codebase. Before submitting any changes, please ensure that all tests pass by running:
```sh
pnpm test
```

### Coding Standards

To maintain consistency across our codebase, please adhere to the following coding standards:

- Use consistent indentation (e.g., 2 spaces).
- Follow naming conventions (e.g., camelCase for variables and functions).
- Write clear and concise comments where necessary.
- Ensure your code is properly formatted before committing changes.

### Contribution Workflow

1. **Fork the Repository**: Create a fork of the repository on GitHub.
2. **Create a Branch**: Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Make Changes**: Implement your changes in the new branch.
4. **Run Tests**: Ensure all tests pass by running `pnpm test`.
5. **Commit Changes**: Write meaningful commit messages that describe your changes:
   ```sh
   git commit -m "Add feature X"
   ```
6. **Push Changes**: Push your changes to your forked repository:
   ```sh
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Open a pull request on GitHub from your branch to our main branch.

### Documentation

If your contribution affects functionality or introduces new features, please update or add documentation accordingly.

Thank you for contributing! Your efforts are greatly appreciated.
