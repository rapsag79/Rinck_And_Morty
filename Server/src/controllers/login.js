const users = require("../utils/users");

const login = (req, res) => {
  try {
    const { email, password } = req.query;

    const userFound = users.find((user) => user.email === email && user.password === password)

    // return userFound
    // ? res.status(200).json({ access: true })
    // : res.status(404).json({ access: false })

    if(userFound) return res.status(200).json({ access: true })
    
  } catch (error) {
  return res.status(404).json({ access: false})
    
  }
  }
  
  
  module.exports = {
        login
};

// const users = require('../utils/users');

// const login = (req, res) => {
// try {
//   const { email, password } = req.query;
  
//     const userFound = users.find(
//       (user) => user.email === email && user.password === password
//       );
//     // return userFound
//     //   ? res.status(200).json({ access: true })
//     //   : res.status(400).json({ access: false });

//     if (userFound) return res.status(200).json({ access: true });

//   } catch {
//     console.error(error);
//   return res.status(400).json({ access: false });
    
//   }
// }
// module.exports = {
//   login,
// };

// const users = require("../utils/users");

// const login = (req, res) => {
//   const { email, password } = req.query;

//   console.log(users);

//   const userFound = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   console.log(userFound);
//   // return userFound
//   //   ? res.status(200).json({ access: true })
//   //   : res.status(400).json({ access: false });

//   if (userFound) return res.status(200).json({ access: true });

//   return res.status(404).json({ access: false });
// };

// module.exports = {
//   login,
// };