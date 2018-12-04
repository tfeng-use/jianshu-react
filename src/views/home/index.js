import React, { PureComponent } from 'react'
import { HomeContainer, HomeContentLeft, HomeContentRight, Line, BackToTop } from './style'
import CarouselList from './components/CarouselList'
import Topic from './components/Topic'
import List from './components/List'
import DownLoadAoo from './components/DownLoadApp'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

class Home extends PureComponent {
  constructor (props) {
    super(props);
    this.handleToTop = this.handleToTop.bind(this);
    this.isShowBackToTop = this.isShowBackToTop.bind(this);
    this.state = {
      element: null,
      isShowBack: false
    }
  }
  handleToTop () {
    let timer = setInterval(() => {
      window.scrollBy(0,-100);
      if (this.state.element.scrollTop === 0) {
        clearInterval(timer);
      }
    }, 10);
  }
  isShowBackToTop () {
    if (this.state.isShowBack) {
      return (
        <BackToTop>
        <button onClick={this.handleToTop} onMouseEnter={ () => {this.back.style.opacity = 1}} onMouseLeave={() => {this.back.style.opacity = 0}}>
          <i className="iconfont icon-shouqi toTop"></i>
        </button>
        <span ref={(back) => {this.back = back}}>
          回到顶部
          <i className="iconfont icon-icon-up"></i>
        </span>
      </BackToTop>
      )
    } else {
      return null
    }
  }
  componentDidMount() {
    // 在这儿进行ajax请求
    this.props.getCarouselList();
    this.props.getTopicList();
    this.props.getArticleList(this.props.articlePage);
    this.props.getWriterList(this.props.writerPage);
    this.setState({
      ...this.state,
      element: (document.documentElement || document.body)
    })

    window.onscroll = () => {
      if (this.state.element.scrollTop > 500) {
        this.setState({
          ...this.state,
          isShowBack: true
        })
      } else {
        this.setState({
          ...this.state,
          isShowBack: false
        })
      }
    }
  
  }
  render () {
    return (
      <HomeContainer>
        <HomeContentLeft>
          <CarouselList />
          <Line />
          <List />
        </HomeContentLeft>
        <HomeContentRight>
          <Topic />
          <DownLoadAoo />
          <Writer />
        </HomeContentRight>
        {
          this.isShowBackToTop()
        }
      </HomeContainer>
    )
  }
}
const mapDispatchToprops = (dispatch) => ({
  getCarouselList () {
    dispatch(actionCreators.getCarouseAction());
  },
  getTopicList () {
    dispatch(actionCreators.getTopicAction())
  },
  getArticleList (articlePage) {
    dispatch(actionCreators.getArticleAction(articlePage))
  },
  getWriterList (writerPage) {
    dispatch(actionCreators.getWriterAction(writerPage))
  }
})

const mapStateToProps = (state) => ({
  articlePage: state.getIn(['home', 'articlePage']),
  writerPage: state.getIn(['home', 'writerPage']),
})

export default connect(mapStateToProps, mapDispatchToprops)(Home)