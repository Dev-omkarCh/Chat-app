import express from "express";
import { clearChat, sendMessage } from "../controllers/message.control.js";
import { getMessage } from "../controllers/message.control.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMessage);
router.post("/clear/:id",protectRoute,clearChat);

export default router;