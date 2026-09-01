import { Router } from "express";
import { register, login, refresh } from "@/controllers/authController.js";
import { limiter } from "@/middlewares/rateLimiter.js";

const router = Router();

router.post("/register", register);

router.post("/login", limiter, login);

router.post("/refresh", refresh);

export default router;
