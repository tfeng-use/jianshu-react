import React, { Component } from 'react'
import { DetailContainer } from './style.js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Detail extends Component {
  render () {
    return (
      <DetailContainer>
        <h2 className="title">
          刘根的命运
        </h2>
        <div className="person-msg">
          <img src="https://upload.jianshu.io/users/upload_avatars/1731406/16ec5eb05765.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/>
          <p className="name">
            <span className="nickName">兰茜</span>
            <span>+关注</span>
          </p>
          <p className="data">
            <time>2018.10.13 00:18</time>
            <span className="word-number">字数 1972</span>
            <span className="read-number">阅读 418</span>
            <span className="comment-number">评论 3</span>
            <span className="star-number">喜欢 12</span>
          </p>
        </div>
        <div className="content">
          刘根死了。死在二女儿出嫁前，养猪时挨着猪圈盖的一间泥砖房里。三个月前查出是胃癌。没钱，拉回来，熬死了。在我的记忆中，刘根家瓦房铮亮，院落宽敞。是十里八村少有的＂好人家＂。仗着刘根的姐夫在镇里当干部，根红苗正，大运动时他家得了不少好处。在划成分这一点上，就沾了光。比他家没落的都划成地主，他家只划个富农。只被没收了田地，房舍还是自家的。
        </div>
        <div className="support">
          <h3>小礼物走一走，来简书关注我</h3>
          <button>赞赏支持</button>
        </div>
      </DetailContainer>
    )
  }
}
export default connect(null,null)(withRouter(Detail))