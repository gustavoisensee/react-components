import React, { PropTypes, Component } from 'react';
import style from './style.scss';

const defaultProps = {
  menu: []
};

const propTypes = {
  menu: PropTypes.array
};

class RadioButtonPresenter extends Component {
  click() {
    // do something
  }
  render() {
    return (
      <div className={style.container}>
        Test RadioButton
      </div>
    );
  }
}

RadioButtonPresenter.defaultProps = defaultProps;
RadioButtonPresenter.propTypes = propTypes;

export default RadioButtonPresenter;
