import React, { Component } from 'react';
import FaceFrame from './FaceFrame';
import '../assets/css/FacePanel.css';

class FacePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.removeDragData = this.removeDragData.bind(this);
  }

  handleClick() {
    this.fileInput.click();
  }

  handleInputChange(e) {
    let files = e.target.files;
    if (files.length !== 0) {
      if (files[0].type.includes('image/')) {
        const img = files[0];
        this.setState({
          image: img
        });
        this.props.handleUpdate(img);
      }
    }
  }

  handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();

    if (e.dataTransfer.items) {
      for (let item of e.dataTransfer.items) {
        if (item.kind === 'file') {
          let file = item.getAsFile();
          if (!file.type.includes('image/')) {
            this.removeDragData(e);
          }
        }
      }
    } else {
      for (let file of e.dataTransfer.files) {
        if (!file.type.includes('image/')) {
          this.removeDragData(e);
        }
      }
    }

    this.removeDragData(e);
  }

  handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  handleDragEnter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  removeDragData(e) {
    if (e.dataTransfer.items) {
      e.dataTransfer.items.clear();
    } else {
      e.dataTransfer.clearData();
    }
  }

  render() {
    return (
      <div
        className="face-panel"
        onClick={this.handleClick}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDrop={this.handleDrop}
      >
        <FaceFrame image={this.state.image} />
        <input
          type="file"
          ref={fileinput => (this.fileInput = fileinput)}
          hidden
          onChange={this.handleInputChange}
        />
        <p>Drag-drop image file here or click to browse</p>
      </div>
    );
  }
}

export default FacePanel;
