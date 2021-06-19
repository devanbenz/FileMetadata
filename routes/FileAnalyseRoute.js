const { metadataController } = require('../controllers/MetaDataController')
const express = require('express')
const router = express.Router()
const multer = require('multer')
let upload = multer()

router.route('/').post(upload.single('upfile'),metadataController)

module.exports = router