import express from "express";
import { EvaluateDoc } from "../controllers/EvaluateDocController.js";
import { EvaluatePresentation } from "../controllers/EvaluatePresentation.js";
const router = express.Router();

router.post("/document", EvaluateDoc);
router.post("/presentation", EvaluatePresentation);

export default router;
