const {activitiesService} = require('./service');
module.exports.activitiesController = {
    getActivities: async (req, res) => {
        try {
          const activities = await activitiesService.getAll();
          res.json(activities);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching activities' });
        }
      },
    getActivity:(req, res) => {},
    createActivity: async (req, res) => {
        try {
          const newActivity = req.body;
          const result = await activitiesService.createActivity(newActivity);
          res.status(201).json(result);
        } catch (error) {
          console.error('An error occurred:', error);
          res.status(500).json({ error: 'An error occurred while creating the activity.' });
        }
      },
  };
  