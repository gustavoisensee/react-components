import React, { PropTypes, Component } from 'react';
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
    const vertical = parseInt(e.currentTarget.value, 10);
    change(vertical);
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
      <div className={className} htmlFor={id}>
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={e => this.change(e)}
        />
        <label htmlFor={id}>
          {text}
        </label>
      </div>
    );
  }
}

RadioButton.defaultProps = defaultProps;
RadioButton.propTypes = propTypes;

export default RadioButton;
