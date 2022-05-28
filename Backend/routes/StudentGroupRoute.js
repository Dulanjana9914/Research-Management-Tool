import express from "express";

import {
  StudentGroup,
  getAllGroup,
} from "../controllers/StudentGroupController.js";
const router = express.Router();

router.post("/", StudentGroup);

router.get("/", getAllGroup);

export default router;
