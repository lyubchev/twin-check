import React, { Component } from 'react';
import Button from './Button.jsx';
import FaceFrame from './FaceFrame.jsx';
import '../assets/css/FacePanel.css';

export default class FacePanel extends Component {
    render() {
        return (
            <div className="face-panel">
                <FaceFrame />
                <Button />
            </div>
        );
    }
}