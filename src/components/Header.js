import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleSettings } from '../actions'
import classnames from 'classnames'
import styleLocal from './Header.css'
import styleColor from '../assets/css/color.css'
import SettingsButton from '../components/SettingsButton'

class Header extends Component {

  constructor(props) {
    super(props);
    this.onSettingsButtonClick = this.onSettingsButtonClick.bind(this);
  }

  onSettingsButtonClick(e) {
    console.log('settings clicked');
    this.props.dispatch(toggleSettings());
  }

  render() {
    const { title, isSettingsOpen } = this.props

    // css
    //var headerClass = classnames(styleLocal.header, styleColor.bgBlack, styleColor.textWhite, 'primary')
    var headerClass = styleLocal.header;

    return (
      <div className={ headerClass }>
        <div className={ styleLocal.leftSide }>
          <h3>{ title }</h3>
        </div>
        <div className={ styleLocal.rightSide }>
          <SettingsButton isOpen={ this.props.isSettingsOpen } onClick={ this.onSettingsButtonClick } />
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isSettingsOpen: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return { isSettingsOpen: state.settings.isOpen }
}

export default connect(mapStateToProps)(Header)