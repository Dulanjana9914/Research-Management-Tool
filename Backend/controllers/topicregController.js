import TopicReg from "../models/TopicReg.js";

export const addTopic = async (req, res) => {
  const tid = req.body.tid;
  const groupID = req.body.groupID;
  const groupName = req.body.groupName;
  const rField = req.body.rField;
  const rTopic = req.body.rTopic;
  const leaderEmail = req.body.leaderEmail;
  const comment = req.body.comment;

  const newTopic = new TopicReg({
    tid,
    groupID,
    groupName,
    rField,
    rTopic,
    leaderEmail,
    comment,
  });

  await newTopic
    .save()
    .then(() => {
      res.json("Topic Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllTopic = async (req, res) => {
  await TopicReg.find().exec((err, Topic) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      topicRouter: Topic,
    });
  });
};

export const getSingleTopic = async (req, res) => {
  let topicid = req.params.id;

  await TopicReg.find({ _id: topicid }).exec((err, Topic) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      topicRouter: Topic,
    });
  });
};

export const updateSingleRecord = async (req, res) => {
  let topicid = req.params.id;
  const {
    tid,
    groupID,
    groupName,
    rField,
    rTopic,
    leaderEmail,
    comment,
    status,
  } = req.body;

  const updateTopic = {
    tid,
    groupID,
    groupName,
    rField,
    rTopic,
    leaderEmail,
    comment,
    status,
  };

  const update = await TopicReg.findByIdAndUpdate(topicid, updateTopic)
    .then(() => {
      res.status(200).send({ status: "Updated" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error update" });
    });
};

export const deleteTopic = async (req, res) => {
  let topicid = req.params.id;
  await TopicReg.findByIdAndDelete(topicid)
    .then(() => {
      res.status(200).send({ status: "Deleted!" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error delete" });
    });
};
