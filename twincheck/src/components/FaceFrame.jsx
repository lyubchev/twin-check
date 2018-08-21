import React, { Component } from 'react';
import '../assets/css/FaceFrame.css';
import FaceImage from '../assets/images/Face.svg';

class FaceFrame extends Component {
    render() {
        return (
            <img className="face-frame" src={this.props.image !== null ? URL.createObjectURL(this.props.image) : FaceImage} alt="" />
        );
    }
}

export default FaceFrame;