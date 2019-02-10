import React, { memo } from 'react';
import './Button.scss';

const Button = (props) => (
  <button
    className='Button'
    {...props}
  >{props.text}</button>
);

export default memo(Button);
