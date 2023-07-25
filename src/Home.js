import "./home.css";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import React, { useEffect, useState } from "react";
import moment from "moment/moment";

function Home() {
	const [result, setResult] = useState();
	const [equation, setEquation] = useState("");
	const [history, setHistory] = useState([]);

	// Function to handle user input and update the equation state
	const handleInput = (input) => {
		setEquation(equation.concat(input));
		setResult("");
	};

	// Function to calculate the result of the equation
	const calculate = () => {
		try {
			// Evaluate the equation using the eval() function and update the result state
			setResult(eval(equation));

			// Add the current equation and timestamp to the history array
			setHistory((prev) => [
				...prev,
				{ eq: equation, time: moment().format("LT") },
			]);

			// Reset the equation state to an empty string after the calculation is done
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
			// If the equation starts with a negative sign, remove it
			setEquation(equation.slice(1, equation.length - 1));
		} else {
			// If the equation does not start with a negative sign, add a negative sign at the beginning
			setEquation("-" + equation);
		}
	};

	return (
		<div className="root">
			<Grid container className="main">
				<Grid item>
					<Paper className="leftBox">
						<Paper className="leftBox2">
							<Box className="resultBox" sx={{ px: 2 }}>
								<Typography variant="h6" fontSize={30} color={"secondary"}>
									{result}
								</Typography>
							</Box>
							<Box
								sx={{ px: 2, my: 2 }}
								className="equationBox"
								display={"flex"}
								justifyContent={"space-between"}
								alignItems={"center"}
							>
								<BackspaceOutlinedIcon
									onClick={handleCorrection}
									sx={{ cursor: "pointer", transform: "scaleX(-1)" }}
									color="secondary"
								/>
								<Typography
									fontSize={20}
									color={"secondary"}
									letterSpacing={2}
									display={"flex"}
									alignItems={"center"}
								>
									{equation}
								</Typography>
							</Box>
							<Box sx={{ mt: 2 }} className="historyBox">
								<Box display={"flex"} alignItems={"center"}>
									<HistoryRoundedIcon color="secondary" sx={{ mr: 1 }} />
									<Typography color={"secondary"}>HISTORY</Typography>
								</Box>
								<Box className="historyItmBox" sx={{ mt: 2 }}>
									{history.reverse().map((his) => {
										return (
											<Box
												display={"flex"}
												justifyContent={"space-between"}
												className="historyItem"
											>
												<Typography
													color="secondary"
													fontSize={12}
													variant="body2"
												>
													{his.time}
												</Typography>
												<Typography color="secondary" variant="body2">
													{his.eq}
												</Typography>
											</Box>
										);
									})}
								</Box>
							</Box>
						</Paper>
					</Paper>
				</Grid>
				<Grid item>
					<Paper>
						<Grid container spacing={0.3} className="rightBox">
							<Grid
								item
								xs={3}
								onClick={() => {
									setEquation("");
									setResult("");
								}}
								className="actionBtn"
							>
								<Box>
									<Typography variant="h5">C</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={3}
								className="actionBtn"
								onClick={() => handleSignChange("+/-")}
							>
								<Box>
									<Typography variant="h5"> +/-</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={3}
								className="actionBtn"
								onClick={() => handleInput("/100")}
							>
								<Box>
									<Typography variant="h5">%</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={3}
								className="actionBtn"
								onClick={() => handleInput("/")}
							>
								<Box>
									<Typography variant="h5">/</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput("1")}>
									<Typography variant="h5">1</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(2)}>
									<Typography variant="h5">2</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(3)}>
									<Typography variant="h5">3</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={3}
								className="actionBtn"
								onClick={() => handleInput("*")}
							>
								<Box>
									<Typography variant="h5">x</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(4)}>
									<Typography variant="h5">4</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(5)}>
									<Typography variant="h5">5</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(6)}>
									<Typography variant="h5">6</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={3}
								className="actionBtn"
								onClick={() => handleInput("-")}
							>
								<Box>
									<Typography variant="h5">-</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(7)}>
									<Typography variant="h5">7</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(8)}>
									<Typography variant="h5">8</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(9)}>
									<Typography variant="h5">9</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={3}
								className="actionBtn"
								onClick={() => handleInput("+")}
							>
								<Box>
									<Typography variant="h5">+</Typography>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box
									display={"flex"}
									onClick={() => handleInput(0)}
									alignItems={"left"}
									className="numBtn"
								>
									<Typography variant="h5">0</Typography>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<Box className="numBtn" onClick={() => handleInput(".")}>
									<Typography variant="h5">.</Typography>
								</Box>
							</Grid>
							<Grid
								item
								xs={3}
								className="equalBtn actionBtn "
								sx={{ backgroundColor: "#0087F3" }}
								onClick={calculate}
							>
								<Box>
									<Typography variant="h5">=</Typography>
								</Box>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
