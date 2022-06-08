const { typesToDb } = require("../controllers/getTypes");
const { Pokemon, Type } = require("../db");
const { parsedPokemons } = require("../utils/functions/parsedPokemons");

async function createPokemon(
  name,
  image,
  health,
  attack,
  defense,
  speed,
  height,
  weight,
  createdInDb,
  types
) {
  await typesToDb();

  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { name: name },
    defaults: {
      image,
      health,
      attack,
      defense,
      speed,
      height,
      weight,
      createdInDb,
    },
  });

  if (!created) throw `The pokemon ${pokemon.name} already exist`;

  for (let i = 0; i < types.length; i++) {
    const tipo = await Type.findOne({ where: { name: types[i] } });
    await pokemon.addType(tipo);
  }

  const response = await Pokemon.findOne({
    where: { name: name },
    include: Type,
  });

  return {
    message: `The pokemon ${response.name} was created succesfully`,
    pokemon: parsedPokemons(response, true),
  };
}

module.exports = { createPokemon };
