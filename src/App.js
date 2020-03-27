import React from "react";
import "./App.scss";
import Home from './components/login/Home';
import Profile from './components/user/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/profile' component={Profile}/>
          {/*<Route path='/todos' render={(...props) => <Todos />}*/}
        </div>
      </Router>
    );
  }


export default App;
