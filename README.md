# Genie Playground

## Overview

Genie Playground is an interactive environment designed to facilitate AI-assisted codebase interaction and exploration. This tool enables developers to navigate through codebases, execute tasks, and utilize various retrieval tools through a conversational interface powered by AI.

## Features

- **Codebase Navigation**: Seamlessly browse through your project's file structure and explore code content
- **Task Execution**: Let the AI assistant help you implement features, fix bugs, or refactor code
- **Retrieval Tools**: Access various information sources to enhance the AI's knowledge and capabilities
- **Conversational Interface**: Interact with your codebase through natural language conversations

## Installation

### Prerequisites

- Node.js (v16 or later)
- pnpm package manager

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/genie-playground.git
   cd genie-playground
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory with necessary API keys (if applicable).

## Usage

### Starting the Application

Launch the Genie Playground by running:
```bash
pnpm start
```

This will start the development server, and you can access the application through your browser at `http://localhost:3000` (or the port specified in your configuration).

### Interaction Modes

#### Codebase Mode
In this mode, the AI assistant can help you navigate and interact with your codebase:
- Request file listings
- View file contents
- Suggest code modifications
- Ask questions about code functionality

#### Retrieval Mode
Access external information sources to augment the AI's capabilities:
- Search documentation
- Query specific resources
- Gather information for implementation decisions

Toggle between modes using the interface controls to suit your current development needs.

## Customization

### Adding or Modifying Retrieval Tools

You can customize the list of available retrieval tools by editing the `src/components/retrieval-tools.tsx` file:

1. Import any required components or libraries
2. Add new tool definitions following the existing pattern:
   ```typescript
   {
     id: "unique-tool-id",
     name: "Tool Display Name",
     description: "Brief description of what the tool does",
     icon: YourIconComponent,
     // Additional configuration options as needed
   }
   ```
3. Rebuild the application to see your changes

### Styling and UI Customization

Modify the styling by editing the CSS/SCSS files in the `src/styles` directory. The project uses modern CSS approaches for easy customization of colors, spacing, and layout elements.

## Contributing

Contributions to Genie Playground are welcome! To contribute:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them with descriptive messages
4. Push to your branch and submit a pull request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

[License information here]

## Acknowledgments

- This project was built using [list relevant technologies and libraries]
- Special thanks to contributors and inspiration sources

## Just for Fun

Why do programmers prefer dark mode?

Because light attracts bugs!

Why do programmers always mix up Halloween and Christmas?

Because Oct 31 == Dec 25!

Why do programmers always get confused when counting?

Because they start at 0!

How many programmers does it take to change a light bulb?

None, that's a hardware problem!
