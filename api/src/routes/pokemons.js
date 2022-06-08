const { Router } = require("express");
const router = Router();

const { getPokemons } = require("../controllers/getAllPokemons");
const { idPokemons } = require("../controllers/getIdPokemons");
const { queryPokemons } = require("../controllers/getQueryPokemons");
const { createPokemon } = require("../controllers/postPokemon");

router.get("/", (req, res, next) => {
  const { name } = req.query;

  if (!name) {
    getPokemons()
      .then((r) => res.send(r))
      .catch((e) => res.status(400).send(e));
  }

  if (name) {
    queryPokemons(name)
      .then((r) => res.send(r))
      .catch((e) => res.status(404).send(e));
  }
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  idPokemons(id)
    .then((p) => res.send(p))
    .catch((e) => res.status(404).send(e));
});

router.post("/", (req, res, next) => {
  const {
    name,
    image,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
    createdInDb,
    types,
  } = req.body;

  createPokemon(
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
  )
    .then((r) => res.send(r))
    .catch((e) => res.status(406).send(e));
});

module.exports = router;
