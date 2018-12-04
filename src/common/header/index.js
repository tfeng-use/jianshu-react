import React, { Component } from 'react';
import { HeaderWrapper, Logo, NavWrapper, NavItem, NavSearchHotWrapper, NavSearchHotItem,
  NavInput, NavSearch, HeadBtn, BtnWrapper, NavInputWrapper } from './style'

import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actionCreators from './store/actionCreators'

class Header extends Component {
  constructor (props) {
    super(props)
    this.isShowHotFn = this.isShowHotFn.bind(this);
  }

  isShowHotFn () {
    let {list, pageNo, pageSize, focused, isMouseOver, handleMouseEnter, handleChangePage, handleMouseLeave} = this.props
    let newList = (list.toJS()).slice(pageNo * pageSize,  (pageNo + 1) * pageSize)
    // if (true) {
    if (focused || isMouseOver) {
      return (
        <NavSearchHotWrapper onMouseEnter={ handleMouseEnter }>
        <div className="hot-content" onMouseLeave={ handleMouseLeave }>
          <div className="content-wrapper">
            <div className="title">
              <span className="hot">热门搜索</span>
              <span className="next-batch" onClick={ () => handleChangePage(this.iconfont)}>
                <i className="iconfont icon-huanyipi" ref={(iconfont) => {this.iconfont = iconfont;}}></i>
                换一批
              </span>
            </div>
            { 
              newList.map((item, index) => {
                return <NavSearchHotItem key={index}>{item}</NavSearchHotItem>
              })
            }
          </div> 
        </div>
   
      </NavSearchHotWrapper>)
    }
    if (!focused && !isMouseOver) {
      return null;
    }
  }
  render () {
    const {focused, list, handleFocus, handleBlur} = this.props
    return(
      <HeaderWrapper>
        <Link to="/">
          <Logo />        
        </Link>
        <BtnWrapper>
          <HeadBtn className="write"><i className="iconfont icon--quill"></i>写文章</HeadBtn>
          <HeadBtn className="register">注册</HeadBtn>
          
          {
            this.props.isLogin?<NavItem href="#" className="right login" onClick={this.props.handleLogout}>退出</NavItem>:<Link to='/login'><NavItem href="#" className="right login">登录</NavItem></Link>
          }
          <NavItem href="#" className="right"><i className="iconfont icon-Aa"></i></NavItem>
        </BtnWrapper>
        <NavWrapper>
          <Link to="/">
            <NavItem className="home-page"><i className="iconfont icon-zhinanzhen"></i>首页</NavItem>
          </Link>
          <NavItem className="download-app" href="#"><i className="iconfont icon-xiazaiapp-"></i>下载App</NavItem>
          <NavInputWrapper className="input-wrapper">
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="fade"
            >
              <NavInput className={focused?'focused':''} onFocus={ () => handleFocus(list)} onBlur={handleBlur}></NavInput>
            </CSSTransition>
            <NavSearch className={focused?'focused iconfont icon-fangdajing':'iconfont icon-fangdajing'}></NavSearch>
            {this.isShowHotFn()}
          </NavInputWrapper>
        </NavWrapper>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  focused: state.get('header').get('focused'),
  list: state.get('header').get('list'),
  isMouseOver: state.get('header').get('isMouseOver'),
  pageNo: state.get('header').get('pageNo'),
  pageSize: state.get('header').get('pageSize'),
  totalPage: state.get('header').get('totalPage'),
  isLogin: state.get('login').get('isLogin'),
})
const mapDispatchToProps = (dispatch) => ({
  handleFocus (list) {
    if ((list.toJS()).length === 0) {
      dispatch(actionCreators.getHotListAction());
    }
    dispatch(actionCreators.getInputFocuseAction());
  },
  handleBlur () {
    dispatch(actionCreators.getInputBlurAction());
  },
  handleMouseEnter () {
    dispatch(actionCreators.getHotEnterAction());
  },
  handleMouseLeave () {
    dispatch(actionCreators.getHotLeaveAction());
  },
  handleChangePage (iconfont) {
    let rotate = +iconfont.style.transform.replace(/\D*/gi, '');
    iconfont.style.transform = 'rotate(' + (360 + rotate) + 'deg)';
    dispatch(actionCreators.getChangeHotPageAction());
  },
  handleLogout () {
    dispatch(actionCreators.getLogoutAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)