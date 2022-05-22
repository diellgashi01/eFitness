import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateTracker extends Component {
    constructor(props) {
      super(props);

      this.onChangeExercise = this.onChangeexercise.bind(this);
      this.onChangeSetMinute = this.onChangeSetMinute.bind(this);
      this.onChangeExerciseCalories = this.onChangeexerciseCalories.bind(this);
      this.onChangeDate = this.onChangedate.bind(this);
      this.onChangeSubmit = this.onChangeSubmit.bind(this);


      this.state = {
        exercise : '',
        setMinute : 0,
        exerciseCalories : 0,
        date : new Date(),
        exercises: []
      }
    }
    componentDidMount() {
      axios.get('http://localhost:8080/%27')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              exercises: response.data.map(exercise => exercise.exercise),
              exercise: response.data[0].exercise
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
    }

  

    onChangeExercise(e) {
      this.setState({
        exercise: e.target.value

      });
    }
    onChangesetMinute(e) {
      this.setState({
        setMinute: e.target.value

      });
    }
    onChangeExerciseCalories(e) {
      this.setState({
        exerciseCalories: e.target.value

      });
    }
    onChangeDate(date) {
     this.setState({
       date:date
     });
    }
   
    onSubmit(e){
      e.preventDefault();

      const tracker = {

        exercise: this.state.exercise,
        setMinute: this.state.setMinute,
        exerciseCalories: this.state.exerciseCalories,
        date: this.state.date
       
      }

      console.log(tracker);

      axios.post('http://localhost:8080/%27', tracker)
        .then(res => console.log(res.data));
  
      window.location = '/';
    }
  
 

  render() {
    return (
      <div>
          <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Exersise: </label>
          <select ref="exerciseInput"
              required
              className="form-control"
              value={this.state.exercise}
              onChange={this.onChangeExercise}>
              {
                this.state.exercises.map(function(exercise) {
                  return <option 
                    key={exercise}
                    value={exercise}>{exercise}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>setMinute: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.setMinute}
              onChange={this.onChangeSetMinute}
              />
        </div>
        <div className="form-group">
          <label>exerciseCalories (in calories): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.exerciseCalories}
              onChange={this.onChangeExerciseCalories}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form> 
      </div>
    )
  }
}
