import React from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import styled from "styled-components";
import SignIn from "containers/SignIn";
import Home from "containers/Home";
require("normalize.css");

export default class App extends React.Component {
    constructor() {
        super();  
        this.state = {
            normalized: false
        }
    }
    componentWillMount() {
        if(!this.state.normalized) {
            document.body.style.margin = "0";
            document.body.style.fontSize = "10px";
            this.setState({normalized: true})
        }
    }
    render() {
        // console.log(this.props);
        return(
            <div>
                <Route exact path="/" component={SignIn} />
                <Route path="/home" component={Home} />
            </div>
        )
    }
}
