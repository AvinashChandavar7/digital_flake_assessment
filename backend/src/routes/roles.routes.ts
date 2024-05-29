import { Router } from "express";

import verifyToken from "../middleware/auth.middleware";

import {
  getAllRoles,
  searchAndFilterRoles,

  createRoles,

  getRolesById,
  updateRoles,
  deleteRoles
} from "../controllers/roles.controller";

const router = Router();


router.get("/getAllRoles", verifyToken, getAllRoles);
router.get("/searchAndFilterRoles", verifyToken, searchAndFilterRoles);

router.post("/create", createRoles)


router
  .route('/:id')
  .get(getRolesById)
  .patch(updateRoles)
  .delete(deleteRoles);



export default router;
