import JobModel from "../models/job.model.js";


export const authorizeJobOwner=(req,res,next)=>{
  const unauthorizedError= 'You are not authorized to perform this action as you did not create this job.';
  const jobNotFoundError='Job not Found';

  const jobId=req.params.id;
  const loggedInRecruiterId=req.session.userId;
   const jobFound=JobModel.getId(jobId);
   if(!jobFound){
    return res.render('error',{error:jobNotFoundError});
   }
   if(jobFound.recruiterId!==loggedInRecruiterId){
    return res.render('error',{error:unauthorizedError});
  }
   next();
}