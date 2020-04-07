const Box = require('../models/Box');

module.exports = {
    async store(req, res){
        const {title} = req.body;
        const box = await Box.create({title})
        return res.json(box)
    }
}