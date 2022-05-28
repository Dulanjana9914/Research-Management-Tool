import SubmitDocRoute from "../models/SubmitDoc.js";

//Get submitted documents details
export const getDocs = async (req, res) => {
  SubmitDocRoute.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};

export const SubmitDoc = async (req, res) => {
  console.log(req.body);
  const Group_ID = req.body.Group_ID;
  const Research_Field = req.body.Research_Field;
  const Document = req.body.Document;
  const Comment = req.body.Comment;

  const newType = new SubmitDocRoute({
    Group_ID,
    Research_Field,
    Document,
    Comment,
  });

  newType
    .save()
    .then(() => {
      res.json("Document Submit Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
