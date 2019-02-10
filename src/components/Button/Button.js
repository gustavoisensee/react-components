import React from 'react';
import './Button.scss';

const Button = (props) => (
  <button
    className='Button'
    {...props}
  >{props.text}</button>
);

export default Button;
