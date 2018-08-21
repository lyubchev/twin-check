import React, { Component } from 'react';
import Button from './Button.jsx';
import FaceFrame from './FaceFrame.jsx';
import '../assets/css/FacePanel.css';

class FacePanel extends Component {
    render() {
        return (
            <div className="face-panel">
                <FaceFrame />
                <p>Drag-drop image here</p>
            </div>
        );
    }
}

export default FacePanel;