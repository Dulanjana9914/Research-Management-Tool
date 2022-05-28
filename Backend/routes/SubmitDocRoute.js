import express from "express";

import { SubmitDoc, getDocs } from "../controllers/SubmitDocController.js";
const router = express.Router();

router.post("/", SubmitDoc);
router.get("/", getDocs);


export default router;
