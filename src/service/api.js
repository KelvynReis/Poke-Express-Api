const axios = require("axios");

const api = axios.create({
  baseURL: "http://pokeapi.co/api/v2/",
});

module.exports = api;
