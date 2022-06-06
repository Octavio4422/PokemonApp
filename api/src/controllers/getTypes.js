const axios = require("axios");
const { Type } = require("../db");
const { API_POKEMON_TYPE } = require("../utils/enviroment/globals");

async function typesToDb() {
  try {
    const verifyDb = await Type.findAll();
    if (verifyDb.length) return verifyDb;

    const initialRequest = await axios.get(API_POKEMON_TYPE);
    const types = initialRequest.data.results;

    for (let i = 0; i < types.length; i++) {
      await Type.create({
        name: types[i].name,
      });
    }

    const response = await Type.findAll();
    return response;
  } catch (e) {
    console.error(`Error in typesToDataBase: ${e.message}`)
    return e
  }
}

module.exports = { typesToDb };
