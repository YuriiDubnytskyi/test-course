import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    dataSell:[],
    loading:false,
    err:false,
    errMess:'',
    
};

const userCountSell = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_COUNT_SELL_PRODUCT:
            return updateObject(state,{
                loading:true
            })
        case actionTypes.GET_COUNT_SELL_PRODUCT_FAIL:
            return updateObject(state,{
                err:true,
                errMess:action.mess,
                loading:false,
            })
        case actionTypes.GET_COUNT_SELL_PRODUCT_SUCCESS:
            return updateObject(state,{
                loading:false,
                dataSell:[...action.data],
            })
        default:
            return state;
    }
};

export default userCountSell;