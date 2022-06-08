function parsedPokemons(p, db = false) {
  if (!db) {
    const objResponse = {
      id: p.id,
      name: p.name,
      health: p.stats[0].base_stat,
      attack: p.stats[1].base_stat,
      defense: p.stats[2].base_stat,
      speed: p.stats[5].base_stat,
      height: p.height,
      weight: p.weight,
      image: p.sprites.other["official-artwork"].front_default,
      types:
        p.types.length > 1
          ? [p.types[0].type.name, p.types[1].type.name]
          : p.types[0].type.name,
      created: false,
    };
    return objResponse;
  }

  if (db) {
    p = p.toJSON();
    const objResponse = {
      id: p.id,
      name: p.name,
      health: p.health,
      attack: p.attack,
      defense: p.defense,
      speed: p.speed,
      height: p.height,
      weight: p.weight,
      image: p.image,
      types:
        p.types.length > 1
          ? [p.types[0].name, p.types[1].name]
          : p.types[0].name,
      created: db,
    };
    return objResponse;
  }
}

module.exports = { parsedPokemons };
