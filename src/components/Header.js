import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styleLocal from './Header.css'
import styleColor from '../style/color.css'

export default class Header extends Component {
  render() {
    const { title } = this.props
    //var headerClass = classnames(styleLocal.header, styleColor.bgBlack, styleColor.textWhite, 'primary')
    var headerClass = styleLocal.header;

    return (
      <div className={ headerClass }>
        <h1>{title}</h1>
        <div className={ styleLocal.settingsButton }>X</div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
