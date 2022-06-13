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
        <br />
        <center><h1>Welcome to the eFitness Dashboard!</h1></center>
        <br />
		<div>
            <center><p>
                <a href="/users"><button type="button" class="btn btn-primary ">Users</button></a>&nbsp; &nbsp; &nbsp;
                <a href="/exercises"><button type="button" class="btn btn-success ">Exercises</button></a>&nbsp; &nbsp; &nbsp;
                <a href="/video/upload"><button type="button" class="btn btn-danger ">Videos</button></a>
                </p></center>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
	</div>
	);
};

export default Main;
//onClick={handleLogout}