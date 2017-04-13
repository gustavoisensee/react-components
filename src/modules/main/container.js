import { connect } from 'react-redux';
import component from './component';
import {
  toggleNotification,
  changeVerticalNotification,
  changeHorizontalNotification,
  changeTypeNotification,
  changeMenuItem
} from './action';

const mapStateToProps = state => ({
  notification: state.main.notification,
  menu: state.main.menu
});

const mapDispatchToProps = ({
  toggleNotification,
  changeVerticalNotification,
  changeHorizontalNotification,
  changeTypeNotification,
  changeMenuItem
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
