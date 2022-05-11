const express = require("express");
const route = express.Router();
const HomePoke = require("./src/controller/getAllPokemon.Controller");
const OnePoke = require("./src/controller/getOnePokemon.Controler");

route.get("/pokemon", HomePoke.homePokemon);
route.get("/pokemon/:id", OnePoke.OnePokemon);

module.exports = route;
