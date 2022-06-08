const { Router } = require("express");
const { typesToDb } = require("../controllers/getTypes");
const router = Router();

router.get("/", (req, res, next) => {
  typesToDb()
    .then((r) => res.status(200).json(r))
    .catch((e) => res.status(400).json(e));
});

module.exports = router;
