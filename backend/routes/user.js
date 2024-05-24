import express from "express";
const router = express.Router();

import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidbar } from "../controllers/user.controller.js";

router.get("/",protectRoute,getUsersForSidbar);

export default router;
