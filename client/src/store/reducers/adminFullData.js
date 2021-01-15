import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    dataFull:[],
    loading:false,
    err:false,
    errMess:'',
    loadingUpdate:false,
    errUpdate:false,
    errMessUpdate:'',
    successUpdate:false,
    loadingDelete:false,
    errDelete:false,
    errMessDelete:'',
    successDelete:false
    
};

const dataFull = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_FULL_DATA:
            return updateObject(state,{
                loading:true
            })
        case actionTypes.GET_FULL_DATA_FAIL:
            return updateObject(state,{
                err:true,
                errMess:action.mess,
                loading:false,
            })
        case actionTypes.GET_FULL_DATA_SUCCESS:
            return updateObject(state,{
                loading:false,
                dataFull:[...action.data],
            })
        case actionTypes.UPDATE_PRODUCT:
            return updateObject(state,{
                loadingUpdate:true
            })
        case actionTypes.UPDATE_PRODUCT_FAIL:
            return updateObject(state,{
                errUpdate:true,
                errMessUpdate:action.mess,
                loadingUpdate:false,
            })
        case actionTypes.UPDATE_PRDUCT_SUCCESS:
            return updateObject(state,{
                loadingUpdate:false,
                successUpdate:true
            })
        case actionTypes.OK_UPDATE_SUCCESS:
                return updateObject(state,{
                    successUpdate:false
                })
        case actionTypes.DELETE_PRODUCT:
            return updateObject(state,{
                loadingDelete:true
            })
        case actionTypes.DELETE_PRODUCT_FAIL:
            return updateObject(state,{
                errDelete:true,
                errMessDelete:action.mess,
                loadingDelete:false,
            })
        case actionTypes.DELETE_PRDUCT_SUCCESS:
            return updateObject(state,{
                loadingDelete:false,
                successDelete:true
            })
        case actionTypes.OK_DELETE_SUCCESS:
            return updateObject(state,{
                successDelete:false
            })
        default:
            return state;
    }
};

export default dataFull;