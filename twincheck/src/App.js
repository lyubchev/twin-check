import React, { Component } from 'react';
import Button from './components/Button.jsx'
import './assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div> 
          <Button /></div>
        <div><Button /></div>
      </div>
    );
  }
}
export default App;
