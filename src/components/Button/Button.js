import React, { memo } from 'react';
import './Button.scss';

const Button = ({ text = 'Button', className, ...rest }) => (
  <button
    className={`Button ${className}`}
    {...rest}
  >{text}</button>
);

export default memo(Button);
