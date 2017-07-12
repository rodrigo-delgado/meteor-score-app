import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
  //title: 'Default Title'
}
