import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { ra, password } = req.body;

    const user = await User.findOne({ where: { ra: ra } });

    if (!user) {
      return res.redirect("/");
    }

    if (!(await user.checkePassword(password))) {
      //se a senha nao bater
      return res.redirect("/");
    }

    const { id, name, team_id } = user;
    req.session.user = {
      id: id,
      name: name,
      team_id: team_id,
    };
    return res.redirect("/admin/user/homePage");
  }

  logout(req,res){
    req.session.user = undefined;
    return res.redirect("/");
  }
}

export default new SessionController();
