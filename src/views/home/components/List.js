import React, { Component } from 'react'
import { ListWrapper, ListItem, GetListMore } from '../style'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom'

class List extends Component {
  constructor (props) {
    super(props)
    this.isShowPic = this.isShowPic.bind(this);
  }
  isShowPic (item) {
    if (item.get('imgUrl')) {
      return (
        <span className="content-right">
          <img src={item.get('imgUrl')} alt=""></img>
        </span>
      )
    } else {
      return null
    }
  }
  render () {
    return (
      <ListWrapper>
        {
          this.props.articleList.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link to={"/detail/" + item.get('id')}>
                  <div className="content">
                    {
                      this.isShowPic(item)                
                    }
                    <div className="content-left">
                      <span className="title">{item.get('title')}</span>
                      <p className="main-text">
                        {item.get('content')}
                      </p>
                      <p className="about-message">
                        <span className="name">{item.get('nickName')}</span>
                        <span className="message">
                          <i className="iconfont icon-svg-"></i>{item.get('unReadCount')}
                        </span>
                        <span className="star">
                          <i className="iconfont icon-xin"></i>{item.get('star')}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </ListItem>
            )
          })
        }
        <GetListMore onClick={() => (this.props.handleGetMore(this.props.articlePage + 1))}>阅读更多</GetListMore>
      </ListWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.get('home').get('articleList'),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDiscatchToProps = (dispatch) => ({
  handleGetMore (newPage) {
    dispatch(actionCreators.getArticleAction(newPage))
  }
})
export default connect(mapStateToProps, mapDiscatchToProps)(List)