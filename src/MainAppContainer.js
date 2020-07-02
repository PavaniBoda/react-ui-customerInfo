import React from 'react';
import AppRoutes from './routes';
import { Link, Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Team from './components/Team';

class MainAppContainer extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <div id = "routingComponent">
                        <div className = "routes" style = {{'marginRight': '30px'}}>
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to="/dashboard" className = "linkStyles" activeClassName= "selected">Dashboard</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" className = "linkStyles" activeClassName= "selected">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/team" className = "linkStyles" activeClassName= "selected">Team</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className = "routeRender">
                            <Switch>
                                <Route path="/dashboard" component={Dashboard} />
                                <Route path="/about" component={About} />
                                <Route path="/team" component={Team} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>                               
        );
    }
}

export default MainAppContainer;