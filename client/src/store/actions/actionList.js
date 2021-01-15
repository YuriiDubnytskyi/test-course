import * as actionTypes from './actionTypes';
import axios from 'axios'

export const fetchAddProductInfo = (data) => {
    return function (dispatch) {
      dispatch(addProductInfo())
      
      return axios.post('/api/admin/createProductInfo',{data})
        .then( (user) => {
            if(user.data.err){
              dispatch(addProductInfoFail(user.data.mess))
            }else{
              dispatch(addProductInfoSuccess())
            }
        })

    }
  }



export const addProductInfo = () => {
    return {
      type: actionTypes.ADD_PRODUCT_INFO,
    }
  }
export const addProductInfoFail = (mess) => {
    return {
      type: actionTypes.ADD_PRODUCT_INFO_FAIL,
      mess
    }
  }
  export const addProductInfoSuccess = () => {
    return {
      type: actionTypes.ADD_PRODUCT_INFO_SUCCESS,
    }
}
export const okProductInfoSuccess = () => {
    return {
      type: actionTypes.OK_INFO_SUCCESS,
    }
} 

export const fetchGetProductList = (id) => {
  return function (dispatch) {
    dispatch(getProductList())
    
    return axios.get('/api/user/getProductList/'+id)
      .then( (list) => {
          if(!list.data.err){
            dispatch(getProductListSuccess(list.data))
          }
      })

  }
}

export const fetchGetProductListSearch = (str) => {
  return function (dispatch) {
    dispatch(getProductList())
    
    return axios.post('/api/user/getProductListSearch/',{str})
      .then( (list) => {
          if(!list.data.err){
            dispatch(getProductListSuccess(list.data))
          }
      })

  }
}


export const getProductList = () => {
  return {
    type: actionTypes.GET_PRODUCTS_LIST,
  }
}

export const getProductListSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCTS_LIST_SUCCESS,
    data
  }
}