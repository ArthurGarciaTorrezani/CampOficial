import User from "../models/User";

class UserController {
  async store(req, res) {
    const userExistEmail = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExistEmail) {
      return res.status(400).json({ error: "user alread exist" }); // time ja existe
    }

    const userExistRa = await User.findOne({ where: { ra: req.body.ra } });
    if (userExistRa) {
      return res.status(400).json({ error: "user alread exist" }); // time ja existe
    }

    User.create(req.body).then(res.redirect("/"));
  }

  pageCreateUser(req, res) {
    return res.render("user/createUser");
  }

  login(req,res){
    return res.render("user/login");
  }
}
export default new UserController();
