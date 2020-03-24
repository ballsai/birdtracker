const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

router.get('/', (req, res) => {
    Location.find()
        .then(locations => res.json(locations))
        .catch(err => console.error(err))
});

router.post('/', (req, res) => {
    const newLocation = new Location({
        bird_id: req.body.bird_id,
        date: req.body.date,
        time: req.body.time,
        coordinates: req.body.coordinates
    });

    newLocation.save()
    .then(location => console.log(location))
    .catch(err => console.error(err))
});

module.exports = router;