# Contributing Guide

Thank you for your interest in contributing to our project! This guide provides instructions on how to set up your local development environment and details our coding standards.

## Installation

To get started with development:

1. **Clone the repository**: Use your preferred method (HTTPS/SSH) to clone this repository onto your local machine.
2. **Install dependencies**: Run `pnpm install` or `npm install` in your terminal. We use [pnpm](https://pnpm.io/installation) as our package manager. If you don't have it installed yet, please refer to their documentation for installation instructions.

## Development Setup

After installing dependencies:

1. **Build**: Run `pnpm build` or `npm run build`. This command will build the TypeScript source code into JavaScript files located in a separate directory (e.g., `dist`).
2. **Test**: To run unit tests with Jest, execute `pnpm test`. Our tests are written using Jest framework with support from ts-jest for TypeScript testing.

## Code Formatting