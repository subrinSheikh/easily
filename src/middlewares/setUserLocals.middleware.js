export const setUserLocals=(req,res,next)=>{
    if(req.session.userEmail && req.session.userName){
        res.locals.userEmail=req.session.userEmail;
        res.locals.userName=req.session.userName;
        res.locals.userId=req.session.userId
    }else{
        res.locals.userEmail=null;
        res.locals.userName=null;
        res.locals.userId=null;

    }
    next();
}