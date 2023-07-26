import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import "./home.css";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import History from "./history";

function Screen({
	result,
	handleCorrection,
	equation,
	deleteHistory,
	clearHistory,
	history,
	historyLoading,
	deleteLoading,
}) {
	return (
		<div>
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
					<History
						history={history}
						deleteHistory={deleteHistory}
						clearHistory={clearHistory}
						historyLoading={historyLoading}
						deleteLoading={deleteLoading}
					/>
				</Paper>
			</Paper>
		</div>
	);
}

export default Screen;
