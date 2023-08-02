// axios.js

import axios from "axios";

// Create an instance of Axios with default configuration
const Axios = axios.create({
	// baseURL: "http://localhost:4000/api", // Replace 'your-backend-url' with the actual URL of your backend API
	// baseURL: "https://calculator-backend-q4mm.onrender.com/api", // Replace 'your-backend-url' with the actual URL of your backend API
	baseURL: "http://3.111.144.26:4000/api", // AWS Backend
});

export default Axios;
