import { Model, Sequelize } from "sequelize";
import User from "./User";
class Team extends Model {
  static init(sequelize) {
    // sequelize = connection
    super.init(
      {
        name: Sequelize.STRING,
        amountplayers: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: "teams",
      }
    );
  }

  static associate() {
    this.hasMany(User);
  }
}

export default Team;

