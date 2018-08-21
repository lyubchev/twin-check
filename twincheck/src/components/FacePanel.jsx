import React, { Component } from 'react';
import FaceFrame from './FaceFrame.jsx';
import '../assets/css/FacePanel.css';

class FacePanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null
        }

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

    handleInputChange(ev) {
        let files = ev.target.files;
        if (files.length !== 0) {
            console.log(files);
            if (files[0].type.includes('image/')) {
                console.log(files[0].name);
                this.setState({
                    image: files[0]
                });
            }
        }
    }

    handleDrop(ev) {
        console.log('File(s) dropped');

        ev.stopPropagation();
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            for (let item of ev.dataTransfer.items) {
                if (item.kind === 'file') {
                    let file = item.getAsFile();
                    if (file.type.includes('image/')) {
                        console.log(file.type);
                    } else {
                        this.removeDragData(ev);
                    }
                }
            }
        } else {
            for (let file of ev.dataTransfer.files) {
                if (file.type.includes('image/')) {
                    console.log(file.type);
                } else {
                    this.removeDragData(ev);
                }
            }
        }

        this.removeDragData(ev)
    }

    handleDragOver(ev) {
        ev.stopPropagation();
        ev.preventDefault();
    }

    handleDragEnter(ev) {
        ev.stopPropagation();
        ev.preventDefault();
    }

    removeDragData(ev) {

        if (ev.dataTransfer.items) {
            ev.dataTransfer.items.clear();
        } else {
            ev.dataTransfer.clearData();
        }
    }

    render() {
        return (
            <div className="face-panel" onClick={this.handleClick} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDrop={this.handleDrop}>
                <FaceFrame image={this.state.image} />
                <input type="file" ref={(fileinput) => this.fileInput = fileinput} hidden onChange={this.handleInputChange} />
                <p>Drag-drop image file here or click to browse</p>
            </div>
        );
    }
}

export default FacePanel;