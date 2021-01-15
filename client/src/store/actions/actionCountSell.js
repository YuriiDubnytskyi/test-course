import * as actionTypes from './actionTypes';
import axios from 'axios'

export const fetchGetCountSell = (email) => {
    return function (dispatch) {
      dispatch(getCountSellInitial())
      
      return axios.get('/api/user/getCountSellProducts/'+email)
        .then( (data) => {
            if(data.data.err){
              dispatch(getCountSellFail(data.data.mess))
            }else{
              dispatch(getCountSellSuccess(data.data))
            }
        })

    }
  }



export const getCountSellInitial = () => {
    return {
      type: actionTypes.GET_COUNT_SELL_PRODUCT,
    }
  }
export const getCountSellFail = (mess) => {
    return {
      type: actionTypes.GET_COUNT_SELL_PRODUCT_FAIL,
      mess
    }
  }
  export const getCountSellSuccess = (data) => {
    return {
      type: actionTypes.GET_COUNT_SELL_PRODUCT_SUCCESS,
      data
    }
  }