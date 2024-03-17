const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/../../public/admin/demos"); // fotografların yuklenecegi klasör yolu
  },
  filename: function (req, file, cb) {
    cb(null, crypto.randomUUID() + "." + file?.mimetype?.split("/")[1]);
  },
});
const upload = multer({ storage: storage });

module.exports = upload;