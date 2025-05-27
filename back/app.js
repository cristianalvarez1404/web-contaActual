import "dotenv/config";
import express from "express";
import { initDB } from "./config/dbInit.js";
import { execSync } from "child_process";
import { router } from "./routes/blog.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//Create tables
initDB();

// app.get("/", (req, res) => {
//   return res.json({ data: [] });
// });

app.use("/", router);

app.listen(3000, async () => {
  execSync("cls", { stdio: "inherit" });
  console.log(`Server running on http://localhost:3000`);
});
