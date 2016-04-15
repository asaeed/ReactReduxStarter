import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styleLocal from './Header.css'
import styleColor from '../assets/css/color.css'
require('font-awesome/css/font-awesome.css');

export default class Header extends Component {
  render() {
    const { title } = this.props
    //var headerClass = classnames(styleLocal.header, styleColor.bgBlack, styleColor.textWhite, 'primary')
    var headerClass = styleLocal.header;

    return (
      <div className={ headerClass }>
        <div className={ styleLocal.leftSide }>
          <h3>{ title }</h3>
        </div>
        <div className={ styleLocal.rightSide }>
          <div className={ styleLocal.settingsButton }>
            <i className="fa fa-lg fa-cog"></i>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
