const express = require('express');
const router = express.Router();
const Bird = require('../models/Bird');
const Location = require('../models/Location');

// GET METHOD
router.get('/', (req, res) => {
    Bird.aggregate([{
        $lookup:{
            from: Location.collection.name,
            localField: "id",
            foreignField: "bird_id",
            as: "locations"
        }
    }])
    .then(birds => res.json(birds))
});

//POST METHOD
router.post('/', (req, res) => {
    const newBird = new Bird({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        species: req.body.species
    });

    newBird.save()
    .then(bird => console.log(bird))
    .catch(err => console.log(err));
});

module.exports = router;