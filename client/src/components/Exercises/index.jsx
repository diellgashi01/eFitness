import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getExercises } from "../../exerciseAPI"


const Exercise = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const exercises = await getExercises()
      setItems(exercises)
    }
    fetchItems()
  }, [])

  return (
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
  );
};

export default Exercise;
