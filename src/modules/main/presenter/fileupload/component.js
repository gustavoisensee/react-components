import React from 'react';
import PropTypes from 'prop-types';
import FileUpload from './../../../fileupload/component';
import style from './style.scss';

const defaultProps = {
  items: []
};

const propTypes = {
  items: PropTypes.array,
  upload: PropTypes.func.isRequired,
};

const FileUploadPresenter = ({ items, upload }) => (
  <div className={style.content}>
    <div className={style.title}>
      <span>
        FileUpload
      </span>
    </div>
    <div className={style.example}>
      <FileUpload
        items={items}
        upload={upload}
      />
    </div>
    <div className={style.description}>
      Description
    </div>
  </div>
);

FileUploadPresenter.defaultProps = defaultProps;
FileUploadPresenter.propTypes = propTypes;

export default FileUploadPresenter;
