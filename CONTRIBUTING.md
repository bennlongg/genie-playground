# Contributing to Genie Web Server

Thank you for considering contributing to our project! We welcome contributions from everyone. By following these guidelines, you can help us maintain a high-quality codebase and ensure that your contributions are effectively integrated into the project.

## How to Contribute

### 1. Fork the Repository

Start by forking the repository on GitHub. This creates your own copy of the project where you can make changes without affecting the main repository.

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/your-username/genie-web-server.git
cd genie-web-server
```

### 3. Create a New Branch

Create a new branch for your feature or bug fix:

```bash
git checkout -b my-feature-branch
```

### 4. Make Changes

Make your changes in your local repository. Ensure that your code follows our coding standards and is well-documented.

### 5. Test Your Changes

Run tests to ensure that your changes do not break existing functionality:

```bash
pnpm test
```

If you add new functionality, please include tests for it as well.

### 6. Commit Your Changes

Commit your changes with a clear and descriptive commit message:

```bash
git add .
git commit -m "Add feature X"
```

### 7. Push Your Changes

Push your changes to your forked repository:

```bash
git push origin my-feature-branch
```

### 8. Open a Pull Request

Open a pull request (PR) from your branch to the main repository's `main` branch. Provide a clear description of your changes and any relevant context.

## Reporting Issues

If you encounter any bugs or have suggestions for improvements, please open an issue on GitHub. When reporting an issue, please include:

- A clear description of the problem.
- Steps to reproduce the issue.
- Any relevant error messages or logs.
- Your environment (e.g., operating system, Node.js version).

## Coding Standards

Please adhere to the following coding standards:

- Use TypeScript conventions consistently throughout the codebase.
- Write clean and readable code with appropriate comments.
- Follow existing patterns and structures in the project.
- Use meaningful variable and function names.

## Testing

All contributions should be accompanied by tests that verify their functionality. We use Jest as our testing framework. Ensure that all tests pass before submitting your pull request.

## Documentation

If your contribution affects user-facing functionality or APIs, please update the relevant documentation (e.g., `README.md`) accordingly.

## Review Process

All pull requests will be reviewed by one or more maintainers before being merged into the main branch. We may provide feedback or request changes before merging your contribution.

Thank you for contributing!
