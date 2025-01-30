// Import necessary modules
import express from 'express';
import { fibonacci } from './functions';

// Initialize an Express application
const app = express();
const port = 3000; // Port number for the server

// Define a route handler for GET requests on '/fibonacci'
app.get('/fibonacci', (req, res) => {
  // Extract query parameters
  const n = req.query.n;

  // Validate input
  if (typeof n !== 'string' || !/^\d+$/.test(n)) {
    return res.status(400).json({ error: 'Invalid parameter "n"' });
  }

  // Convert query parameter to number
  const num = parseInt(n);

  try {
    // Calculate Fibonacci number
    const result = fibonacci(num);
    res.json({ result });
  } catch (error) {
    // Handle errors (e.g., negative numbers)
    res.status(400).json({ error: (error as Error).message });
  }
});

// Start listening for incoming connections
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
