import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import NotificationPresenter from './presenter/notification/container';
import MenuPresenter from './presenter/menu/container';
import RadioButtonPresenter from './presenter/radiobutton/container';
import FileUploadPresenter from './presenter/fileupload/container';
import Menu from './../menu/component';

const defaultProps = {
  menu: []
};

const propTypes = {
  menu: PropTypes.array,
  changeMenuItem: PropTypes.func.isRequired
};

const Main = ({ menu, changeMenuItem }) => {
  const menuSelected = menu.find(item => item.selected === true);
  let componentContent;
  switch (menuSelected.id) {
    case 1:
      componentContent = (<NotificationPresenter />);
      break;
    case 2:
      componentContent = (<MenuPresenter />);
      break;
    case 3:
      componentContent = (<RadioButtonPresenter />);
      break;
    case 4:
      componentContent = (<FileUploadPresenter />);
      break;
    default:
      componentContent = (<span>Something wrong happened!</span>);
      break;
  }

  return (
    <div className={style.container}>
      <div className={style.content__menu}>
        <Menu
          items={menu}
          click={changeMenuItem}
        />
      </div>
      <div className={style.content}>
        {componentContent}
      </div>
    </div>
  );
};

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default Main;
