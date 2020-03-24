const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const birdSchema = new Schema({
    id: { type: String},
    name: { type: String},
    age: {type: Number},
    species: {type: String}
},{
    versionKey: false    
});

const Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;