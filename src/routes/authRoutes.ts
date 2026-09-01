import { Router } from "express";
import { login } from "@/controllers/authController.js";

const router = Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register endpoint" });
});

router.post("/login", login);

export default router;
