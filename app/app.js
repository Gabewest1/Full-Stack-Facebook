import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "containers/App";

require("normalize.css");

render(
    <Router>
        <App />
    </Router>, 
    document.getElementById("app")
);