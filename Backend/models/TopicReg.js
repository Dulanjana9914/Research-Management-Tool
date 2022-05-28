import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TopicRegSchema = new Schema({
  tid: {
    type: String,
    required: true,
  },

  groupID: {
    type: String,
    required: true,
  },

  groupName: {
    type: String,
    required: true,
  },

  rField: {
    type: String,
    required: true,
  },

  rTopic: {
    type: String,
    required: true,
  },

  leaderEmail: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "pending",
  },
});

const TopicReg = mongoose.model("topicReg", TopicRegSchema);
export default TopicReg;

