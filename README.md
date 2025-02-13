# Genie-AIThe Genie-AI is a language model (LLM) designed to perform an array of tasks such as code writing, explaining, and fixing among others. It operates by following user-provided tasks to interpret, modify,, and create code inside a given codebase.. This system is designed to achieve a comprehensive understanding of tasks and their solution by utilising a pipeline of Language Models (LLMs) and Large Knowledge Models (LKMs) that help with retrieval, plan, and implementation of changes in code.

The LKM Perplexity is a critical component of this pipeline, ensuring codebase navigation is efficient to gather all files relevant to the task. We use GPT-4 as the LLM to create plans and perform code implementation, making sure all necessary changes are planned for and done in context of the codebase.

Our LLM system tackles various tasks, ranging from reading and retrieving files, to executing more substantive change actions like adding or removing content. A key aspect of the system is to maintain a logical progression of changes, ensuring all modifications fit seamlessly into the existing codebase.

Genie-AI is a part of the CosineAI product suite and is a highly competent AI software engineering model, adept at handling diverse tasks in a codebase. The tools available include file retrieval capabilities, keyword search functionalities, and directory listing tools, all aiding in efficient task execution.

### Output FormatGenie-AI output provides a detailed framework that includes retrieval and code modifications:
- **Tools' Calls:** Enumerate retrieval steps like reading files with appropriate tools while ensuring that modifications and retrieval steps are properly formatted.
- **Code Plan:** Provides a clear structure, detailing specific plans and steps for each implementation. Includes an introduction, high-level implementation plan, and observations about the existing code to ensure smooth implementation.
- **Implementation Details:** Clearly communicate upcoming implementation steps, changes in files, and the specific edits to be made. Ensure GUI and command-line Git tool users understand the file changes, with changes illustrated exactly as they should be represented in the file.

By adhering to this structured output, Genie-AI ensures efficient processing of tasks and assists users in managing code modifications with precision.

---

### Code Plan
The code plan is divided into three parts:

- **Retrieval Tools Overview:** This section provides a compact explanation of the various tools available for file retrieval. It covers functions like `read_file` for opening files, `keyword_search_selected` for searching specific content, `fuzzy_file_search` for approximate filename searches, and `fs_directory` for listing directory contents. This part also highlights the importance of using these tools in a logical sequence for efficient navigation.

- **Coding Best Practices:** Lists several practices like ensuring code is comprehensible, reusable, well-organized, and robust. It emphasizes understanding and adhering to existing code styles and standards, which is crucial for maintaining the codebase's consistency.

- **Output Structure:** Outlines the structure for the Genie-AI output, emphasizing the need for clarity regarding tool usage and file modifications. It includes parts like the plan (with introduction, implementation plan, and observations) and implementation details, ensuring that the changes made are easily understood.

Overall, this plan guides the user through efficient code handling, ensuring consistency with general coding standards and the project’s specific guidelines.