import logo from './logo.svg';
import s from './App.module.css';
import React from 'react';
import ModeContext from './components/context/mode/modeContext';
import Users from './components/users/Users';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {mode: "light"};
  }

  changeMode() {
    if(this.state.mode === "light") {
        this.setState({mode: "night"});
    }else {
        this.setState({mode: "light"});
    }
  }

  render() {
    return (
      <ModeContext.Provider value={this.state.mode}>
        <header className={s.header} style={{backgroundColor: this.state.mode === "night" ? "#1a1818" : "#ebeaea"}}>
          <button className={s.button} role="button" onClick={() => this.changeMode()}>{this.state.mode === "night" ? "Light Mode" : "Night Mode"}</button>
        </header>
        <Users />
      </ModeContext.Provider>
    );
  }
}

export default App;
