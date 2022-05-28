import express from "express";
import { ReqCoSupervisor } from "../controllers/ReqCoSupervisorController.js";
const router = express.Router();

router.post("/co", ReqCoSupervisor);

export default router;
