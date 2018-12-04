import React, { Component } from 'react'
import {TopicWrapper, TopicItem} from '../style'
import { connect } from 'react-redux'
class Topic extends Component {
  render () {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map(ele => {
            return (
              <TopicItem key={ele.get('id')}>
                <img src={ele.get('imgUrl')} alt=""/>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.get('home').get('topicList')
})

export default connect(mapStateToProps, null)(Topic)