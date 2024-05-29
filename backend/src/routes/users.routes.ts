import { Router } from "express";

import verifyToken from "../middleware/auth.middleware";
import authorizeRoles from "../middleware/authRoles.middleware";
import upload from "../middleware/multer.middleware";

import { AllowedRoles } from "../types/shared";

import {
  getCurrentUser,

  updateUserAvatar,

  getAllUsers,
  searchAndFilterUsers,

  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";




const router = Router();

router.get("/current-user", verifyToken, getCurrentUser);

router.patch(
  "/updateUserAvatar",
  verifyToken,
  upload.single('avatar'),
  updateUserAvatar
)


router.get("/getAllUsers", verifyToken, getAllUsers);
router.get("/searchAndFilterUsers", verifyToken, searchAndFilterUsers);

router
  .route('/:id')
  .get(getUserById)
  .patch(
    verifyToken,
    authorizeRoles(AllowedRoles.Admin, AllowedRoles.SuperAdmin),
    updateUser
  )
  .delete(deleteUser);


export default router;
