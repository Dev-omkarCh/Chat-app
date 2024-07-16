import express from "express";
const router = express.Router();

import protectRoute from "../middleware/protectRoute.js";
import { getUserById, getUsersForSidbar } from "../controllers/user.controller.js";

router.get("/",protectRoute,getUsersForSidbar);

router.post("/add",protectRoute,getUserById);

export default router;
