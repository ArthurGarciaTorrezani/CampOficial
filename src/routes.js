import { Router } from "express";
import UserController from "./app/controllers/UserController";
import TeamController from "./app/controllers/TeamController";

const routes = new Router();

routes.get("/",UserController.store);


export default routes;
