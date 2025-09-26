import express, { Request, Response } from "express";
import helloRouter from "./routes/hello.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express + ESM 🚀");
});

// Example of using a separate route file
app.use("/hello", helloRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
