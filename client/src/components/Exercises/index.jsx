import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getExercises } from "../../exerciseAPI"


const Exercise = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const exercises = await getExercises()
      setItems(exercises)
    }
    fetchItems()
  }, [])

  return (  
<div>
        <nav class="navbar navbar-dark navbar-expand-sm bg-primary">
  			<h3 class="text-white ms-3"> eFitness </h3>
			  <div class="container-fluid">
				<ul class="navbar-nav ">
				<li class="nav-item">
					<a class="nav-link text-white" href="/">Home</a>
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

    <div className="container">
        

          <div className="mt-3">
              <h3>Exercise List</h3>
              <table className="table table-striped mt-3">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Calories</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {items.map(exercise => (
                          <tr key={exercise._id}>
                              <td>
                                  {exercise.name}
                              </td>
                              <td>
                                  {exercise.calories}
                              </td>
                              <td>
                                  <Link to={`/edit/${exercise._id}`}>Edit</Link>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  );
};

export default Exercise;
