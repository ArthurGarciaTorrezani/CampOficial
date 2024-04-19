import User from "../models/User";
import Team from "../models/Team";
import File from "../models/File";
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

  async pageHome(req, res) {
    let nameFile;
    const file = await File.findByPk(req.session.user.avatar_id);
    if(file == null){
      nameFile = "padrao.webp";
    }else{
      nameFile =file.name;
    }
   
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
        nameAvatar:nameFile,
      });
    });
  }

  pageProfile(req,res){
    return res.render('admin/user/profile',);
  }

  pageAvatar(req,res){
    return res.render("admin/user/avatarPage",{user:req.session.user});
  }
}
export default new UserController();
