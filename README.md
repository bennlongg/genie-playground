# Genie Web Server

This project is a small web server that hosts various math and algorithm functions on separate endpoints. It uses Express.js as the web framework.

## Installation

To install the necessary dependencies, run:

```bash
pnpm install
```

## Running the Server

To start the web server, run:

```bash
pnpm start
```

The server will start listening on port 3000 by default.

## Available Endpoints

### Fibonacci

- **URL:** `/fibonacci`
- **Method:** GET
- **Query Parameters:**
  - `n`: The position of the Fibonacci sequence to calculate (integer).
- **Example Request:** `http://localhost:3000/fibonacci?n=10`
- **Example Response:**
  ```json
  {
    "result": 55
  }
  ```

### Factorial

- **URL:** `/factorial`
- **Method:** GET
- **Query Parameters:**
  - `n`: The number to calculate the factorial of (integer).
- **Example Request:** `http://localhost:3000/factorial?n=5`
- **Example Response:**
  ```json
  {
    "result": 120
  }
  ```

