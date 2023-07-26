import "./home.css";
import {
	Box,
	CircularProgress,
	Divider,
	IconButton,
	LinearProgress,
	Typography,
} from "@mui/material";
import React from "react";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import moment from "moment/moment";

function History({
	history,
	deleteHistory,
	clearHistory,
	historyLoading,
	deleteLoading,
}) {
	return (
		<div>
			<Box sx={{ mt: 2 }} className="historyBox">
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Box display={"flex"} alignItems={"center"}>
						<HistoryRoundedIcon color="secondary" sx={{ mr: 1 }} />
						<Typography color={"secondary"}>HISTORY</Typography>
					</Box>
					<Box display={"flex"} alignItems={"center"}>
						<IconButton>
							{deleteLoading == "all" ? (
								<CircularProgress size={20} color="gray" />
							) : (
								<DeleteOutlineRoundedIcon
									color="danger"
									fontSize="small"
									onClick={() => clearHistory()}
								/>
							)}
						</IconButton>
						<Typography sx={{ color: "#F24C3D" }}>Clear All</Typography>
					</Box>
				</Box>
				<Divider color="gray" />
				<Box className="historyItmBox" sx={{ mt: 2 }}>
					{historyLoading && (
						<Box className="historyItem" sx={{ width: "100%" }}>
							<LinearProgress color="gray" sx={{ width: "100%" }} />
						</Box>
					)}
					{history.length ? (
						history
							.slice()
							.reverse()
							.map((his) => {
								return (
									<Box
										display={"flex"}
										justifyContent={"space-between"}
										className="historyItem"
									>
										<Box display={"flex"} alignItems={"center"}>
											<IconButton>
												{deleteLoading == his._id ? (
													<CircularProgress size={20} color="gray" />
												) : (
													<DeleteOutlineRoundedIcon
														color="danger"
														fontSize="small"
														onClick={() => deleteHistory(his._id)}
													/>
												)}
											</IconButton>
											<Typography
												variant="body2"
												color={"secondary"}
												fontSize={10}
											>
												{moment(his.createdAt).format("hh:mmA")}
											</Typography>
										</Box>
										<Box display={"flex"} alignItems={"center"}>
											<Typography
												color="secondary"
												// fontSize={12}
												variant="body2"
												letterSpacing={1}
											>
												{his.equation} = {his.result}
											</Typography>
										</Box>
									</Box>
								);
							})
					) : (
						<Box textAlign={"center"}>
							<Typography color="secondary" variant="body2">
								{historyLoading ? "Loading" : "No items in the history!"}
							</Typography>
						</Box>
					)}
				</Box>
			</Box>
		</div>
	);
}

export default History;
