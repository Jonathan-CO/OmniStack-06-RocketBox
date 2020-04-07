const File = require('../models/File');
const Box = require('../models/Box');

module.exports = {
    async store(req, res){

        const box =  await Box.findById(req.params.id); // passado pela url
        const file = await File.create({
            title: req.file.originalname, // dados do multerConfig
            path: req.file.key,
        });

        box.files.push(file);

        await box.save();

        return res.json(file);
    }
}