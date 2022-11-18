import { Router } from "express";
import { signUp, signIn } from "../controllers/users.controller.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.middleware.js";

const router = Router();

router.post("/sign-up", userSchemaValidation, signUp);
router.post("/sign-in", signIn);

export default router;
