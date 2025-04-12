import e from "express";

export default class UserModel {
   constructor(id, name, email,password, number, pdf ) {
      this.id = id,
         this.name = name, this.email = email,this.password=password, this.number = number, this.pdf = pdf ;
   }
   static allUsers() {
      return users;
   }
   static addUser(name,email,password){
      let newUser=new UserModel(users.length+1,name,email,password);
      users.push(newUser)
   }
   static authenticateuser(email,password){
       return users.find((u)=>u.email==email && u.password==password)
   }
   static getUserByEmail(email){
      return users.find((u)=>u.email==email);
   }
   static getUser(id) {
      return users.find((u) => u.id == id);
   }
  
}


const users = [];
