import * as actionTypes from './actionTypes';
import axios from 'axios'


export const fetchGetProductInfo = (id) => {
    return function (dispatch) {
      dispatch(getProductInfo())
      
      return axios.get('/api/user/getProductInfo/'+id)
        .then( (product) => {
            if(product.data.err){
                dispatch(getProductInfoFail(product.data.mess))
            }else{
                dispatch(getProductInfoSuccess(product.data[0]))
            }
        })
  
    }
  }
  
export const getProductInfo = () => {
    return {
      type: actionTypes.GET_PRODUCT_INFO,
    }
  }
export const getProductInfoFail = (mess) => {
    return {
      type: actionTypes.GET_PRODUCT_INFO_FAIL,
      mess
    }
  }
  
export const getProductInfoSuccess = (data) => {
    return {
      type: actionTypes.GET_PRODUCT_INFO_SUCCESS,
      data
    }
  }