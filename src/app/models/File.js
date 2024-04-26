import { Model, Sequelize } from "sequelize";
import User from "./User";

class File extends Model {
  static init(sequelize) {
    // sequelize = connection
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "files",
      }
    );

    return this;
  }
  
}

export default File;
