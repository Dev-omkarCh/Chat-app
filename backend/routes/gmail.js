import express from "express";
import { contactEmail, welcomeGmail } from "../controllers/gmail.controller.js";
const router = express.Router();

router.post("/send/:gmailId",welcomeGmail);
router.post("/send/query/:gmailId",contactEmail);

export default router;