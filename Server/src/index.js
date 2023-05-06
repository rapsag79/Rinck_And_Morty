// const http = require("http");
// const data = require("./utils/data");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);

//       const characterFound = data.find((character) => character.id === +id);

//       return res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(characterFound));
//     }
//   })
//   .listen(3001, "localhost");

// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");
// // const data = require("./utils/data");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     // if (req.url.includes(`/rickandmorty/character`)) {
//     //   const id = req.url.split("/").at(-1);
//     //   // console.log(typeof +id);

//     //   const characterFound = data.find((character) => character.id === id);

//     //   // console.log(characterFound);

//     //   return res
//     //     .writeHead(200, { "Content-type": "application/json" })
//     //     .end(JSON.stringify(characterFound));
//     //   // getCharById(res, +id);
//     // }

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);

//       getCharById(res, +id);
//     }
//   })
//   .listen(3001, "localhost");
// // .listen(3001);

// const express = require("express");
// const server = express();
// const router = require("./routes/index");
// const morgan = require("morgan");

// server.use(express.json());
// server.use(morgan("dev"));

// server.use((req, res, next) => {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Credentials", "true");
  //   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// server.use("/rickandmorty", router);

const { server } = require("./app");
const{conn} = require("./DB_connection")

const PORT = 3001;

server.listen(PORT,async () => {
  console.log(`Seerver raised in port: ${PORT}`);
  await conn.sync({force:true})
});