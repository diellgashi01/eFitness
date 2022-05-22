const router = require('express').Router();
let Tracker = require('../models/Tracker');

router.route('/').get((req, res) => {
  Tracker.find()
    .then(trackers => res.json(trackers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const exercise = req.body.exercise;
  const setMinute =Number(req.body.setMinute);
  const exerciseCalories = Number(req.body.exerciseCalories);
  const date = Date.parse(req.body.date);

  const newTracker = new Tracker({
    exercise,
    setMinute,
    exerciseCalories,
    date,
  });

  newTracker.save()
  .then(() => res.json('Tracker added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Tracker.findById(req.params.id)
    .then(tracker => res.json(tracker))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Tracker.findByIdAndDelete(req.params.id)
    .then(() => res.json('Tracker deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Tracker.findById(req.params.id)
    .then(tracker => {
      tracker.exercise = req.body.exercise;
      tracker.setMinute = Number(req.body.setMinute);
      tracker.exerciseCalories = Number(req.body.exerciseCalories);
      tracker.date = Date.parse(req.body.date);

      tracker.save()
        .then(() => res.json('Tracker updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;