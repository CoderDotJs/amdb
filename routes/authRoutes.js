const { register, login, profile } = require("../controllers/userControllers");
const { verifyJwt } = require("../utils/verifyJwt");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", verifyJwt, profile);

module.exports = router;
