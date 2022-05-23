import styles from "./styles.module.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
	<div>
		<div>
				<Navbar />
		</div>
		<center><h2>Welcome to eFitness</h2></center>
	</div>
	);
};

export default Main;
//onClick={handleLogout}