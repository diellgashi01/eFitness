export const getExercises = () => fetch("http://localhost:8080/").then(res => res.json())

export const createExercise = (exercise) => fetch("http://localhost:8080/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(exercise)
})  

export const updateExercise = (exercise, id) => fetch(`http://localhost:8080/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(exercise)
}) 

export const deleteExercise = (id) => fetch(`http://localhost:8080/${id}`, {
  method: "DELETE",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
}) 

export const getExercise = (id) => fetch(`http://localhost:8080/${id}`).then(res => res.json())