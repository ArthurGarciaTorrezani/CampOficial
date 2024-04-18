import express, { json } from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import session from "express-session";
import path from "path";
import "./database";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // register all application middlewares
    this.server.use(json()); // send request and receive answers with json
    this.server.use(
      session({
        resave: true,
        saveUninitialized: true,
        secret: "05112003", // session security
        cookie: { maxAge: 30000 }, // session duration
      })
    );
    this.server.use(express.static(path.join(__dirname, "public"))); // isso daqui é pra nao precisar de colocar todo o caminho da pasta
    this.server.set("view engine", "ejs");
    this.server.set("views", path.join(__dirname, "views"));
    // set body-parser for use forms
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
