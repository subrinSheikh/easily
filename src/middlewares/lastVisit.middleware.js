// export const setLastVisit=(req,res,next)=>{
//     if(req.cookies.lastVisit){
//         res.locals.lastVisit= new Date(req.cookies.lastVisit).toLocaleString();  
//     }
//     res.cookie('lastVisit',new Date().toISOString(),{
//         maxAge:10*24*60*60*1000
//     }  );
//     next();
// }



export const setLastVisit = (req, res, next) => {
    if (req.cookies.lastVisit) {
      res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();  
    }
  
    // Update the cookie only after reading the previous value
    res.cookie('lastVisit', new Date().toISOString(), {
      maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
      httpOnly: true
    });
  
    next();
  };
  