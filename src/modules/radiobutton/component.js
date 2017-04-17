import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const defaultProps = {
  id: '',
  name: '',
  text: '',
  value: 1,
  selected: 1,
  extraClass: ''
};

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  value: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  extraClass: PropTypes.string,
  change: PropTypes.func.isRequired
};

class RadioButton extends Component {
  change(e) {
    const { change } = this.props;
    const id = parseInt(e.currentTarget.value, 10);
    change(id);
  }
  render() {
    const { id, name, text, value, selected, extraClass } = this.props;
    const checked = (parseInt(value, 10) === parseInt(selected, 10));
    let className = style.filter;
    if (extraClass === 'first') {
      className = style.filter__first;
    } else if (extraClass === 'last') {
      className = style.filter__last;
    }
    return (
      <div className={className}>
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          className={style.radiobutton}
          onChange={e => this.change(e)}
        />
        <label htmlFor={id} className={style.radiobutton__label}>
          {text}
        </label>
      </div>
    );
  }
}

RadioButton.defaultProps = defaultProps;
RadioButton.propTypes = propTypes;

export default RadioButton;
