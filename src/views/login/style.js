import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f1f1f1;
  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
    width: 100px;
  }
`

export const LoginBox = styled.div`
  position: absolute;
  top: 105px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
  .head {
    margin: 0 auto 50px;
    text-align: center;
    .login-title, .register-title {
      padding: 10px;
      color: #969696;
      font-size: 18px;
      &.active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
      }
      &:hover {
        cursor: pointer;
        border-bottom: 2px solid #ea6f5a;
      }
    }
    .point {
      padding: 10px;
      font-weight: 700;
      color: #969696;
      font-size: 18px;
      line-height: 1.1;
      font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    }
  }
`

export const LoginItem = styled.div`
  .username, .password {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
  }
  .password {
    margin-top: -1px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
  }
  .inner-icon {
    margin-left: -285px;
    font-size: 14px;
    color: #969696
  }
  .remenber {
    margin: 15px 0;
    font-size: 14px;
    color: #999;
    span {
      float: right;
      position: relative;
      font-size: 14px;
    }
  }
  button {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    background: #3194d0;
  }
  .more-sign {
    margin-top: 50px;
    text-align: center;
    font-size: 14px;
    h6 {
      position: relative;
      margin: 0 0 10px;
      font-size: 12px;
      color: #b5b5b5;
      font-weight: 500;
      line-height: 1.1;
      &::before {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
        left: 30px;
      }
      &::after {
        content: "";
        right: 30px;
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
      }
    }
    .icons {
      margin-bottom: 10px;
      margin-top: 10px;
      height: 50px;
      text-align: center;
      font-size: 14px;
      span {
        display: inline-block;
        width: 50px;
        height: 50px;
        vertical-align: middle;
        line-height: 50px;
        margin: 0 5px;
      }
      i {
        font-size: 14px;
      }
      .iconfont {
        font-size: 28px;
      }
      .icon-weibo {
        color: #e05244;
      }
      .icon-changyonglogo28 {
        color: #00bb29;
      }
      .icon-QQ {
        color: #498ad5;
      }
      .other {
        font-weight: 700;
        color: #999;
      }
    }
  }
`

export const RegisterItem = styled.div`
  .username, .password, .phone {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
  }
  .phone {
    margin-top: -1px;
    border-top: none;
    border-bottom: none;
  }
  .password {
    margin-top: -1px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
  }
  .inner-icon {
    margin-left: -285px;
    font-size: 14px;
    color: #969696
  }
  .read {
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
    span {
      color: #3194d0;
    }
  }
  button {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    background: #42c02e;
  }
  .more-sign {
    margin-top: 50px;
    text-align: center;
    font-size: 14px;
    h6 {
      position: relative;
      margin: 0 0 10px;
      font-size: 12px;
      color: #b5b5b5;
      font-weight: 500;
      line-height: 1.1;
      &::before {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
        left: 30px;
      }
      &::after {
        content: "";
        right: 30px;
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
      }
    }
    .icons {
      margin-bottom: 10px;
      margin-top: 10px;
      height: 50px;
      text-align: center;
      font-size: 14px;
      a {
        display: inline-block;
        width: 50px;
        height: 50px;
        vertical-align: middle;
        line-height: 50px;
        margin: 0 5px;
      }
      i {
        font-size: 14px;
      }
      .iconfont {
        font-size: 28px;
      }
      .icon-weibo {
        color: #e05244;
      }
      .icon-changyonglogo28 {
        color: #00bb29;
      }
      .icon-QQ {
        color: #498ad5;
      }
      .other {
        font-weight: 700;
        color: #999;
      }
    }
  }
`