import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({ options, className, ...props }) => (
  <div className={`Select ${className}`}>
    <select {...props}>
      {options.map(option =>
        <option
          key={option.value}
          id={option.value}
          value={option.value}
        >{option.text}</option>  
      )}
    </select>
  </div>
);

Select.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string
};

Select.defaultProps = {
  options: [],
  className: ''
};

export default memo(Select);
