const axios = require("axios");

const listarStarships = async (event) => {
  try {
    const listaStarship = [];

    for (let i = 9; i < 13; i++) {
      const url = `https://swapi.dev/api/starships/${i}/`;
      const response = await axios.get(url);
      const data = response.data;

      const mappedData = {
        nombre: data.name,
        fabricante: data.manufacturer,
        modelo: data.model,
      };

      listaStarship.push(mappedData);
    }

    return {
      status: 200,
      body: { listaStarship },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listarStarships,
};
