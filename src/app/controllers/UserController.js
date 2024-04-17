import { password } from "../../config/database";
import User from "../models/User";

class UserController {
  async store(req, res) {
    return res.render('index')
  }
}

export default new UserController();
