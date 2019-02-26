import React, { Component } from 'react';
import FacePanel from './components/FacePanel';
import Button from './components/Button';
import './assets/fonts/style.css';
import './assets/css/App.css';

class App extends Component {
  constructor(props: any) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  state = {
    images: []
  };

  const handleUpdate = (img) {
    this.setState(prevState => ({
      images: [...prevState.images, img]
    }));
  }

  render() {
    return (
      <div className="container">
        <h1>
          Twin <i className="far fa-check-square" />
        </h1>
        <p className="intro-text"> Check similarity value between to faces. </p>
        <div className="grid">
          <div>
            <FacePanel handleUpdate={this.handleUpdate} />
          </div>
          <div>
            <FacePanel handleUpdate={this.handleUpdate} />
          </div>
        </div>
        <Button>Scan Faces</Button>
      </div>
    );
  }
}

export default App;
