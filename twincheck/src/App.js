import React, { Component } from 'react';
import Button from './components/Button.jsx'
import FaceFrame from './components/FaceFrame.jsx';
import './assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div>
          <FaceFrame />
          <Button />
        </div>
        <div>
          <FaceFrame />
          <Button />
        </div>
      </div>
    );
  }
}
export default App;
