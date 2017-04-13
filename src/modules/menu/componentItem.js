import React, { PropTypes, Component } from 'react';
import style from './style.scss';

const defaultProps = {
  item: {
    id: 0,
    text: '',
    selected: false
  }
};

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    selected: PropTypes.bool
  }),
  click: PropTypes.func.isRequired
};

class MenuItem extends Component {
  click(e) {
    const { click } = this.props;
    const id = parseInt(e.currentTarget.dataset.id, 10);
    click(id);
  }
  render() {
    const { item } = this.props;
    const className = (item.selected ? style['btn-selected'] : style.btn);

    return (
      <div className={style.container}>
        <input
          data-id={item.id}
          type="button"
          value={item.text}
          className={className}
          onClick={e => this.click(e)}
        />
      </div>
    );
  }
}

MenuItem.defaultProps = defaultProps;
MenuItem.propTypes = propTypes;

export default MenuItem;
