import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SubmitDocSchema = new Schema(
  {
    Group_ID: {
      type: String,
      required: true,
    },

    Document: {
      type: String,
      required: true,
    },

    Status: {
      type: String,
      default: "Pending",
    },

    Research_Field: {
      type: String,
    },

    Comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const SubmitDoc = mongoose.model("SubmitDoc", SubmitDocSchema);
export default SubmitDoc;
