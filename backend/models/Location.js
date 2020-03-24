const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    bird_id: { type: String},
    date: {type: String},
    time: { type: String},
    coordinates: {
        lat: {type: Number},
        lng: {type: Number}
    }
},{
    versionKey: false    
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;