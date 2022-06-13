import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import Diets from "./components/Diets";
import Videos from "./components/Videos";
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
import UploadVideoPage from "./components/UploadVideoPage/UploadVideoPage";
import UserList from "./components/Users/UserList.jsx";
import CreateUser from "./components/Users/CreateUser.jsx";

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
			{user && <Route path="/dashboard" exact element={<Dashboard />} />}
			{user && <Route path="/diets" exact element={<Diets />} />}
			{user && <Route path="/videos" exact element={<Videos />} />}
			{user && <Route path="/users" exact element={<UserList />} />}
			{user && <Route path="/users/create" exact element={<CreateUser />} />}
			

		</Routes>
	);
}

export default App;
