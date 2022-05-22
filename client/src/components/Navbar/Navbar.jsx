import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    return(
        <nav class="navbar navbar-dark navbar-expand-sm bg-primary">
  			<h3 class="text-white ms-3"> eFitness </h3>
			  <div class="container-fluid">
				<ul class="navbar-nav ">
				<li class="nav-item">
					<a class="nav-link text-white" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="/tracker">Tracker</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="/exercises">Exercises</a>
				</li>
				
				</ul>
				<ul class="navbar-nav navbar-right">
				<li class="nav-item">
					<a class="nav-link text-white" href="#" onClick={handleLogout}>Logout</a>
				</li>
				</ul>
			</div>
		</nav>
    )
}

export default Navbar