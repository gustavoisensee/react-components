import { connect } from 'react-redux';
import component from './component';
import {
  toggle
} from './../notification/action';

const mapStateToProps = () => ({});

const mapDispatchToProps = ({
  toggle
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
