import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Navbar/Navbar";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: ''
    }
  }



  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeRole(e) {
    this.setState({
      role: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }

    console.log(user);

    axios.post('http://localhost:8080/api/usersCRUD/add', user)
      .then(res => console.log(res.data));

    window.location = '/users';
  }

  render() {
    return (
    <div>
        <div>
          <Navbar />
        </div>
    <center>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
            <div className="form-group w-50 h-50"> 
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control w-25 h-50"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                />
            </div>
            <br />
            <div className="form-group w-50 h-50"> 
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control w-25 h-50"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                />
            </div>
            <br />
            <div className="form-group w-50 h-50"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control w-25 h-50"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
            </div>
            <br />
            <div className="form-group w-50 h-50"> 
            <label>Password: </label>
            <input  type="text"
                required
                className="form-control w-25 h-50"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
            </div>
            <br />
            <div className="form-group w-50 h-50">
            <label>role: </label>
            <input 
                type="text" 
                className="form-control w-25 h-50"
                value={this.state.role}
                onChange={this.onChangeRole}
                />
            </div>
            <br />
            <div className="form-group w-50 h-50">
                <input type="submit" value="Create User" className="btn btn-primary " />
            </div>
            <br />
            <div className="form-group w-25 h-25">
                <a href="/users"><button type="button" class="btn btn-secondary ">Go Back To List</button></a>
            </div>
      </form>
      </center>
    </div>
    )
  }
}