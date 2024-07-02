import { where } from "sequelize";
import { password } from "../../config/database";
import Team from "../models/Team";
import User from "../models/User";

class TeamController {
  async store(req, res) {
    const teamExistName = await Team.findOne({
      where: { name: req.body.name },
    });
    if (teamExistName) {
      return res.status(400).json({ error: "team alread exist" }); // time ja existe
    }

    const team = await Team.create({
      name: req.body.name,
      amountplayers: 1,
      captain_id: req.session.user.id,
      captain_name: req.session.user.name,
    });

    const id = team.id;
    const userId = req.session.user.id;
    req.session.user.team_id = id;
    User.update(
      {
        team_id: id,
      },
      {
        where: {
          id: userId,
        },
      }
    ).then(res.redirect("/admin/user/homePage"));
  }

  async deleteTeam(req,res){
    const id = req.body.team_id;
    await Team.destroy({
      where:{
        id:id,
      }
    })
    return res.redirect("/admin/user/homePage");
  } 

  pageCreateTeam(req, res) {
    return res.render("admin/team/createTeam", { user: req.session.user });
  }

  pageNewPlayer(req, res) {
    User.findAll({
      where: {
        team_id: null,
      },
    }).then((users) => {
      res.render("admin/team/newPlayer", {
        users: users,
        user: req.session.user,
      });
    });
  }

  async addPlayer(req, res) {
    const userId = req.body.id;
    const teamId = req.session.user.team_id;
    const { amountplayers } = await Team.findByPk(teamId);

    Team.update(
      {
        amountplayers: amountplayers + 1,
      },
      {
        where: {
          id: teamId,
        },
      }
    );

    User.update(
      {
        team_id: teamId,
      },
      {
        where: {
          id: userId,
        },
      }
    ).then(() => {
      res.redirect("/admin/user/homePage");
    });
  }

  removePlayer(req, res) {
    const { id } = req.body;
    User.update(
      { team_id: null },
      {
        where: {
          id: id,
        },
      }
    ).then(res.redirect("/admin/user/homePage"));
  }
}

export default new TeamController();
