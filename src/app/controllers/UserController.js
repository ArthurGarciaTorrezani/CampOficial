import User from "../models/User";
import Team from "../models/Team";
import File from "../models/File";
import * as Yup from "yup";

class UserController {
  async store(req, res) {
    const userSchema = Yup.object({
      name: Yup.string().required(),
      ra: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await userSchema.isValid(req.body))) {
      return res.json(" nao deu");
    }
    const userExistEmail = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExistEmail) {
      return res.render("errors",{error:"E-mail já cadastrado, tente outro!"})
     
    }

    const userExistRa = await User.findOne({ where: { ra: req.body.ra } });
    if (userExistRa) {
      return res.render("errors",{error:"Registro acadêmico já cadastrado, tente outro!"})
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
    if (file == null) {
      nameFile = "padrao.webp";
    } else {
      nameFile = file.name;
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
        nameAvatar: nameFile,
      });
    });
  }

  async pageProfile(req, res) {
    let nameFile;
    const user = await User.findOne({
      where: {
        id: req.session.user.id,
      },
      include: [{ model: File }],
    });

    if (user.file == null) {
      nameFile = "padrao.webp";
    } else {
      nameFile = user.file.name;
    }
    return res.render("admin/user/profile", {
      user: user,
      avatar: nameFile,
    });
  }

  pageAvatarUpdate(req, res) {
    return res.render("admin/user/avatarPage", { user: req.session.user });
  }

  async pageNameUpdate(req, res) {
    const user = await User.findByPk(req.session.user.id);
    return res.render("admin/user/update/nameUpdate", { user });
  }
}

export default new UserController();
