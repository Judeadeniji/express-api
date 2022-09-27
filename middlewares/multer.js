const multer = require('multer'),
diskStorageToUploads = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../db/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-uploaded')
    }
});

const saveToUploads = multer({
    storage: diskStorageToUploads
});

module.exports + {
    saveToUploads: saveToUploads.single('file')
}