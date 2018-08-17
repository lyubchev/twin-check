import React, { Component } from 'react';
import '../assets/css/Button.css';

export default class Button extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-success scan-btn">
                <i className="fas fa-search"></i> scan face
                </button>
            </div>
        );
    }
}