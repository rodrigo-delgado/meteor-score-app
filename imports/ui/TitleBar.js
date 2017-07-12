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
      <div>
        <h2>{this.props.title}</h2>
        {this.renderSubtitle()}
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
