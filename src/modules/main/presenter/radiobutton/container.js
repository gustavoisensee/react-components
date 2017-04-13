import { connect } from 'react-redux';
import component from './component';
import { changeRadioButton } from './action';

const mapStateToProps = state => ({
  button: state.radioButtonPresenter.button
});

const mapDispatchToProps = ({
  changeRadioButton
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
