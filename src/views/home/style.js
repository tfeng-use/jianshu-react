import styled from 'styled-components'

export const HomeContainer = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto
  padding: 30px 0 0 15px;
`

export const HomeContentLeft = styled.div`
  float: left;
  width: 625px;
`

export const HomeContentRight = styled.div`
  float: right;
  width: 280px;
  margin-left: 40px;
`

export const CarouselWrapper = styled.div`
  width: 625px;
  height: 270px;
  margin-bottom: 35px;
  &:hover {
    button {
      visibility: visible;
    }
  }
  button {
    width: 35px;
    height: 35px;
    &::before {
      font-size: 32px;
    }
  }
  .slick-prev {
    visibility: hidden;
    left: 20px;
    z-index: 1
  }
  .slick-next {
    visibility: hidden;
    right: 20px;
  }
  .slick-dots {
    bottom: 5px;
    li {
      margin: 0;
    }
  }
  img {
    cursor: pointer;
    width: 625px;
    height: 270px;
    border-radius: 5px;
  }
`

export const TopicWrapper = styled.div`
  width: 280px;
`

export const TopicItem = styled.div`
  margin-bottom: 6px;
  width: 280px;
  height: 50px;
  cursor: pointer;
  img {
    width: 280px;
    height: 50px;
  }
`
export const Line = styled.section`
  width: 625px;
  margin: 5px 0 15px 0;
  border-bottom: 1px solid #f0f0f0;
`

export const ListWrapper = styled.ul`
  width: 625px;
`

export const ListItem = styled.li`
  width: 625px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .content-left {
    .title {
      color: #333;
      line-height: 27px;
      font-size: 18px;
      font-weight: 700;
      margin-top: -4px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .main-text {
      margin: 0 0 8px 0;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .about-message {
      padding-right: 0!important;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      .name, .message, .star {
        font-size: 12px;
        line-height: 20px;
        margin-right: 10px;
        color: #b4b4b4;
      }
      .iconfont {
        font-size: 12px;
      }
      .message {
        .iconfont {
          margin-right: 3px;
        }
      }
      .name, .message  {
        cursor: pointer;
        &:hover {
          color: #666;
        }
      }
    }
  }
  .content-right {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    margin-left: 10px;
    img {
      width: 150px;
      height: 100px;
      border-radius: 3px; 
    }
  }
`
export const GetListMore = styled.button`
  width: 100%;
  outline: none;
  border: none;
  height: 40px;
  margin: 30px 0 60px 0;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 15px;
  background: #a5a5a5;
`

export const Download = styled.a`
  position: relative;
  display: block;
  margin: 10px 0 30px 0;
  width: 280px;
  height: 82px;
  .big-enter {
    transition: all .3s;
    opacity: 0;
  }
  .big-enter-active {
    opacity: 1;
  }
  .big-exit {
    transition: all .3s;
    opacity: 1;
  }
  .big-exit-active {
    opacity: 0;
  }
  .code {
    position: absolute;
    z-index: 10px
    left: 50%;
    transform: translateX(-50%);
    top: -190px;
    width: 180px;
    height: 180px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #bbb ;
    box-shadow: 0 2px 3px #ccc;
    background: #fff;
    img {
      width: 160px;
      height: 160px;
    }
    .iconfont {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -11px;
    }
    .white {
      color: #fff;
    }
    .shadow {
      bottom: -12px;
      color: #ccc;
    }
  }
  .content {
    width: 280px;
    height: 82px;
    
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .cont-left {
      float: left;
      width: 60px;
      height: 60px;
      opacity: .85;
      margin-right: 7px;
    }
    .title {
      margin-top: 10px;
      font-size: 15px;
      color: #333;
      line-height: 1.5em;
      .iconfont {
        font-size: 10px;
        display: inline-block;
        vertical-align: top;
      }
    }
    .text {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
      line-height: 1.5em;
    }
    &:hover {
      cursor: pointer;
    }
  }
`

export const WriterContainer = styled.div`
  width: 280px;
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
`

export const WriterListWrapper = styled.ul`
  width: 280px;
`

export const WriterItem = styled.li`
  position: relative;
  margin-top: 15px;
  line-height: 20px;
  font-size: 13px;
  color: #333;
  .avator {
    width: 48px;
    height: 48px;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
  .follow {
    position: absolute;
    cursor: pointer;
    top: 5px;
    right: 0;
    font-size: 13px;
    color: #42c02e;
    .iconfont {
      margin-right: 5px;
      font-size: 12px;
    }
  }
  .text-wrapper {
    display: inline-block
    height: 48px;
    vertical-align: top;
    margin-left: 10px;
    .name {
      color: #333;
      cursor: pointer;
      padding-top: 5px;
      margin-right: 60px;
      font-size: 14px;
      display: block;
    }
    .text {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
      margin: 0 0 10px;
      line-height: 20px;
      span {
        margin: 0 3px;
      }
    }
  }
`
export const CheckAll = styled.button`
  width: 100%;
  outline: none;
  border: none;
  height: 34px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 4px;
  border: solid 1px #dcdcdc;
  text-align: center;
  line-height: 34px;
  color: #787878;
  font-size: 13px;
  background: #f7f7f7;
  .iconfont {
    margin-left: 5px;
    font-size: 10px;
  }
`

export const BackToTop = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  button {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: solid 1px #999;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    background: #fff;
    &:hover {
      background: #efefef;
    }
    .toTop {
      font-size: 17px;
      folor: #333；
    }
  }
  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -92px;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    background: #111;
    opacity: 0;
    transition: all .3s;
    .iconfont {
      position: absolute;
      right: -10px;
      top: 50%;
      transform-origin: center center;
      transform: translateY(-50%) rotate(-90deg);
      color: #111;
    }

  }
`