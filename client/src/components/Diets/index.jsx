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
		<div>
            <br />
            <center><h1>Coming soon!</h1></center>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
	</div>
	);
};

export default Main;
//onClick={handleLogout}