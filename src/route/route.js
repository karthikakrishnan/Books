import React, { Component } from 'react'
// import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login } from '../login/login'
import { Home } from '../home/home'

export class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router>
        )
    }
}