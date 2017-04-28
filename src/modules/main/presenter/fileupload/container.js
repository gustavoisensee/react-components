import { connect } from 'react-redux';
import component from './component';
import { upload, remove } from './action';

const mapStateToProps = state => ({
  items: state.fileUploadPresenter
});

const mapDispatchToProps = ({
  upload,
  remove
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
