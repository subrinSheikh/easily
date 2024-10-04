import JobModel from "../models/job.model.js";
import { sendConfirmationMail } from "../middlewares/sendMail.middleware.js";
const colors = JobModel.color();
let jobs = JobModel.getAll();


export default class JobController {

  getMainPage(req, res) {
    res.render('main',);
  }

  getJob(req, res, next) {
    res.render('jobs', { jobs: jobs, colors: colors, });
  }

  getJobForm(req, res) {
    res.render('newJob', );
  }

  addNewJob(req, res) {
    let { category, desc, location, companyName, salary, skills, apply, openings } = req.body;
    const recruiterId = req.session.userId;
    const imgurl='img/'+req.file.filename;
    // console.log(imgurl,"imgurl");
    
    JobModel.addJob(category, desc, location, companyName, salary, skills, apply, openings,[],recruiterId,imgurl);
    res.redirect('jobs');
  }

  getJobById(req, res) {
    const id = req.params.id;
    const jobFound = JobModel.getId(id);
    const error=`Can't find this job ID`
    if (jobFound) {
      res.render('job', { jobs: [jobFound], colors, });
    }
    else {
      res.render('error',{error});
    }
  }

  getUpdateJobView(req, res) {
    const id = req.params.id;
    let updateJob = JobModel.getId(id);
    const error=`Job not find`;
    // console.log(updateJob,req.body,"get");
    
    if (updateJob) {
      res.render('job-update', { jobs: [updateJob], colors, });
    }
    else {
      res.render('error',{error});
    }
  }

  postUpdatedView(req, res) {
    const imgurl='/img/'+req.file.filename;
    const updatedData = req.body;
    const error=`Job ID is missing.`;

    // console.log(updatedData,"post");
    if (!updatedData.id) {
      res.render('error',{error});
  }

  JobModel.update({...updatedData,imgurl});
  res.redirect('/jobs');
  }


  getDeleteJob(req, res) {
    const id = req.params.id;
    const error=`You are not unauthorized to perform this action.`;

    // console.log(`Deleting job with id: ${id}`);

    const jobDeleted=JobModel.delete(id);
    if(jobDeleted){
      res.redirect('/jobs');

    }else{
      res.render('error',{error});

    }
  }
  getApplyForm(req, res) {
    const id = req.params.id;
    let foundJob=JobModel.getId(id);
    res.render('applyForm', { jobs: foundJob,})
  }
  

  getAllApplicants(req,res){
    const id=req.params.id;
    let applicants=JobModel.allApplicants(id);
    // console.log(applicants,id);
    res.render('applicants',{applicants:applicants,})
  }

   async PostApplicant(req, res) {
    const id=req.params.id;//searching job id particular
    const { name, email, number } = req.body;
    const resumePath = '/pdfs/' + req.file.filename;
    // console.log(req.body,resumePath);
    JobModel.addNewApplicant(id,name, email, number, resumePath);
    await sendConfirmationMail(email);

    const jobFound=JobModel.getId(id);
    res.render('job', { jobs: [jobFound], colors: colors ,});
  
  }


  postSerachView(req,res){
    const n=req.body.name;
    const serachedJobs=JobModel.searchJob(n);
    const error=`Opps! there are no such jobs available right now!!`
    if(serachedJobs.length>0){
      res.render('searchView',{jobs:serachedJobs,colors: colors,error:null})
    }else{
      // res.render('searchView',{jobs:[],colors: colors,error:error})
      res.render('error',{error});


    }
  }
  



}
