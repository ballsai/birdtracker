const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const birdSchema = new Schema({
    bird_id: { type: String},
    time_stamp: { type: String},
    lat:{ type: String},
    lng:{ type: String}
},{
    versionKey: false    
});

const Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;