import React, { Component } from 'react';
import '../assets/css/FaceFrame.css';
import FaceImage from '../assets/images/Face.svg';

export default class FaceFrame extends Component {
    render() {
        return (
            <img className="face-frame" src={FaceImage} alt="" />
        );
    }
}