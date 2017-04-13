import React, { PropTypes } from 'react';
import RadioButton from './../../../radiobutton/component';
import style from './style.scss';

import {
  BUTTONS
} from './constant';

const defaultProps = {
  button: 0
};

const propTypes = {
  button: PropTypes.number,
  changeRadioButton: PropTypes.func.isRequired,
};

const RadioButtonPresenter = ({ button, changeRadioButton }) => (
  <div className={style.content}>
    <div className={style.title}>
      <span>
        RadioButton
      </span>
    </div>
    <div className={style.example}>
      {BUTTONS.map(item =>
        <RadioButton
          id={item.id}
          name={item.name}
          text={item.text}
          value={item.value}
          selected={button}
          extraClass={item.extraClass}
          change={changeRadioButton}
        />
      )}
    </div>
    <div className={style.description}>
      Description
    </div>
  </div>
);

RadioButtonPresenter.defaultProps = defaultProps;
RadioButtonPresenter.propTypes = propTypes;

export default RadioButtonPresenter;
