import multer from "multer";
import crypto from "crypto";
import { extname, resolve } from "path";

export default {
  // como o multer vai gravar os arquivos de imagem
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "public", "img","uploads"),
    filename: (req, file, cb) => {
      // adicionar codigo unico antes de toda imagem para transformar cada imagem em um arquivo unico
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);   
        return cb(null, res.toString('hex')+extname(file.originalname));
      });
    },
  }),
};
