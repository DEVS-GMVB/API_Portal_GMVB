const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const objHash = new Object();

module.exports = {
  dest: path.resolve(__dirname, "..", "tmp", "uploads", "assistencia24h", "banco", "retorno"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "tmp", "uploads", "assistencia24h", "banco", "retorno"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const filename = `${file.originalname}`;

        cb(null, filename);

        objHash[filename] = filename;

        req.body.hash = objHash;
      });
    },

  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    const allowedMimes = [
      ".jpg",
      ".png",
      ".pdf",
      ".doc",
      ".docx",
      ".txt"
    ];

    if (allowedMimes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("formato invalido"))
    }
  }
};