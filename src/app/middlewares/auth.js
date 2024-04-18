export default async(req,res,next)=>{
     if(req.session.user  != undefined){
      return next();
     }
     res.redirect("/");
 }