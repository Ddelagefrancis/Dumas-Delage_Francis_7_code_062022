const express = require("express");
const router = express.Router();

// importation des middleware 
const auth = require ("../middleware/auth.middleware");
// const multer = require('../middleware/multer-config');

// importation controllers 
const postCtrl = require("../controllers/post.controller");


router.post("/", auth, postCtrl.createPost);


module.exports = router;