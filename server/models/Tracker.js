const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    exercise: {type: String, required: true},
    setMinute: {type: Number, required: true},
    exerciseCalories: {type: Number},
    totalCalories: {type: Number, 
        default: function(){
            return this.setMinute * this.exerciseCalories
        }},
    date: {type: Date, required: true},
}, {
    timestamps: true,
});

const Tracker = mongoose.model('Tracker', trackerSchema);

module.exports = Tracker;