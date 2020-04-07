const Box = require('../models/Box');

module.exports = {
    async store(req, res){
        const {title} = req.body;
        const box = await Box.create({title})
        return res.json(box)
    },

    async show(req, res){
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort:{created_At: -1}}
        });
        res.json(box)
    }   
}