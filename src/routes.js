import { Router } from "express";
import UserController from "./app/controllers/UserController";
import TeamController from "./app/controllers/TeamController";
import SessionController from "./app/controllers/SessionController";
import auth from "./app/middlewares/auth";
import Team from "./app/models/Team";

const routes = new Router();

routes.get("/", async (req, res) => {
     await Team.findAll({
       order: [["name", "ASC"]],
     }).then((teams) =>
       req.session.user
         ? res.render("index", { teams: teams, user: req.session.user })
         : res.render("index", { teams: teams, user: undefined })
     );
   });
   

//ALL USERS
//GET
routes.get('/user/create',UserController.pageCreateUser)
routes.get('/user/login',UserController.pageLogin)

//POST
routes.post('/user/store',UserController.store);
routes.post('/session',SessionController.store);


//ADMIN USERS
routes.use(auth);

//GET
routes.get('/admin/user/homePage',UserController.pageHome);
routes.get('/admin/team/create',TeamController.pageCreateTeam);
routes.get('/admin/team/newPlayer',TeamController.pageNewPlayer)
routes.get('/logout',SessionController.logout)
//POST
routes.post('/admin/team/store',TeamController.store);
routes.post('/admin/team/addPlayer',TeamController.addPlayer);

export default routes;
