// Main entry point for the application
const main = async () => {
  try {
    console.log("Starting the application...");
    
    // Perform initial setup
    await setup();
    
    // Intentionally wait 10 seconds and then fail
    await new Promise((resolve) => {
      console.log("Waiting for 10 seconds before intentionally failing...");
      setTimeout(resolve, 10000);
    });
    
    // Throw an error after the delay
    throw new Error("This workflow is designed to fail after waiting 10 seconds");
    
  } catch (error) {
    console.error("ERROR:", error.message);
    // Re-throw to ensure the process exits with an error code
    throw error;
  }
};

// Setup function for any initialization logic
const setup = async () => {
  console.log("Setting up the application environment...");
  // Any setup logic would go here
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled ERROR:', error.message);
  process.exit(1);
});

// Execute the main function
main().catch((error) => {
  console.error("ERROR Unhandled ERROR:", error.message);
  process.exit(1);
});
