import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";

const Exercise = props => (
  <tr>
    <td>{props.exercise.name}</td>
    <td>{props.exercise.calories}</td>
    <td>
      <Link to={"edit/"+props.exercise._id}><button type="button" class="btn btn-success">Edit</button></Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}><button type="button" class="btn btn-danger">Delete</button></a>
    </td>
  </tr>
)

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:8080/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <br />
        <h3><center>Exercise List</center></h3>
        <br />
        <center>
        <table className="table table-striped table-bordered w-50 h-75">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
          
        </table>
        <a href="/exercises/create"><button type="button" class="btn btn-primary ">Create Exercise</button></a> <br /> <br />
        <a href="/dashboard/"><button type="button" class="btn btn-secondary ">Go back to Dashboard</button></a>
        </center>
      </div>
    )
  }
}