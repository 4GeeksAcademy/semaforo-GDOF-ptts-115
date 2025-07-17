import React from "react";

//include images into your bundle
import { Colores } from "./colores";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex justify-content-center mt-5">
			<Colores />
		</div>
	);
};

export default Home;