const {User} = require("../DB_connection");
const { login } = require("../controllers/login");

const register = async (req, res) => {
  const { password, id, email } = req.body;
  console.log(":::::::::::::::::", password, id, email);
  try {
    if (!login) {
        res.status(404).json({ message: "error" });
    }
    
    const user = await User.create({ password, email, id });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

module.exports = {
  register,
};