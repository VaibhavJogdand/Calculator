import "./home.css";
import {
	Box,
	Button,
	Grid,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import axios from "axios";
import Axios from "./axios";
import Keypad from "./Keypad";
import Screen from "./Screen";
function Home() {
	const [result, setResult] = useState();
	const [equation, setEquation] = useState("");
	const [history, setHistory] = useState([]);

	// Function to handle user input and update the equation state
	const handleInput = (input) => {
		setEquation(equation.concat(input));
		setResult("");
	};

	const getHistory = () => {
		Axios.get("/history")
			.then((response) => setHistory(response.data))
			.catch((error) => {});
	};

	const deleteHistory = (id) => {
		Axios.delete(`/history/${id}`)
			.then((response) => getHistory())
			.catch((error) => {});
	};

	const clearHistory = (id) => {
		Axios.delete("/history")
			.then((response) => {
				getHistory();
				setResult("");
			})
			.catch((error) => {});
	};

	useEffect(() => {
		getHistory();
	}, []);

	// Function to calculate the result of the equation
	const calculate = () => {
		try {
			let tempResult = eval(equation);

			setResult(tempResult);

			Axios.post("/history", { equation, result: tempResult })
				.then((response) => {
					getHistory();
				})
				.catch((error) => {});

			setEquation("");
		} catch (error) {
			setResult("Error");
		}
	};

	// Function to handle the correction of the equation by removing the last character
	const handleCorrection = () => {
		setEquation(equation.slice(0, -1));
	};

	// Function to handle the sign change of the equation (positive/negative)
	const handleSignChange = () => {
		if (equation[0] == "-") {
			setEquation(equation.slice(1, equation.length - 1));
		} else {
			setEquation("-" + equation);
		}
	};

	return (
		<div className="root">
			<Grid container className="main">
				<Grid item>
					<Screen
						result={result}
						equation={equation}
						handleCorrection={handleCorrection}
						deleteHistory={deleteHistory}
						clearHistory={clearHistory}
						history={history}
					/>
				</Grid>
				<Grid item>
					<Keypad
						setEquation={setEquation}
						setResult={setResult}
						handleInput={handleInput}
						handleSignChange={handleSignChange}
						calculate={calculate}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
