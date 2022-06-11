import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Register";
import Login from "./components/Login";
import ExerciseList from "./components/Exercises/ExerciseList.jsx";
import CreateExercise from "./components/Exercises/CreateExercise.jsx";
import EditExercise from "./components/Exercises/EditExercise.jsx";
import TrackerList from "./components/Tracker/TrackerList.jsx";
import CreateTracker from "./components/Tracker/CreateTracker";
import EditTracker from "./components/Tracker/EditTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import UploadVideoPage from "./components/UploadVideoPage/UploadVideoPage"

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/exercises" exact element={<ExerciseList />} />}
			{user && <Route path="/exercises/create" exact element={<CreateExercise />} />}
			{user && <Route path="/exercises/edit/:id" exact element={<EditExercise />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			{user && <Route path="/trackers" exact element={<TrackerList />}/>}
			{user && <Route path="/tracker/create" component={CreateTracker}/>}
			{user && <Route path="/tracker/edit/:id" component={EditTracker}/>}
			{user && <Route path="/video/upload" exact element={<UploadVideoPage />} />}
			

		</Routes>
	);
}

export default App;
