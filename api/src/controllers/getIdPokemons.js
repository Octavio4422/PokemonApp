const axios = require("axios");

const { Pokemon, Type } = require("../db");

const { API_POKEMON_NAME_OR_ID } = require("../utils/enviroment/globals");
const { parsedPokemons } = require("../utils/functions/parsedPokemons");

async function apiPokemon(id) {
  const fixedId = id.trim();

  try {
    const initialRequest = await axios.get(API_POKEMON_NAME_OR_ID + fixedId);
    const pokemonRequest = initialRequest.data;
    const pokemon = parsedPokemons(pokemonRequest);
    return pokemon;
  } catch (e) {
    console.error(e.message);
  }
}

async function dbPokemon(id) {
  try {
    const fixedId = id.trim();

    const initialRequest = await Pokemon.findByPk(fixedId, { include: Type });
    const pokemon = parsedPokemons(initialRequest, true);

    if (pokemon === null) return false;

    return pokemon;
  } catch (e) {
    console.error(e.message);
  }
}

async function idPokemons(id) {
  if (id > 0 && id <= 40) {
    const api = await apiPokemon(id);
    if (api) return api;
  }

  const db = await dbPokemon(id);
  if (db) return db;

  throw "Pokemon not found";
}

module.exports = { idPokemons };
