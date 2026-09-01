import { Router } from "express";
import { login, refresh } from "@/controllers/authController.js";
import { limiter } from "@/middlewares/rateLimiter.js";

const router = Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register endpoint" });
});

router.post("/login", limiter, login);

router.post("/refresh", refresh);

export default router;
