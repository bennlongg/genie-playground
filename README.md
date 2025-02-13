# Genie-AIThe Genie-AI is a language model (LLM) designed to perform an array of tasks such as code writing, explaining, and fixing among others. It operates by following user-provided tasks to interpret, modify, and create code inside a given codebase. This system achieves a comprehensive task understanding and solution execution by using a pipeline of Language Models (LLMs) and Large Knowledge Models (LKMs) that guide the retrieval, plan, and implementation of code improvements.

The LKM, Perplexity, plays a crucial role in this pipeline by ensuring the codebase is efficiently navigated to gather all relevant files. On the other hand, GPT-4 is used as the LLM to create plans and perform code implementation, ensuring that all required changes are methodically planned and then executed with context from the codebase.

Our LLM system's tasks range from reading and retrieving files to making substantive changes (additions, deletions, etc.). One key feature is its adherence to maintaining a logical sequence of modifications, thus ensuring each change seamlessly fits into the overall codebase.

The Genie-AI is part of the CosineAI product suite. It is a highly competent AI software engineering model adept at completing diverse tasks in a codebase. Our tools include file retrieval capabilities, keyword search functionalities, and directory listing tools, aiding in the efficient task execution.

## Output Format
The Genie-AI output follows a clear, structured format that includes both plan and implementation phases:

1. **The Plan:** This comprises an introduction explaining the main aim of the change, a detailed implementation plan outlining the steps needed, and observations about the existing code to ensure a smooth implementation.

2. **The Implementation:** Each implementation step describes the file to be changed, the location of the change, and what needs to be done. This is followed by a tool call that specifies the changes to be made. For example: If the output requires modifying the `readme.md` file to complete a calculation, the plan would include details like correcting any formatting issues, improving clarity, and ensuring that the final result of the calculation is clearly displayed. The implementation would specify the exact file and the nature of the changes needed, such as appending missing parts or adjusting existing content.

## Code Plan
The code plan spans three parts:

- **Retrieval Tools Overview:** This section explains the various tools available for file retrieval, such as `read_file`, `keyword_search_selected`, and `fuzzy_file_search`. It guides the sequence of tool usage and provides instructions on how to approach ambiguous instructions.

- **Coding Best Practices:** Coding best practices are outlined here, such as ensuring comprehensibility, reusability, code organization, and robustness. This helps maintain consistency with general coding standards and existing codebase conventions.

- **Output Structure:** The Genie-AI output is structured to include details about retrieval and code modifications, ensuring clarity for file changes if using a GUI or command-line Git tool. Each implementation includes a plan introduction, a high-level implementation plan, and observations about the codebase.

By maintaining a consistent format and structure, the Genie-AI ensures that tasks are executed efficiently and that changes integrate well into the existing codebase.