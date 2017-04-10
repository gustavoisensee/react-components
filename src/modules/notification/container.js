import { connect } from 'react-redux';
import component from './component';
import {
  toggle
} from './action';

const mapStateToProps = state => ({
  notification: state.notification
});

const mapDispatchToProps = ({
  toggle
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
