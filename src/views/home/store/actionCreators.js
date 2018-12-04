import axios from 'axios'
import * as actionTypes from './actionTypes'

export const  getCarouse = (value) => ({
  type: actionTypes.GET_CAROUSE,
  value
})

export const getTopic = (value) => ({
  type: actionTypes.GET_TOPIC,
  value
})

export const getArticle = (value, articlePage) => ({
  type: actionTypes.GET_ARTICLE,
  value,
  articlePage
})

export const getWriter = (value, writerPage) => ({
  type: actionTypes.GET_WRITER,
  value,
  writerPage
})

export const getCarouseAction = () => {
  return (dispatch) => {
    axios.get('/api/home/carouseList.json').then(response => {
      let res = response.data;
      dispatch(getCarouse(res.data));
    })
  }
}

export const getTopicAction = () => {
  return (dispatch) => {
    axios.get('/api/home/topicList.json').then(response => {
      let res = response.data;
      dispatch(getTopic(res.data));
    })
  }
}

export const getArticleAction = (articlePage) => {
  return (dispatch) => {
    axios.get('/api/home/list.json?pageNo=' + articlePage).then(response => {
      let res = response.data;
      if (res.status === '200') {
        dispatch(getArticle(res.data, articlePage));
      }
    })
  }
}

export const getWriterAction = (writerPage) => {
  return (dispatch) => {
    axios.get('/api/home/writer.json?pageNo=' + writerPage).then(response => {
      let res = response.data;
      if (res.status === '200') {
        dispatch(getWriter(res.data, writerPage));
      }
    })
  }
}