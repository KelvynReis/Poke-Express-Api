const api = require("../service/api");

exports.homePokemon = async (req, res) => {
  await api
    .get("pokemon/")
    .then((response) => {
      const pokemon = response.data.results;

      return res.json(pokemon);
    })
    .catch((e) => console.log(e));
};
