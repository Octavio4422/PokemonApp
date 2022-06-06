const { typesToDb } = require("../controllers/getTypes");
const { Pokemon, Type } = require("../db");

async function createPokemon( name, image, health, attack, defense, speed, height, weight, createdInDb, types) {
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

  if (!created) throw "INCORRECTO";

  console.log(types)
  await Type.findAll({
    where: {
      name: types,
    },
  }).then((t) => {
    console.log(t);
    pokemon.addType(t[0].dataValues.id)
  });

  return "Creado piolamente";
}

module.exports = { createPokemon };
