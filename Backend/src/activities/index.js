const express = require('express');
const {activitiesController}= require('./controller');
const router = express.Router();

module.exports.activitiesAPI = (app) => {
    router
    .get('/', activitiesController.getActivities)
    .get('/:id',activitiesController.getActivity)
    .post('/',activitiesController.createActivity)

    app.use('/api/activities', router);
}