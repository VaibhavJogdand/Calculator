import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./home.css";

function Keypad({
	setEquation,
	setResult,
	handleInput,
	handleSignChange,
	calculate,
}) {
	return (
		<div>
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
		</div>
	);
}

export default Keypad;
