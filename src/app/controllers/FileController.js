import File from "../models/File";
import User from "../models/User";

class FileController {
  async store(req, res) {
    const { filename, path } = req.file;
    const userId = req.session.user.id;

    const file = await File.create({
      name: filename,
      path: path,
    });

    User.update(
      {
        avatar_id: file.id,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    req.session.user.avatar_id = file.id;
    return res.redirect('/admin/user/homePage');
  }
}

export default new FileController();
