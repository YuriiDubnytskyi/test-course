import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    user:{
        email:'',
        role:'',
        auth:false,
        admin:false,
        likeProducts:[],
        bucketProducts:[],
        id:0
    },
    loading:false,
    err:false,
    errMess:'',
    success:false,
    loadingLike:false,
    errLike:false,
    errMessLike:'',
    successLike:false,
};

const getAdmin = (role) =>{
    if(role === 'admin') return true
    return false
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_USER_SUCCESS:
      return updateObject(state,{
        user:{
            email:action.user.email,
            role:action.user.role,
            auth:true,
            admin:getAdmin(action.user.role),
            likeProducts:action.user.likeProducts,
            bucketProducts:state.user.bucketProducts,
            id:action.user.id
        },
        loading:false,
        err:false,
        errMess:'',
        success:true,
    })
    case actionTypes.ADD_USER_FAIL:
        return updateObject(state,{
            err:true,
            errMess:action.mess,
            loading:false
        })
    case actionTypes.ADD_USER:
        return updateObject(state,{
            loading:true
        })
    case actionTypes.CLEAR_USER:
      return updateObject(state,{
        user:{
            email:'',
            role:'',
            auth:false,
            admin:false,
            likeProducts:[],
            bucketProducts:[],
            id:0
        },
        loading:false,
        err:false,
        errMess:'',
        success:false,
        loadingLike:false,
        errLike:false,
        errMessLike:'',
        successLike:false,
    })
    case actionTypes.ADD_LIKE_PRODUCT:
        return updateObject(state,{
            loadingLike:true
        })
    case actionTypes.ADD_LIKE_PRODUCT_FAIL:
        return updateObject(state,{
            loadingLike:false,
            errMessLike:action.mess,
            errLike:true
        })
    case actionTypes.ADD_LIKE_PRODUCT_SUCCESS:
        return updateObject(state,{
            user:{
                likeProducts:action.data,
                bucketProducts:state.user.bucketProducts,
                email:state.user.email,
                role:state.user.role,
                auth:state.user.auth,
                admin:state.user.admin,
                id:state.user.id
            },
            loadingLike:false,
            success:true
        })
    case actionTypes.ADD_BUY_PRODUCT:
        return updateObject(state,{
            user:{
                likeProducts:state.user.likeProducts,
                email:state.user.email,
                role:state.user.role,
                auth:state.user.auth,
                admin:state.user.admin,
                id:state.user.id,
                bucketProducts:action.data,
            },
        })
    case actionTypes.CLEAR_BUCKET_USER:
            return updateObject(state,{
                user:{
                    email:state.user.email,
                    role:state.user.role,
                    auth:state.user.auth,
                    admin:state.user.admin,
                    likeProducts:state.user.likeProducts,
                    bucketProducts:[],
                    id:state.user.id
                },
                loading:state.loading,
                err:state.err,
                errMess:state.errMess,
                success:state.success,
                loadingLike:state.loadingLike,
                errLike:state.errLike,
                errMessLike:state.errMessLike,
                successLike:state.successLike,
            })
    
    default:
      return state;
  }
}

export default user;