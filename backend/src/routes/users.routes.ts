import { Router } from "express";

import verifyToken from "../middleware/auth.middleware";

import {
  getCurrentUser,

  getUserById,
} from "../controllers/user.controller";


const router = Router();

router.get("/current-user", verifyToken, getCurrentUser);

router
  .route('/:id')
  .get(getUserById)




export default router;
