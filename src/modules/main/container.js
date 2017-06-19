import { connect } from 'react-redux';
import component from './component';
import {
  changeMenuItem
} from './action';

const mapStateToProps = state => ({
  menu: state.main.menu
});

const mapDispatchToProps = ({
  changeMenuItem
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
