import { connect } from 'react-redux';
import component from './component';
import { upload } from './action';

const mapStateToProps = state => ({
  items: state.fileUploadPresenter.items
});

const mapDispatchToProps = ({
  upload
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
