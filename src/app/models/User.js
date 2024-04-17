import { Model, Sequelize } from "sequelize";
import bcrypt from "bcryptjs";
import Team from "./Team";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        ra: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "users",
      }
    );

    this.addHook("beforeSave", async (user) => {
      // antes de salvar o usuario este codigo é chamado
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
  }

  checkePassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate() {
    this.belongsTo(Team, { foreignKey: "team_id" });
  }
}

export default User;

