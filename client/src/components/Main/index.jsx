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
			<Navbar />
	</div>
	);
};

export default Main;
//onClick={handleLogout}