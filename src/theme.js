// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ff0000", // Customize primary color
		},
		secondary: {
			main: "#F5F5F5", // Customize secondary color
		},
		danger: {
			main: "#B31312",
		},
	},
	typography: {
		h5: {
			"@media (max-width: 750px)": {
				fontSize: "1rem", // Change font size to 1rem for screens under 750px
			},
		},
	},
});

export default theme;
