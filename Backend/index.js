const express = require('express');
const debug = require('debug')('app:main');
const { Config }=require('./src/config');
const cors = require('cors');
const {activitiesAPI} = require('./src/activities');

const app = express();

app.use(cors()); // Use CORS middleware
app.use(express.json());
activitiesAPI(app);


app.listen(Config.port, () => {
    debug(`Example app listening at http://localhost:${Config.port}`);
    });

