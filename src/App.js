import React from 'react';
import './css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showpswd: false,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      submitted: false,
      valid: false,
    };
    this.togglePassword = this.togglePassword.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  togglePassword() {
    this.setState({showpswd: !this.state.showpswd});
  }
  handleFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  handleLastName(event) {
    this.setState({lastName: event.target.value});
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    if(this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
      this.setState({submitted: true, valid: true});
    }
    else {
      this.setState({submitted: true});
    }
  }

  render() {
    return(
      <div className="app">
        <form className="form">
          {this.state.submitted && this.state.valid ? <div id='success-message'>Thanks for registration!</div> : null}

          <div className='form__el'>
            <label htmlFor="inp-first-name">First name</label>
            <input id="inp-first-name" type="text" onChange={this.handleFirstName} value={this.state.firstName}/>
            {this.state.submitted &&!this.state.firstName ? <span className='missed-value'>Please, enter first name</span> : null}
          </div>

          <div className='form__el'>
            <label htmlFor="inp-last-name">Surname</label>
            <input id="inp-last-name" type="text" onChange={this.handleLastName} value={this.state.lastName}/>
            {this.state.submitted &&!this.state.lastName ? <span className='missed-value'>Please, enter last name</span> : null}
          </div>

          <div className='form__el'>
            <label htmlFor="inp-email">E-mail</label>
            <input id="inp-email" type="email" onChange={this.handleEmail} value={this.state.email}/>
            {this.state.submitted &&!this.state.email ? <span className='missed-value'>Please, enter email</span> : null}
          </div>

          <div className='form__el'>
            <label htmlFor="inp-pswd">Password</label>
            <input id="inp-pswd" type={this.state.showpswd ? "text" : "password"} value={this.state.password} onChange={this.handlePassword}/>
            { this.state.submitted &&!this.state.password ? <span className='missed-value'>Please, enter password</span> : null}
          </div>
          <div className="form__inner">
            <input type="checkbox" onChange={this.togglePassword} id="inp-pswd-checkbox"/>
            <label htmlFor="inp-pswd-checkbox">Show password</label>
          </div>

          <button type="button" className="btn" onClick={this.handleSubmit}>Registration</button>
        </form>
      </div>
    );
  }
}

export default App;
