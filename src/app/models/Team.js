import { Model, Sequelize } from "sequelize";
import User from "./User";

class Team extends Model {
  static init(sequelize) {
    // sequelize = connection
    super.init(
      {
        name: Sequelize.STRING,
        amountplayers: Sequelize.INTEGER,
        captain_name:Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "teams",
      }
    );
  }

  static associate() {
    
    this.belongsTo(User,{foreignKey:'captain_id',as:'captain'})
    this.hasMany(User);
  }
}

export default Team;

