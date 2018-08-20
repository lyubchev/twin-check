import React, { Component } from 'react';
import FacePanel from './components/FacePanel.jsx';
import './assets/fonts/style.css';
import './assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>
        Twin<i className="far fa-check-square"></i>
        </h1>
        <p className="text-center intro-text"> Check similarity of two faces by uploading two images. </p>
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
