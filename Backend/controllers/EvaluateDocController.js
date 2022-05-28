import DocumentEvaluation from "../models/DocumentEvaluation.js";

//insert data
export const EvaluateDoc = async (req, res) => {
  try {
    const { docID, groupID, researchTopic, groupMembers, markingScheme } =
      req.body;
    const newDocumentEvaluation = new DocumentEvaluation({
      docID,
      groupID,
      researchTopic,
      groupMembers,
      markingScheme,
    });

    await newDocumentEvaluation.save().then(() => {
      res.json(newDocumentEvaluation);
    });

    // const documentEvaluation = await DocumentEvaluation.create(req.body);
    // res.status(201).json(documentEvaluation);
  } catch (err) {
    res.status(500).json(err);
  }
};
