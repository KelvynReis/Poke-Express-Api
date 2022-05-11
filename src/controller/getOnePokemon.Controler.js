const api = require("../service/api");

exports.OnePokemon = async (req, res) => {
  var selectPokemonId = req.params.id;

  await api
    .get(`pokemon/${selectPokemonId}`)
    .then((response) => {
      console.log(selectPokemonId);
      const pokemon = response.data;
      return res.json({
        pokemon: {
          id: pokemon.id,
          name: pokemon.name,
          imageURL: pokemon.sprites.front_default,
        },
      });
    })
    .catch((e) => console.log(e));
};
