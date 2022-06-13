import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from "./Navbar.css";

const Navbar = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};


    return(
        <nav class="navbar navbar-dark navbar-expand-sm bg-primary">
			<img id='navbar_logo' src="/372.jpg" alt="logo"/>
  			<h3 class="text-white ms-3"> eFitness </h3>
			  <div class="container-fluid">
				<ul class="navbar-nav ">
				<li class="nav-item">
					<a class="nav-link text-white" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="/trackers">Tracker</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="/diets">Diets</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="/videos">Videos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="/dashboard">Dashboard</a>
				</li>
				
				</ul>
				<ul class="navbar-nav navbar-right">
				<li class="nav-item">
					<a class="nav-link text-white" href="/" onClick={handleLogout}>Logout</a>
				</li>
				</ul>
			</div>
		</nav>
    )
}

export default Navbar