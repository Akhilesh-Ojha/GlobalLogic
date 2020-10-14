import React, { Component } from 'react';
import './App.css';

let userNameVar = "";
let passwordVar = "";
class App extends Component {

  state = {
    userName: '',
    userPassword: '',

  }

  onUserNameChangeHandler = (event) => {
    userNameVar = event.target.value;
  }

  onPasswordChangeHandler = (event) => {
    passwordVar = event.target.value;
  }

  singUpHandler() {
    sessionStorage.setItem('userDetails', JSON.stringify({userNameVar, passwordVar}));
  }

  componentDidMount() {
    window.onbeforeunload = (event) => {
      localStorage.setItem('userDetails', JSON.stringify({userNameVar, passwordVar}));
      var dialogText = "Changes will be lost";
      event.returnValue = dialogText;
      return dialogText;
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="UserName" onChange={this.onUserNameChangeHandler} />
        <input type="password" placeholder="Password" onChange={this.onPasswordChangeHandler} />
        <button onClick={this.singUpHandler}>Sign Up</button>
      </div>
    );
  }
}

export default App;

