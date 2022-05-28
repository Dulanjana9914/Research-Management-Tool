
import express from "express";
const router = express.Router();
import TopicReg from "../models/TopicReg.js";
import {
  addTopic,
  getAllTopic,
  getSingleTopic,
  updateSingleRecord,
  deleteTopic,
} from "../controllers/topicregController.js";

router.post("/", addTopic);

//get all topics
router.get("/", getAllTopic);

//get single topic
router.get("/:id", getSingleTopic);

//update single record
router.put("/:id", updateSingleRecord);

router.delete("/:id", deleteTopic);

export default router;

