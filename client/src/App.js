import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Register";
import Login from "./components/Login";
import Exercise from "./components/Exercises";
import Tracker from "./components/Tracker/Tracker";
import CreateTracker from "./components/Tracker/CreateTracker";
import EditTracker from "./components/Tracker/EditTracker";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/exercises" exact element={<Exercise />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			{user && <Route path="/tracker" component={Tracker}/>}
			{user && <Route path="/tracker/create" component={CreateTracker}/>}
			{user && <Route path="/tracker/edit/:id" component={EditTracker}/>}
		</Routes>
	);
}

export default App;
