import React from 'react';
import '../assets/css/Button.css';

interface Props {
  children: React.ReactNode;
}

const Button: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <button className="btn btn-success scan-btn">
        <i className="fas fa-search" /> {props.children}
      </button>
    </div>
  );
};

export default Button;
