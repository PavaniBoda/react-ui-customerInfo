import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/login';
import Approutes from './routes';
import { Switch,Route, BrowserRouter } from 'react-router-dom';
import MainAppContainer from './MainAppContainer';
import LoginPage from './LoginContainer';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">  
    <BrowserRouter>    
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <MainAppContainer />
        </Route>
      </Switch>    
      </BrowserRouter>  
    </div>
  );
}

export default App;
