export const  auth=(req,res,next)=>{
    const error= 'Unauthorized. Please log in with an authorized recruiter id.';
    if(req.session.userEmail && req.session.userName && req.session.userId){
        next();
    }
    else{
        // res.redirect('/login')
        return res.render('error',{error});


    }
}