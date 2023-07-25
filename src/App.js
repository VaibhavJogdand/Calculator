import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}

export default App;
