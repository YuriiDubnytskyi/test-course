import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    products:[
        
    ],
    loadingList:false,
    loading:false,
    err:false,
    errMess:'',
    success:false,
};

const productList = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PRODUCT_INFO_SUCCESS:
            return updateObject(state,{
                loading:false,
                err:false,
                errMess:'',
                success:true,
            })
        case actionTypes.ADD_PRODUCT_INFO_FAIL:
            return updateObject(state,{
                err:true,
                errMess:action.mess,
                loading:false,
                success:false,
            })
        case actionTypes.ADD_PRODUCT_INFO:
            return updateObject(state,{
                loading:true
            })
        case actionTypes.OK_INFO_SUCCESS:
            return updateObject(state,{
                success:false
            })
        case actionTypes.GET_PRODUCTS_LIST:
            return updateObject(state,{
                loadingList:true
            })   
        case actionTypes.GET_PRODUCTS_LIST_SUCCESS:
            return updateObject(state,{
                loadingList:false,
                products:[...action.data]
            })
        default:
            return state;
    }
};

export default productList;