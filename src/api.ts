import express from 'express';
import { fibonacci } from './functions';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/fibonacci', (req, res) => {
  // Extract query parameters
  const n = parseInt(req.query.n as string);

  try {
    // Call the fibonacci function
    const result = fibonacci(n);

    // Send response
    res.json({ result });
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
