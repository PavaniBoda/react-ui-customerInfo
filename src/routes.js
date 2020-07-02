import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import About from './components/About';
import Team from './components/Team';
import Login from './components/login';
import MainAppContainer from './MainAppContainer';

class Approutes extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/dashboard" component ={Dashboard} />
                        <Route path="/about" component={About} />
                        <Route path="/team" component={Team} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default Approutes;