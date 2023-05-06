const { login } = require("../controllers/login");
const { register } = require("../controllers/register");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.get("/login", login);

router.post("/register", register);

router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = router;

//     if (!email || !password) {
//         return res
//         .status(500)
//         .json({ message: "There isn't a password or email" });
//     }

//  if (password === DB_PASSWORD && email === DB_EMAIL) {
//       res.status(STATUS_OK).json({ access: true });
//     } else {
//       // console.log("in error");
//       res.status(STATUS_OK).json({ access: false });
//     }