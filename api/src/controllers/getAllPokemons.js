const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { API_POKEMONS } = require("../utils/enviroment/globals");
const { parsedPokemons } = require("../utils/functions/parsedPokemons");

async function apiPokemons() {
  try {
    const initialRequest = await axios.get(API_POKEMONS);
    const pokemonsUrl = initialRequest.data.results.map((r) => r.url);
    const pokemonsRequest = await axios.all(
      pokemonsUrl.map((url) => axios.get(url))
    );
    const pokemons = pokemonsRequest.map((p) => parsedPokemons(p.data));
    return pokemons;
  } catch (e) {
    console.error(`Error in apiPokemons: ${e.message}`);
    return e;
  }
}

async function dbPokemons() {
  try {
    const initialRequest = await Pokemon.findAll({ include: Type });
    if (initialRequest === undefined) return;
    const response = initialRequest.map((dbp) => parsedPokemons(dbp, true));
    return response;
  } catch (e) {
    console.error(`Error in dbPokemons: ${e.message}`);
    return e;
  }
}

async function getPokemons() {
  try {
    const api = await apiPokemons();
    const db = await dbPokemons();

    const response = [...api, ...db];

    return response;
  } catch (e) {
    console.error(`Error in getPokemons: ${e.message}`);
    throw e;
  }
}

module.exports = { getPokemons };
