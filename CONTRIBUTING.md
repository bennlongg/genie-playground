# Contributing to cal-menu-v2

Thank you for your interest in contributing cal-menu-v2! Here, you will find key details to help you get started with contributing to this project, such as how to develop, report issues, and follow the coding standards.

## Table of Contents

1. [Code of Conduct](##code-of-conduct)
2. [How to Contribute](##how-to-contribute)
3. [Tips](##tips)
4. [Code Formatting and Style](##code-formatting-and-styles)
5. [Definition of Done](##definition-of-done)
6. [Bug Reporting](##bug-reporting)

## Development Set Up

To set up your local development environment follow:

1. [clone the repository](##clone-the-repository)
2. [install dependencies](##install-dependencies)
3. [pre-commit hooks](##pre-commit-hooks)
4. [run the local server](##running-the-local-server), and finally
5. [test the code](##test-the-code).

### Clone the Repository

To get started, clone the repository to your local environment, and follow the instructions in the `README.md` file.

**Note**: Ensure that you have `pnpm` installed to prevent errors such as:

```shell 
ERROR: Failed to resolve plugin spec 'prettier'. No available plugins match the requested spec.
```

### Install Dependencies

Run the following command line to install dependencies:

```sh
pnpm install
```

### Pre-Commit Hooks

Refer to https://prettier.io/docs/en/precommit.html#option-3-pretty-quick-https-githubcom-azz-pretty-quick

More information about how to set up or modify pre-commit hooks can be found in [nacobot](https://nacobot.org/posts/coding-workflows/prettier-eslint-pre-commit-hooks/) and [prettier docs](https://prettier.io/docs/en/options.html).

### Running the Local Server

Refer to https://prettier.io/docs/en/precommit.html#option-3-pretty-quick-https-githubcom-azz-pretty-quick

### Test the Code

To test the code base, you can run `firefox` or `chrome`:

```sh
pnpm firefox
# or
pnpm chrome
```

## Code of Conduct

It is important to acknowledge and follow the Code of Conduct while contributing. We expect all participants, contributors, and maintainers in our project to adhere to this code. This helps in creating a positive, inclusive, and respectful environment for all users.

## How to Contribute

When you start working on a feature, bugfix, or lab assignment, clone the repository and create a new branch with your changes. Once you have completed your work, commit your changes and submit a pull request to the main repository. Reviewers will inspect your changes and provide feedback or merge your contributions.

### Find a Lab, Feature, or Bugfix

To find a feature or bugfix to work on:

- Browse the GitHub repository issues labeled as ‘help wanted’ or ‘feature request’.
- Check out [good first contribution](https://github.com/jmhwang77/cal-menu-v2/labels/good%20first%20issue) or [issues](https://github.com/jmhwang77/cal-menu-v2/labels/help%20wanted) relevant to your area of interest.

#### Tips

1. It's a good idea to create an issue in the issue tracker for each feature or bugfix before you start coding. Use the issue to document what you're working on and to get feedback from the community before submitting a pull request.

2. If you're proposing a big feature or refactor, consider opening an issue to discuss your changes before you start working on a PR.

#### Clone the Repository

If you're working on several features or bugfixes simultaneously, it's a good idea to work in a separate branch for each task. This makes it easier to submit pull requests for each change and results in a more organized commit history.

```sh
git clone https://github.com/jmhwang77/cal-menu-v2.git
```

Clone the repository to your local environment for each feature or bugfix. In each repository, install dependencies using `pnpm`. The project uses a [monorepo](https://pnpm.io/workspaces) setup with `pnpm`, and you can switch between repositories using `nvm`.

### Submit a Pull Request

To submit a pull request for your changes:

1. Open a pull request from your working branch into the main branch of the repository.

2. Make sure you provide a descriptive title and comment to explain your changes.

3. Wait for community reviews and any requested changes before merging your pull request.

If the changes are trivial (such as documentation updates), feel free to do all of this in a single commit.

**Note**: It is helpful if the commit message references the issue number in the form of `closes #XXX` or `fixes #XXX`. This way, the pull request will automatically close the related issue when it is merged.

## Code Formatting and Styles

To document your code, please follow the examples and snippets provided in the `README.md` file.

1. Use comments to describe what the code does. Focus on explaining why the code exists and what purpose it serves.

2. Inline comments (i.e., comments in the same line as the statement or expression) should be used sparingly. When inline comments are used, put space between the words and the /*, //, or */.

   ```ts
   // This is a single-line inline comment
   inline() // Inline comments are sparse.
   ```

3. Comments should appear on separate, own lines in most cases. Inside function bodies, place longer chunks of comments on top of the related statement(s).

    ```ts
    import { LABEL } from './styles'
    // This comment is related to the export statement below.  
    export { LABEL }
    ```

**Note**: Variable names, comments, and code should use grammatically correct English. Follow all applicable rules from the [TaskGroup style guide](https://www.freeopenoffice.org/en/taskgroup-a-quick-reference.html#taskgroup-style-guide).

## Definition of Done

The following criteria should be met before considering your changes "done":

- All [features and bugfixes](#section-features-and-bugfixes) have been implemented and tested.

- All comments have been addressed, and the function descriptions have been updated if necessary.

- The layout and formatting have been checked and approved for code review.

- Automated tests for the changes are passing.

## Bug Reporting

To report a new bug or issue:

1. Open a new issue in the GitHub repository with a descriptive title and explanation. Provide as much information as possible about the problem and how to reproduce it.

2. If possible, include sample code, a screenshot, or other resources to help others understand the problem.

## Feature Requests

Before starting development work, it’s a good idea to create issues in the issue tracker. This makes sure your work doesn’t go unnoticed and helps the community provide feedback in review comments.

To request a new feature or enhancement:

1. Open a new issue in the GitHub repository clearly describing the feature request or enhancement.

2. Explain why the feature is useful and how it will be beneficial to the project. Provide any additional information or context that would be helpful when addressing the feature.
   
3. If desired, include a proposed design or guideline for how the feature might look or behave.
   
4. Tag the issue using the "feature request" label.