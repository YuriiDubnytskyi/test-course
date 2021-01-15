import * as actionTypes from './actionTypes';
import axios from 'axios'

export const fetchAddProduct = (productTitle,idProductTitle) => {
    return function (dispatch) {
      dispatch(addProduct())
      
      return axios.post('/api/admin/createProductMain',{productTitle,idProductTitle})
        .then( (user) => {
            if(user.data.err){
              dispatch(addProductFail(user.data.mess))
            }else{
              dispatch(addProductSuccess({productTitle:user.data.productTitle,idProductTitle:user.data.idProductTitle}))
             
            }
        })

    }
  }

export const fetchAddSubProduct = (productSubTitle,idProductSubTitle,idProductTitle) => {
  return function (dispatch) {
    dispatch(addSubProduct())
    return axios.post('/api/admin/createProductSubMain',{productSubTitle,idProductSubTitle,idProductTitle})
      .then( (user) => {
          if(user.data.err){
            dispatch(addSubProductFail(user.data.mess))
          }else{
            dispatch(addSubProductSuccess({idProductSubTitle:user.data.idProductSubTitle,
                                                productSubTitle:user.data.productSubTitle,
                                                idProductTitle:user.data.idProductTitle
                                              }))            
          }
      })
    }
  }


export const fetchAddProductAll = () => {
    return function (dispatch) {
      return axios.get('/api/user/getProductAll')
        .then( (data) => {
            if(data.data.err){
              console.log(data.data.mess)
            }else{
              dispatch(addProductAll(data.data))
            }
        })

    }
  }

  export const addProductAll = (data) => {
    return {
      type: actionTypes.ADD_PRODUCT_INITIAL,
      data
    }
  }
export const addProduct = () => {
    return {
      type: actionTypes.ADD_PRODUCT,
    }
  }
export const addProductFail = (mess) => {
    return {
      type: actionTypes.ADD_PRODUCT_FAIL,
      mess
    }
  }
  export const addProductSuccess = (product) => {
    return {
      type: actionTypes.ADD_PRODUCT_SUCCESS,
      product
    }
}
export const okProductSuccess = () => {
    return {
      type: actionTypes.OK_SUCCESS,
    }
} 
export const addSubProduct = () => {
    return {
      type: actionTypes.ADD_SUB_PRODUCT,
    }
  }
export const addSubProductFail = (mess) => {
    return {
      type: actionTypes.ADD_SUB_PRODUCT_FAIL,
      mess
    }
  }
  export const addSubProductSuccess = (subProduct) => {
    return {
      type: actionTypes.ADD_SUB_PRODUCT_SUCCESS,
      subProduct
    }
  }  
export const okSubProductSuccess = () => {
    return {
      type: actionTypes.OK_SUB_SUCCESS,
    }
} 