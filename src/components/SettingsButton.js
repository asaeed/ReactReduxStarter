import React, { PropTypes, Component } from 'react'
import styleLocal from './SettingsButton.css'
import classnames from 'classnames'

class SettingsButton extends Component {
  render() {
    return(
      <div onClick={ this.props.onClick } className={ classnames(styleLocal.button, this.props.isOpen ? styleLocal.open : '') }
      >
        <i className="fa fa-lg fa-cog"></i>
      </div>
    )
  }
}

SettingsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
}

export default SettingsButton