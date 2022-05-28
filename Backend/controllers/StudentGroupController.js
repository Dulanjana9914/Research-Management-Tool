import StudentGroupRoute from "../models/StudentGroups.js";

export const StudentGroup = async (req, res) => {
  const Group_Leader_Name = req.body.Group_Leader_Name;
  const Student_ID = req.body.Student_ID;
  const Group_Leader_Email = req.body.Group_Leader_Email;
  const Member2_Name = req.body.Member2_Name;
  const Member2_ID = req.body.Member2_ID;
  const Member2_Email = req.body.Member2_Email;
  const Member3_Name = req.body.Member3_Name;
  const Member3_ID = req.body.Member3_ID;
  const Member3_Email = req.body.Member3_Email;
  const Member4_Name = req.body.Member4_Name;
  const Member4_ID = req.body.Member4_ID;
  const Member4_Email = req.body.Member4_Email;
  const Feedback = req.body.Feedback;

  const newGroup = new StudentGroupRoute({
    Group_Leader_Name,
    Student_ID,
    Group_Leader_Email,
    Member2_Name,
    Member2_ID,
    Member2_Email,
    Member3_Name,
    Member3_ID,
    Member3_Email,
    Member4_Name,
    Member4_ID,
    Member4_Email,
    Feedback,
  });

  await newGroup
    .save()
    .then(() => {
      res.json("Create Group Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllGroup = async (req, res) => {
  await StudentGroupRoute.find()
    .then((groupregisters) => {
      res.json(groupregisters);
    })
    .catch((err) => {
      console.catch.log(err);
    });
};
