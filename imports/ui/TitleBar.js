import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h3>{this.props.subtitle}</h3>
    }
  }
  render() {
    return (
      <div className='title-bar'>
        <div className='wrapper'>
          <h2>{this.props.title}</h2>
          {this.renderSubtitle()}
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

TitleBar.defaultProps = {
  //title: 'Default Title'
}
