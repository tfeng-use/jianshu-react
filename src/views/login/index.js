import React, { PureComponent } from 'react'
import { LoginWrapper, LoginBox, LoginItem, RegisterItem } from './style'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  constructor (props) {
    super(props);
    this.showLogin = this.showLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleLoginRequest (propsFn) {
    propsFn(JSON.parse(JSON.stringify(this.state)))
    this.setState({
      username: '',
      password: ''
    })
  }
  handleUsernameChange (event) {
    this.setState({
      ...this.state,
      username: event.target.value
    })
  }
  handlePasswordChange (event) {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }
  showLogin (isLoginType) {
    if (isLoginType) {
      return (
        <LoginItem>
          <input className="username"
                 value={this.state.username}
                 placeholder="手机号或邮箱"
                 onChange={this.handleUsernameChange}
                 type="text"/><i className="inner-icon iconfont icon-fl-renyuan"></i>

          <input className="password"
                 value={this.state.password}
                 onChange={this.handlePasswordChange}
                 placeholder="密码"
                 type="password"/><i className="inner-icon iconfont icon-mima"></i>

          <p className="remenber">
            <span>登录遇到问题？</span>
            <input type="checkbox"/>记住我
          </p>
          <button onClick={() => {this.handleLoginRequest(this.props.handleLoginRequest)}}>
            登录
          </button>
          <div className="more-sign">
            <h6>社交账号登录</h6>
            <div className="icons">
              <span href={'#'}>
                <i className="iconfont icon-weibo"></i>
              </span>
              <span href={'#'}>
                <i className="iconfont icon-changyonglogo28"></i>
              </span>
              <span href={'#'}>
                <i className="iconfont icon-QQ"></i>
              </span>
              <span href={'#'}>
                <i className="other">其他</i>
              </span>
            </div>
          </div>
        </LoginItem>
      )
    } else {
      return (
        <RegisterItem>
          <input className="username" placeholder="你的昵称" type="text"/><i className="inner-icon iconfont icon-fl-renyuan"></i>
          <input className="phone" placeholder="手机号或邮箱" type="text"/><i className="inner-icon iconfont icon-44"></i>
          <input className="password" placeholder="密码" type="password"/><i className="inner-icon iconfont icon-mima"></i>
          <button>
            注册
          </button>
          <div className="read">
            <p>点击 “注册” 即表示您同意并愿意遵守简书</p>
            <p><span>用户协议</span>和<span>隐私政策</span></p>
          </div>
          <div className="more-sign">
            <h6>社交账号直接注册</h6>
            <div className="icons">
              <span>
                <i className="iconfont icon-changyonglogo28"></i>
              </span>
              <span>
                <i className="iconfont icon-QQ"></i>
              </span>
            </div>
          </div>
        </RegisterItem>
      )
    }
  }
  render () {
    return (
      <LoginWrapper>
        {
          this.props.isLogin?<Redirect to='/' />:null
        }
        <img className="logo" src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
        <LoginBox>
          <div className="head">
            <span onClick={this.props.handleLogin} className={this.props.isLoginType?'login-title active':'login-title '}>登录</span>
            <span className="point">·</span>
            <span onClick={this.props.handleRegister} className={!this.props.isLoginType?'register-title active':'register-title'}>注册</span>
          </div>
          {
            this.showLogin(this.props.isLoginType)          
          }
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => ({
  isLoginType: state.getIn(['login', 'isLoginType']),
  isLogin: state.getIn(['login', 'isLogin']),
})

const mapDispatch = (dispatch) => ({
  handleLogin () {
    dispatch(actionCreators.getToLoginAction(true));
  },
  handleRegister () {
    dispatch(actionCreators.getToRegisterAction(false));
  },
  handleLoginRequest (form) {
    dispatch(actionCreators.getLoginStatusAction(form));
  }
})

export default connect(mapState, mapDispatch)(Login)