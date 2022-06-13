import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";

const User = props => (
  <tr>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
    <td>{props.user.email}</td>
    <td>{props.user.role}</td>
    <td>
      <a href="#" onClick={() => { props.deleteUser(props.user._id) }}><button type="button" class="btn btn-danger">Delete</button></a>
    </td>
  </tr>
)

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this)

    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/usersCRUD/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:8080/api/usersCRUD/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <br />
        <h3><center>User List</center></h3>
        <br />
        <center>
        <table className="table table-striped table-bordered w-50 h-75">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
          
        </table>
        <a href="/users/create"><button type="button" class="btn btn-primary ">Create User</button></a> <br /> <br />
        <a href="/dashboard/"><button type="button" class="btn btn-secondary ">Go back to Dashboard</button></a>
        </center>
      </div>
    )
  }
}