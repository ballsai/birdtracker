const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.use(express.static(path.join(__dirname, "frontend")));


// Bird info
const birds = require('./routes/birds');
app.use('/api/birds', birds);

// Location info
const locations = require('./routes/locations');
app.use('/api/locations', locations);

//
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/index.html"));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

