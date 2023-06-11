import React from 'react';
import './css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: false,
    };
    this.togglePassword = this.togglePassword.bind(this);
  }

  togglePassword() {
    this.setState({password: !this.state.password});
  }

  render() {
    return(
      <div className="app">
        <form className="form">
          <label htmlFor="inp-first-name">First name</label>
          <input id="inp-first-name" type="text"/>

          <label htmlFor="inp-last-name">Surname</label>
          <input id="inp-last-name" type="text"/>

          <label htmlFor="inp-email">E-mail</label>
          <input id="inp-email" type="email"/>

          <label htmlFor="inp-pswd">Password</label>
          <input id="inp-pswd" type={this.state.password ? "text" : "password"}/>

          <div className="form__inner">
            <input type="checkbox" onChange={this.togglePassword} id="inp-pswd-checkbox"/>
            <label htmlFor="inp-pswd-checkbox">Show password</label>
          </div>

          <button type="button" className="btn">Registration</button>
        </form>
      </div>
    );
  }
}

export default App;
