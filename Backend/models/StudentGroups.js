import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StudentGroupSchema = new Schema(
  {
    Group_Leader_Name: {
      type: String,
      required: true,
    },

    Student_ID: {
      type: String,
      required: true,
    },

    Group_Leader_Email: {
      type: String,
      required: true,
    },

    Member2_Name: {
      type: String,
      required: true,
    },

    Member2_ID: {
      type: String,
      required: true,
    },

    Member2_Email: {
      type: String,
      required: true,
    },

    Member3_Name: {
      type: String,
      required: true,
    },

    Member3_ID: {
      type: String,
      required: true,
    },

    Member3_Email: {
      type: String,
      required: true,
    },

    Member4_Name: {
      type: String,
      required: true,
    },

    Member4_ID: {
      type: String,
      required: true,
    },

    Member4_Email: {
      type: String,
      required: true,
    },

    Feedback: {
      type: String,
    },
  },
  { timestamps: true }
);

const StudentGroup = mongoose.model("StudentGroup", StudentGroupSchema);
export default StudentGroup;
