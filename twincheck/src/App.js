import React, { Component } from 'react';
import FacePanel from './components/FacePanel.jsx';
import './assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          c=3
          <br />
        </header>
        <div className="grid">
          <div>
            <FacePanel />
          </div>
          <div>
            <FacePanel />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
