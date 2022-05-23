import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
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

  componentDidMount() {
    axios.get('http://localhost:8080/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          calories: response.data.calories,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
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

    axios.post('http://localhost:8080/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group">
          <label>Calories: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.calories}
              onChange={this.onChangeCalories}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}