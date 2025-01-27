import express from "express";
import { fibonacci, factorial } from "./functions";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Genie!");
});

app.get("/fibonacci", (req, res) => {
  const n = parseInt(req.query.n as string);
  if (isNaN(n)) {
    res.status(400).json({ error: "Invalid input" });
  } else {
    res.json({ result: fibonacci(n) });
  }
});

app.get("/factorial", (req, res) => {
  const n = parseInt(req.query.n as string);
  if (isNaN(n)) {
    res.status(400).json({ error: "Invalid input" });
  } else {
    res.json({ result: factorial(n) });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
