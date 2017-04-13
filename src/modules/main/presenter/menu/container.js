import { connect } from 'react-redux';
import component from './component';
import { changeMenuItem } from './action';

const mapStateToProps = state => ({
  menu: state.menuPresenter.menu
});

const mapDispatchToProps = ({
  changeMenuItem
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
