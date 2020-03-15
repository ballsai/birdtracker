const express = require('express');
const router = express.Router();
const Bird = require('../models/Bird');

// GET METHOD
router.get('/', (req, res) => {
    Bird.find()
        .then(birds => res.json(birds));
});

//POST METHOD
router.post('/', (req, res) => {
    const newBird = new Bird({
        bird_id: req.body.bird_id,
        time_stamp: req.body.time_stamp,
        lat: req.body.lat,
        lng: req.body.lng
    });

    newBird.save().then(birds => res.json(birds));
});

module.exports = router;