import { updateObject } from '../utility';

const initialState = {
    collapsed:true
};



const aa = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'aa':
            return updateObject(state,{
                collapsed:!state.collapsed
            })
        default:
            return state;
    }
};

export default aa