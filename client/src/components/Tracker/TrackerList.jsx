import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";

const Tracker = props => (
  <tr>
    <td>{props.tracker.exercise}</td>
    <td>{props.tracker.setMinute}</td>
    <td>{props.tracker.exerciseCalories}</td>
    <td>{props.tracker.totalCalories}</td>
    <td>{props.tracker.date.substring(0,10)}</td>
    <td>
      <a href="#" onClick={() => { props.deleteTracker(props.tracker._id) }}><button type="button" class="btn btn-danger">Delete</button></a>
    </td>
  </tr>
)

export default class TrackerList extends Component {
  constructor(props) {
    super(props);
    this.state = {trackers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/trackers/')
      .then(response => {
        this.setState({ trackers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTrackers(id) {
    axios.delete('http://localhost:8080/trackers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      trackers: this.state.trackers.filter(el => el._id !== id)
    })
  }

  trackerList() {
    return this.state.trackers.map(currenttracker => {
      return <Tracker tracker={currenttracker} deleteTracker={this.deleteTracker} key={currenttracker._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <br />
        <center>
        <h3>Exercise Tracker</h3>
        <br />
        <table className="table table-striped table-bordered w-50 h-75">
          <thead className="thead-light">
            <tr>
              <th>Exercise</th>
              <th>Sets / Minutes</th>
              <th>Exercise Calories</th>
              <th>Total Calories</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.trackerList() }
          </tbody>
        </table>
        </center>
      </div>
    )
  }
}
