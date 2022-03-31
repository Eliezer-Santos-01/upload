const express = require('express');
const routes = express.Router();
const control = require("../controller/control")
const uploadeImage = require("../middlewares/uploadImage")

routes.get('/', control.getHello )

routes.post('/uplod-image',uploadeImage.single('image'), control.postImg)

module.exports = routes