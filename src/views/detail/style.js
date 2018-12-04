import styled from 'styled-components'

export const DetailContainer = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto
  padding: 30px 0 0 15px;
  .title {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    margin: 20px 0 0;
  }
  .person-msg {
    overflow: hidden;
    height: 48px;
    margin: 30px 0 40px;
    img {
      float: left;
      margin-right: 10px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    .name {
      margin-top: 8px;
      .nickName {
        color: #333;
        font-size: 16px;
      }
      span {
        color: #fff;
        border-color: #42c02e;
        padding: 0 7px 0 5px;
        font-size: 12px;
      }
    }
    .data {
      margin-top: 5px;
      font-size: 12px;
      color: #969696;
      span, time {
        padding-right: 5px;
      }
    }
  }
  .content {
    text-indent: 2em;
    text-align: justify;
    color: #2f2f2f;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }
  .support {
    min-height: 144px;
    padding: 20px 0;
    text-align: center;
    clear: both;
    h3 {
      margin: 0 0 10px;
      padding: 0 30px;
      margin-bottom: 20px;
      min-height: 24px;
      font-size: 17px;
      font-weight: 700;
      color: #969696;
      text-align: center;
    }
    button {
      margin-bottom: 20px;
      outline: none;
      padding: 8px 25px;
      font-size: 16px;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 20px;
      background-color: #ea6f5a;
      &:hover {
        background: #f36f5a;
      }
    }
  }
`