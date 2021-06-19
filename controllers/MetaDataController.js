//const { db, File } = require('../db/mongodb')

exports.metadataController = (req, res) => {
    res.status(200).json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    }).end()
}