import { connect } from 'react-redux';
import component from './component';
import {
  changeMenuItem,
  toggleNotification
} from './action';

const mapStateToProps = state => ({
  menu: state.main.menu
});

const mapDispatchToProps = ({
  changeMenuItem,
  toggleNotification
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
