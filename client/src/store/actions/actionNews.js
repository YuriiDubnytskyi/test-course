import * as actionTypes from './actionTypes';
import axios from 'axios'

export const fetchGetNews = () => {
    return function (dispatch) {
      dispatch(getNewsInitial())
      
      return axios.get('/api/user/getNews')
        .then( (news) => {
            if(news.data.err){
              dispatch(getNewsFail(news.data.mess))
            }else{
              dispatch(getNewsSuccess(news.data))
            }
        })

    }
  }



export const getNewsInitial = () => {
    return {
      type: actionTypes.GET_NEWS,
    }
  }
export const getNewsFail = (mess) => {
    return {
      type: actionTypes.GET_NEWS_FAIL,
      mess
    }
  }
  export const getNewsSuccess = (data) => {
    return {
      type: actionTypes.GET_NEWS_SUCCESS,
      data
    }
  }

export const fetchAddNews = (data) => {
    return function (dispatch) {
      dispatch(addNews())
      
      return axios.post('/api/admin/createNews',{data})
        .then( (news) => {
            if(news.data.err){
              dispatch(addNewsFail(news.data.mess))
            }else{
              dispatch(addNewsSuccess())
            }
        })

    }
  }

export const addNews = () => {
    return {
      type: actionTypes.ADD_NEWS,
    }
  }
export const addNewsFail = (mess) => {
    return {
      type: actionTypes.ADD_NEWS_FAIL,
      mess
    }
  }
  export const addNewsSuccess = () => {
    return {
      type: actionTypes.ADD_NEWS_SUCCESS,
    }
}

  export const okNewsSuccess = () => {
    return {
      type: actionTypes.OK_NEWS_SUCCESS,
    }
} 


export const fetchDeleteNews = (id) => {
  return function (dispatch) {
    dispatch(deleteNews())
    
    return axios.delete('/api/admin/deleteNews/'+id)
      .then( (data) => {
          if(data.data.err){
            dispatch(deleteNewsFail(data.data.mess))
          }else{
            dispatch(deleteNewsSuccess())
          }
      })

  }
}

export const deleteNews = () => {
  return {
    type: actionTypes.DELETE_NEWS,
  }
}
export const deleteNewsFail = (mess) => {
  return {
    type: actionTypes.DELETE_NEWS_FAIL,
    mess
  }
}
export const deleteNewsSuccess = () => {
  return {
    type: actionTypes.DELETE_NEWS_SUCCESS,
  }
}

export const okNewsDeleteSuccess = () => {
  return {
    type: actionTypes.OK_DELETE_NEWS_SUCCESS,
  }
} 