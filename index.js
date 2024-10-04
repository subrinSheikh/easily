


import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import JobController from './src/controllers/job.controller.js';
import UserController from './src/controllers/user.controller.js';
import { uploadImg, uploadPdf } from './src/middlewares/file-upload.middleware.js.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';
import { authorizeJobOwner } from './src/middlewares/authorized.middleware.js';
import { validateRequest } from './src/middlewares/validation.middleware.js';
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';
import { setUserLocals } from './src/middlewares/setUserLocals.middleware.js';

const jobController = new JobController();
const usercontroller = new UserController();
const app = express();
const port = 4000;
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));
app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(setLastVisit);
app.use(session({
    secret:`{Y$'z0;y{%(0/S.k]fwcXILvEI_AfHI0`,
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))
app.use(setUserLocals);





app.get('/', jobController.getMainPage);
app.get('/postjob', auth,jobController.getJobForm);
app.post('/',auth,uploadImg.single("imgurl"),jobController.addNewJob);//done new job
app.get('/jobs', jobController.getJob);//done all jobs
app.get('/job/:id', jobController.getJobById);//done specific


//search
app.post('/search',jobController.postSerachView);

//update
app.get('/job/update-job/:id',auth,authorizeJobOwner, jobController.getUpdateJobView);
app.post('/job/:id',auth,authorizeJobOwner,uploadImg.single('imgurl'),jobController.postUpdatedView);//use a put method for updation

//delete
// app.post('/job/delete/:id',auth,jobController.getDeleteJob);
app.get('/job/delete/:id',auth,authorizeJobOwner,jobController.getDeleteJob);


//logout
app.get('/logout',usercontroller.logout);


//applicants
app.get('/apply-form/:id', jobController.getApplyForm);
app.get('/job/applicants/:id',auth,authorizeJobOwner,jobController.getAllApplicants);//auth
app.post('/apply-form/:id', uploadPdf.single('pdf'), jobController.PostApplicant);
const pathR = path.resolve();

//register
app.get('/register',usercontroller.getRegister);
app.get('/login',usercontroller.getLogin);
app.post('/register',validateRequest,usercontroller.postRegister);
app.post('/login',validateRequest,usercontroller.postLogin);



app.listen(port, () => {
    // console.log(pathR);
    console.log(`listening at port ${port}`);
})