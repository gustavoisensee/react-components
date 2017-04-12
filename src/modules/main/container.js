import { connect } from 'react-redux';
import component from './component';
import {
  toggleNotification,
  changePositionNotification,
  changeTypeNotification
} from './action';

const mapStateToProps = state => ({
  notification: state.main.notification
});

const mapDispatchToProps = ({
  toggleNotification,
  changePositionNotification,
  changeTypeNotification
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
