import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CoSupervisorSchema = new Schema(
  {
    requestId: {
      type: String,
      required: true,
    },
    coSupervisorId: {
      type: String,
      required: true,
    },
    coSupervisorName: {
      type: String,
      required: true,
    },
    Comments: {
      type: String,
    },
  },
  { timestamps: true }
);
const CoSupervisor = mongoose.model(
  "Request Co Supervisor",
  CoSupervisorSchema
);

export default CoSupervisor;
