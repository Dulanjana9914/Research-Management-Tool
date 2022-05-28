import SubmitTypeRoute from "../models/SubmitTypes.js"

export const SubmitType = async(req,res)=>{
    
    const Submission_Type_Name = req.body.Submission_Type_Name;
    const Description = req.body.Description;
    


  const newType = new SubmitTypeRoute({
        
    Submission_Type_Name,
    Description,
    
  })

  newType.save().then(()=>{

    res.json("Added New Submission Type");

}).catch((err) =>{
   
  console.log(err);

})

    
};