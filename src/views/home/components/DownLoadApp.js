import React, { Component } from 'react'
import { Download } from '../style'
import { CSSTransition } from 'react-transition-group';
class DownloadApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowCode: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter () {
    this.setState({
      isShowCode: true
    })
  }
  handleMouseLeave () {
    this.setState({
      isShowCode: false
    })
  }
  render () {
    return (
      <Download className="clearfix">
        <CSSTransition
          in={this.state.isShowCode}
          unmountOnExit
          timeout={300}
          classNames="big"
        >
          <div className="code">
            <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
            <i className="iconfont icon-icon-up shadow"></i>
            <i className="iconfont icon-icon-up white"></i>
          </div>
        </CSSTransition>
        <div className="content"  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <img className="cont-left" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          <h3 className='title'>
            下载简书手机APP <i className="iconfont icon-xiangyou"></i>
          </h3>
          <p className="text">
            随时随地发现和创作
          </p>
        </div>
      </Download>
    )
  }
}

export default DownloadApp