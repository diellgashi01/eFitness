import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Navbar/Navbar";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCalories = this.onChangeCalories.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      calories: 0
    }
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeCalories(e) {
    this.setState({
      calories: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      name: this.state.name,
      calories: this.state.calories
    }

    console.log(exercise);

    axios.post('http://localhost:8080/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/exercises';
  }

  render() {
    return (
    <div>
        <div>
          <Navbar />
        </div>
    <center>
      <h3>Create New Exercise</h3>
      <form onSubmit={this.onSubmit}>
            <div className="form-group w-50 h-50"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control w-25 h-50"
                value={this.state.name}
                onChange={this.onChangeName}
                />
            </div>
            <br />
            <div className="form-group w-50 h-50">
            <label>Calories: </label>
            <input 
                type="text" 
                className="form-control w-25 h-50"
                value={this.state.calories}
                onChange={this.onChangeCalories}
                />
            </div>
            <br />
            <div className="form-group w-50 h-50">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary " />
            </div>
            <br />
            <div className="form-group w-25 h-25">
                <a href="/exercises"><button type="button" class="btn btn-secondary ">Go Back To List</button></a>
            </div>
      </form>
      </center>
    </div>
    )
  }
}