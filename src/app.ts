import express from "express";
import dotenv from "dotenv";
import { initDB } from "@/database/init/index.js";
import authRoutes from "@/routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

await initDB();

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`-- Server running on http://localhost:${PORT}`);
});
