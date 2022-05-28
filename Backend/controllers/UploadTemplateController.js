import UplaodTemplateRoute from "../models/UploadTemplate.js";

export const UploadTemplate = async (req, res) => {
  console.log(req.body);
  const AdminName = req.body.AdminName;
  const Title = req.body.Title;
  const Template = req.body.song;
  const Description = req.body.Description;

  const newType = new UplaodTemplateRoute({
    AdminName,
    Title,
    Template,
    Description,
  });

  newType
    .save()
    .then(() => {
      res.json("Upload Template Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
