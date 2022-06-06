const axios = require("axios");

const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

const { API_POKEMON_NAME_OR_ID } = require("../utils/enviroment/globals");
const { parsedPokemons } = require("../utils/functions/parsedPokemons");

async function apiPokemon(name) {
  const fixedname = name.trim().toLowerCase();

  try {
    const initialRequest = await axios.get(API_POKEMON_NAME_OR_ID + fixedname);
    const pokemonRequest = initialRequest.data;
    const pokemon = parsedPokemons(pokemonRequest);
    return pokemon;
  } catch (e) {
    console.error(e.message);
  }
}

async function dbPokemon(name) {
  const fixedname = name.trim().toLowerCase();

  const initialRequest = await Pokemon.findOne(
    {
      where: { name: { [Op.like]: fixedname }, },
    },
    {
      include: Type,
    }
  );

  if (initialRequest === null) return false;
  
  const response = parsedPokemons(initialRequest, true);
  return response;
}

async function queryPokemons(name) {
  const api = await apiPokemon(name);
  if (api) return api;

  const db = await dbPokemon(name);
  if (db) return db;

  throw "Pokemon not found";
}

module.exports = { queryPokemons };
