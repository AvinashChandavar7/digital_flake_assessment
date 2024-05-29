import { Router } from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  tokenValidation,
} from "../controllers/auth.controller";

import verifyToken from "../middleware/auth.middleware";



const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/logout', logoutUser)

router.get("/validate-token", verifyToken, tokenValidation);


export default router;
