// conexao com db e carregar os models
import Sequelize from "sequelize";
import Team from "../app/models/Team";
import User from "../app/models/User";
import databaseConfig from "../config/database";

const models = [Team, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate());
  }
}

export default new Database();

