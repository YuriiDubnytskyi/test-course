import * as actionTypes from './actionTypes';
import axios from 'axios'

export const fetchGetFullData = () => {
    return function (dispatch) {
      dispatch(getFullDataInitial())
      
      return axios.get('/api/admin/getProducts')
        .then( (data) => {
            if(data.data.err){
              dispatch(getFullDataFail(data.data.mess))
            }else{
              dispatch(getFullDataSuccess(data.data))
            }
        })

    }
  }



export const getFullDataInitial = () => {
    return {
      type: actionTypes.GET_FULL_DATA,
    }
  }
export const getFullDataFail = (mess) => {
    return {
      type: actionTypes.GET_FULL_DATA_FAIL,
      mess
    }
  }
  export const getFullDataSuccess = (data) => {
    return {
      type: actionTypes.GET_FULL_DATA_SUCCESS,
      data
    }
  }




  export const featchUpdateProduct = (data) => {
    return function (dispatch) {
      dispatch(updateProduct())
      
      return axios.post('/api/admin/updateProductInfo',{data})
        .then( (data) => {
            if(data.data.err){
              dispatch(updateProductFail(data.data.mess))
            }else{
              dispatch(updateProductSuccess())
            }
        })

    }
  }



export const updateProduct = () => {
    return {
      type: actionTypes.UPDATE_PRODUCT,
    }
  }
export const updateProductFail = (mess) => {
    return {
      type: actionTypes.UPDATE_PRODUCT_FAIL,
      mess
    }
  }
export const updateProductSuccess = () => {
    return {
      type: actionTypes.UPDATE_PRDUCT_SUCCESS,
    }
  }

  export const okProductUpdateSuccess = () => {
    return {
      type: actionTypes.OK_UPDATE_SUCCESS,
    }
} 


  export const fetchDeleteProduct = (id) => {
    return function (dispatch) {
      dispatch(deleteProduct())
      
      return axios.delete('/api/admin/deleteProduct/'+id)
        .then( (data) => {
            if(data.data.err){
              dispatch(deleteProductFail(data.data.mess))
            }else{
              dispatch(deleteProductSuccess())
            }
        })
  
    }
  }


  export const deleteProduct = () => {
    return {
      type: actionTypes.DELETE_PRODUCT,
    }
  }
export const deleteProductFail = (mess) => {
    return {
      type: actionTypes.DELETE_PRODUCT_FAIL,
      mess
    }
  }
export const deleteProductSuccess = () => {
    return {
      type: actionTypes.DELETE_PRDUCT_SUCCESS,
    }
  }

  export const okProductDeleteSuccess = () => {
    return {
      type: actionTypes.OK_DELETE_SUCCESS,
    }
} 