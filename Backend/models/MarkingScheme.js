

import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const MarkingSchema = new Schema(
  {
    sid: {
      type: String,
      default: "AA1",
    },

    specialization: {
      type: String,
      required: true,
    },


    schemeType: {
        type: String,
        required : true
    },

    marks: {
      type: Number,
      required: true,
    },

    criteria: {
      type: [
        {
          des: { type: String, required: true },
          mark: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);


const Marking = mongoose.model("marking",MarkingSchema);
export default Marking;
