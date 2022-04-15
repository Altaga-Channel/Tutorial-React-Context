// Basic imports
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Components
import DisCounter from './components/displayCounter';
import ModCounter from './components/modifyCounter';
import SearchTool from "./components/searchTime"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DisCounter />
          <br />
          <ModCounter />
          <br />
          <SearchTool />
        </header>
      </div>
    );
  }
}

export default App;
