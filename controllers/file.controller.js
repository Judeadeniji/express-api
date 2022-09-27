const uploadFile = require('../middlewares/multer');
const fs = require('fs');

upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({message: 'Please upload a file'})
        }

    res.status(200).send({
        message: 'upload successful '+ req.file.originalname
    });
    }
    catch (err) {
        	res.status(401).send({
                message: err
            })
   }
},

getListFiles = (req, res) => {
    const directory = '../db/uploads';

    fs.readdir(directory, function (err, files) {
        
        let fileInfos = [];
        
        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: directory + file
            });
        });
        if (err) {
            res.send("An error Occured")
        }

        res.status(200).send(fileInfos);
    });
}

module.exports = {
    upload,
    getListFiles
};