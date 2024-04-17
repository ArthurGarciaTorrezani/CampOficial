import express, { json } from "express";
import routes from "./routes";


class App {
  constructor() {
    this.server = express();
    this.routes();
  }

  middlewares() {
    // register all application middlewares
    this.server.use(json()); // send request and receive answers with json
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
