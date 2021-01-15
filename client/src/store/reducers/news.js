import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    news:[],
    loading:false,
    err:false,
    errMess:'',
    success:false,
    loadingAdd:false,
    errAdd:false,
    errMessAdd:'',

    loadingDel:false,
    errDel:false,
    errMessDel:'',
    successDel:false,
};

const news = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_NEWS:
            return updateObject(state,{
                loading:true
            })
        case actionTypes.GET_NEWS_FAIL:
            return updateObject(state,{
                err:true,
                errMess:action.mess,
                loading:false,
            })
        case actionTypes.GET_NEWS_SUCCESS:
            return updateObject(state,{
                loading:false,
                news:[...action.data],
            })

        case actionTypes.ADD_NEWS_SUCCESS:
            return updateObject(state,{
                loadingAdd:false,
                errAdd:false,
                errMessAdd:'',
                success:true,
            })
        case actionTypes.ADD_NEWS_FAIL:
            return updateObject(state,{
                errAdd:true,
                errMessAdd:action.mess,
                loadingAdd:false,
                success:false,
            })
        case actionTypes.ADD_NEWS:
            return updateObject(state,{
                loadingAdd:true
            })            
        case actionTypes.OK_NEWS_SUCCESS:
            return updateObject(state,{
                success:false
            })

        case actionTypes.DELETE_NEWS_SUCCESS:
            return updateObject(state,{
                loadingDel:false,
                errDell:false,
                errMessDel:'',
                successDel:true,
            })
        case actionTypes.DELETE_NEWS_FAIL:
            return updateObject(state,{
                errDel:true,
                errMessDel:action.mess,
                loadingDel:false,
                successDel:false,
            })
        case actionTypes.DELETE_NEWS:
            return updateObject(state,{
                loadingDel:true
            })            
        case actionTypes.OK_DELETE_NEWS_SUCCESS:
            return updateObject(state,{
                successDel:false
            })
        default:
            return state;
    }
};

export default news;