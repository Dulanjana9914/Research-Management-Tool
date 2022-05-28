import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UploadTemplateSchema = new Schema(
  {
    AdminName: {
      type: String,
    },

    Title: {
      type: String,
    },

    Template: {
      type: String,
    },

    Description: {
      type: String,
    },
  },
  { timestamps: true }
);

const UploadTemplate = mongoose.model("UploadTemplate", UploadTemplateSchema);
export default UploadTemplate;
