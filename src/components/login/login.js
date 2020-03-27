import React from 'react';
import loginImg from './login.png'
import { Link } from 'react-router-dom';
// import Profile from '../user/Profile'
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Nav from './components/navigation/Nav';
// import Profile from './components/profile/Profile';

export class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return <div className="base-container" ref={this.props.containerRef}>
    <Router>
      <h1 className='title'>Welcome to Bid-Builder!</h1>
      <div className='header'>Login</div>
      <div className='content'>
        <div className='image'>
          <img src={loginImg} alt=''/>
        </div>
        <div className='form'>
          <div className='form-group'>
            <label htmlFor="username">Username</label>
            <input type='text' name='username' placeholder='John Smith'/>
          </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input type='password' name='password' placeholder='Johnsmith101'/>
        </div>
        </div>
        </div>
          <div className='footer'>
            <Link to='/profile'>
            <button type='button' className='btn'>Login</button>
            </Link>
            {/*<Nav />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/profile' exact component={Profile} />
       `</Switch>*/}`
        </div>

      </Router>
</div>
  }
}
