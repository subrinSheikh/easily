import UserModel from "../models/user.model.js";

export default class UserController {

    getRegister(req,res){
        res.render('register',{err:null}) 
    }
    getLogin(req,res){
        res.render('login',{err:null});
    }
    postRegister(req,res){        
        const{name,email,password}=req.body;
        UserModel.addUser(name,email,password);
        res.redirect('login');
    }
    postLogin(req,res){
        const error='Pls Register or Invalid Login.';
        const{email,password}=req.body;        
        const authLogin=UserModel.authenticateuser(email,password);
        const user=UserModel.getUserByEmail(email);
        
        
        if(authLogin){
            req.session.userEmail=email;
            req.session.userName=user.name;
            req.session.userId=user.id;
            res.redirect('jobs')
        }
        else{
            res.render('error',{error});
        }
        // console.log(user,"recruiter");

    }

    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
               console.log(err);
               
            }else{
               res.redirect('login')
            }
        })
    }
    
    
}