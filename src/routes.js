import { Router } from "express";
import UserController from "./app/controllers/UserController";
import TeamController from "./app/controllers/TeamController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.get("/",(req,res)=>{
     return res.render('index');
});

//GET
routes.get('/user/create',UserController.pageCreateUser)
routes.get('/user/login',UserController.login)


//POST
routes.post('/user/store',UserController.store)
routes.post('/session',SessionController.store);



export default routes;
