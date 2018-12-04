import styled from 'styled-components';
import logo from '../../static/logo.png'

export const HeaderWrapper = styled.section`
  min-width: 690px;
  position: relative;
  height: 58px;
  border-bottom: solid 1px #e7e7e7;
`;

export const Logo = styled.div`
  position: absolute;
  display: inline-block;
  width: 100px;
  height: 58px;
  left: 0;
  top: 0;
  background: url(${logo});
  background-size: contain;
`

export const NavWrapper = styled.div`
  width: 960px;
  height: 58px;
  margin: 0 auto;
  .fade-enter {
    transition: all .3s ease-out;
    width: 240px;
  }
  .fade-enter-active {
    width: 320px;
  }
  .fade-exit {
    transition: all .3s ease-out;
    width: 320px;
  }
  .fade-exit-active {
    width: 240px;
  }
  @media (max-width: 1120px) {
    .home-page, .download-app {
      display: none;
    }
    .input-wrapper {
      margin-left: 100px;
    }
  }
`

export const NavItem = styled.div`
  display: inline-block;
  margin-right: 10px;
  padding: 0 15px;
  line-height: 58px;
  font-size: 17px;
  color: #333;
  &.login {
    cursor: pointer;
  }
  i {
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
  }
  &:hover {
    background: #eee; 
  }
  &.action {
    color: #ea6f5a;
  }
  &.action:hover {
    background: #fff;
  }
  &.right {
    padding-right: 10px;
    margin-right: 5px;
    float: right;
    color: #969696;
    i {
      display: inline-block;
      vertical-align: bottom;
    }
  }
  &.right:hover {
    background: #fff;
  }
`
export const NavInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 9px 0 0 15px;
`

export const NavInput = styled.input.attrs({
  placeholder: '搜索'
})`
  &::placeholder {
    color: #bbb;
  }
  border-radius: 19px;
  height: 38px;
  width: 240px;
  padding: 0 40px 0 20px;
  font-size: 14px;
  font-family: 'simSun'
  color: #333;
  background: #eee;
  &.focused {
    width: 320px;
  }
`

export const NavSearch = styled.i`
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  margin-left: -33px;
  color: #969696;
  cursor: pointer;
  &.focused {
    background: #999;
    color: #fff;
  }
`

export const HeadBtn = styled.a`
  float: right;
  height: 38px;
  line-height: 26px;
  padding: 6px 20px;
  border-radius: 50px;
  outline: none;
  font-size: 15px;
  text-align: center;
  margin: 9px 5px 0 15px;
  &.register {
    border: solid 1px #ea6f5a;
    color: #ea6f5a;
  }
  &.write {
    margin: 8px 15px 0;
    background: #ea6f5a;
    color: #fff;
    i {
      margin-right: 3px;
    }
  }
`

export const BtnWrapper = styled.div`
  position: absolute;
  display: inline-block;
  right: 0;
  top: 0;
  height: 58px;
`

export const NavSearchHotWrapper = styled.section`
  position: absolute;
  left: 0;
  top: 50px
  width: 250px;
  padding: 10px 20px;
  border-radius: 3px;
  z-index: 100;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
  .hot-content {
    .title {
      height: 20px;
      color: #969696
      .hot {
        float: left;
        font-size: 14px;
      }
      .next-batch {
        float: right;
        font-size: 13px;
        cursor: pointer;
        &:hover {
          color: #777;
        }
        .iconfont {
          display: inline-block;
          transition: all .3s ease-in;
          transform-origin: center center;
          font-size: 14px;
          margin-right: 5px;
          transform: rotate(0deg);
        }
      }
    }
  }
`
export const NavSearchHotItem = styled.a`
  margin: 10px 10px 0 0;
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border: 1px solid #aaa;
    color: #787878;
  }
`
