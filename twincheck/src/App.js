import React, { Component } from 'react';
import FacePanel from './components/FacePanel.jsx';
import './assets/fonts/style.css';
import './assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <i className="far fa-check-circle"></i> twincheck!
        </h1>
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
