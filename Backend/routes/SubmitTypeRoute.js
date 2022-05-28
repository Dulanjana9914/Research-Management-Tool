import express from "express";

import { SubmitType } from "../controllers/SubmitTypeController.js";
const router = express.Router();

router.post("/type", SubmitType);

export default router;
