const express = require('express');
const directorController = require('./../controllers/directorController');

const router = express.Router();

router.route("/").get(directorController.getAllDirector);

module.exports = router;