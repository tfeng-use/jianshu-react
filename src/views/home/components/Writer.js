import React, { Component } from 'react'
import { WriterContainer, WriterListWrapper, WriterItem, CheckAll } from '../style'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class Writer extends Component {
  render () {
    return (
      <WriterContainer>
        <div className="title">
          <span className="hot">推荐作者</span>
          <span className="next-batch" onClick={ () => this.props.handleChangePage(this.iconfont, this.props.writerPage + 1)}>
            <i className="iconfont icon-huanyipi" ref={(iconfont) => {this.iconfont = iconfont;}}></i>
            换一批
          </span>
        </div>
        <WriterListWrapper>
          {
            this.props.writerList.map(item => {
              return (
                <WriterItem key={item.get('id')}>
                  <span className='avator'>
                    <img src={item.get('headerImg')} alt=""/>
                  </span>
                  <div className='text-wrapper'>
                    <span className="name">{item.get('nickName')}</span>
                    <p className="text">
                      写了{item.get('wordNumber')}字<span>·</span>{item.get('startNumber')}喜欢
                    </p>
                  </div>
                  <span className="follow">
                    <i className="iconfont icon-jiahao"></i>关注
                  </span>
                </WriterItem>
              )
            })
          }
        </WriterListWrapper>
        <CheckAll>查看全部<i className="iconfont icon-xiangyou"></i></CheckAll>
      </WriterContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  writerList: state.get('home').get('writerList'),
  writerPage: state.get('home').get('writerPage'),
})

const mapDispatchToProps = (dispatch) => ({
  handleChangePage (iconfont, writerPage) {
    let rotate = +iconfont.style.transform.replace(/\D*/gi, '');
    iconfont.style.transform = 'rotate(' + (360 + rotate) + 'deg)';
    dispatch(actionCreators.getWriterAction(writerPage));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer)