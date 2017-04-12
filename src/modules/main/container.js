import { connect } from 'react-redux';
import component from './component';
import {
  toggleNotification,
  changeVerticalNotification,
  changeHorizontalNotification,
  changeTypeNotification
} from './action';

const mapStateToProps = state => ({
  notification: state.main.notification
});

const mapDispatchToProps = ({
  toggleNotification,
  changeVerticalNotification,
  changeHorizontalNotification,
  changeTypeNotification
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
