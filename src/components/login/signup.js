import React from 'react';
import loginImg from './login.png';
// import {Link} from 'react-router-dom';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="base-container" ref={this.props.containerRef}>

      <div className='header'>SignUp</div>
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
            <label htmlFor="companyname">Company Name</label>
            <input type='text' name='companyname' placeholder='Johns Handyman Services'/>
          </div>
          <div className='form-group'>
            <label htmlFor="username">Email</label>
            <input type='email' name='email' placeholder='johnsmith@gmail.com'/>
          </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input type='password' name='password' placeholder='Johnsmith101'/>
        </div>
        <div className="form-group">
          <label htmlFor='companytype'>Buisness</label>
            <select name='role'>
              <option disabled> Please select a role</option>
                <option value="generalcontractor">General Contractor</option>
                <option value="plumber">Plumber</option>
                <option value="hvac">HVAC</option>
                <option value="drywall">Drywall</option>
                <option value="painter">Painter</option>
                <option value="finishcarpenter">Finish Carpenter</option>
                <option value='other'> Other</option>
            </select>
        </div>
        </div>
        </div>
          <div className='footer'>
            {/*<Link to='/profile'>*/}
            <button type='button' className='btn'>Signup</button>
            {/*</Link>*/}
        </div>
        </div>

  }
}
