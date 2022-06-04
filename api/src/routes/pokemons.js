const { Router } = require("express");
const router = Router();
const { getPokemons } = require('../controllers/getAllPokemons')

//Para all y query
router.get("/", (req, res, next) => {
    const {name} = req.query;

    if(!name){
        getPokemons()
        .then((r) => res.send(r))
        .catch((e) => res.status(400).send(e))
    }

    if(name){}
})

router.get("/:id", (req, res, next) => {
    const {id} = req.params
})

router.post("/",(req,res,next) => {})

module.exports = router