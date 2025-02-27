import * as core from '@actions/core';

/**
 * Sleep for the specified number of milliseconds
 * @param ms The number of milliseconds to sleep
 * @returns A promise that resolves after the specified time
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main function that runs the GitHub action
 */
async function main(): Promise<void> {
  try {
    // Log that we're starting the workflow
    core.info('Starting workflow execution...');
    
    // Wait for 10 seconds
    core.info('Waiting for 10 seconds before simulating failure...');
    await sleep(10000);
    
    // Log error message and throw error to fail the workflow
    core.error('ERROR: This workflow is designed to fail after waiting 10 seconds');
    throw new Error('ERROR: This workflow is designed to fail after waiting 10 seconds');
  } catch (error) {
    // Handle any errors that might occur
    if (error instanceof Error) {
      core.error(`Unhandled ERROR: ${error.message}`);
    } else {
      core.error(`Unhandled ERROR: ${error}`);
    }
    // Re-throw the error to ensure the workflow fails
    throw error;
  }
}

// Execute the main function
main().catch(error => {
  core.setFailed(`Action failed with error: ${error}`);
});
