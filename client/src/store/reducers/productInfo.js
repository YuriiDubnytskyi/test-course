import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    id:0,
    name:'',
    price:0,
    info:'',
    producer:'',
    properties:[],
    images:[],
    count:0,
    loading:false,
    err:false,
    errMess:'',
    success:false,
};


const productInfo = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PRODUCT_INFO:
            return updateObject(state,{
                loading:true
            })
        case actionTypes.GET_PRODUCT_INFO_FAIL:
            return updateObject(state,{
                loading:false,
                err:true,
                errMess:action.mess
             })
        case actionTypes.GET_PRODUCT_INFO_SUCCESS:
            return updateObject(state,{
                loading:false,
                name:action.data.name,
                price:action.data.price,
                info:action.data.info,
                producer:action.data.producer,
                images:[...action.data.images],
                properties:[...action.data.properties],
                count:action.data.count[0].count,
                id:action.data.idProduct
            })                    
        default:
            return state;
    }
};

export default productInfo;