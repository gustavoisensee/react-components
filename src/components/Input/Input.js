import React, { memo } from 'react';
import './Input.scss';

const Input = (props) => (
  <input
    className='Input'
    {...props}
  />
);

export default memo(Input);
