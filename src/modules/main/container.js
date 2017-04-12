import { connect } from 'react-redux';
import component from './component';
import { toggle } from './../notification/action';
import {
  changePositionNotification,
  changeTypeNotification
} from './action';

const mapStateToProps = state => ({
  notification: state.main
});

const mapDispatchToProps = ({
  toggle,
  changePositionNotification,
  changeTypeNotification
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
