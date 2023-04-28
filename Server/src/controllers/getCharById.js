//const URL = "https://rickandmortyapi.com/api/character";
// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios(`http://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then(({ name, gender, species, origin, image, status }) => {
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };

//       return res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       return res
//         .writeHead(500, { "Content-type": "text/plain" })
//         .end(error.message);
//     });
// };

// module.exports = {
//   getCharById,
// };

const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, res) => {
  // const { id } = req.params;

  // axios(`${URL}/${id}`)
  //   .then((response) => response.data)
  //   .then(({ status, name, species, origin, image, gender }) => {
  //     if (name) {
  //       const character = {
  //         id,
  //         name,
  //         species,
  //         origin,
  //         image,
  //         gender,
  //         status,
  //       };
  //       return res.status(200).json(character);
  //     }

  //     return res.status(404).send("Not found");
  //   })
  //   .catch((error) => res.status(500).send(error.message));

  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    if (!data.name) throw Error(`Faltan datos del personaje con el ID: ${id}`);
    // if (data.name) {
    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };
    return res.status(200).json(character);
    // }
    // return res.status(404).send("Not found");
  } catch (error) {
    error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.response.data.error);
    // console.log(error.response.data.error);
  }
};

module.exports = {
  getCharById,
};
