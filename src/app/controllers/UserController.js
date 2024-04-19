import User from "../models/User";
import Team from "../models/Team";

class UserController {
  async store(req, res) {
    const userExistEmail = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExistEmail) {
      return res.status(400).json({ error: "email alread exist" }); // time ja existe
    }

    const userExistRa = await User.findOne({ where: { ra: req.body.ra } });
    if (userExistRa) {
      return res.status(400).json({ error: "ra alread exist" }); // time ja existe
    }

    User.create(req.body).then(res.redirect("/"));
  }

  pageCreateUser(req, res) {
    return res.render("user/createUser");
  }

  pageLogin(req, res) {
    return res.render("user/login");
  }

  pageHome(req, res) {
    Team.findOne({
      where: {
        id: req.session.user.team_id,
      },
      include: [
        {
          model: User,
        },
      ],
    }).then((team) => {
      res.render("admin/user/homePage", {
        team: team,
        user: req.session.user,
      });
    });
  }
}
export default new UserController();
/*
team_id: req.session.user.team_id,
        user_id:req.session.user.id,
        user_name:req.session.user.name,
*/
