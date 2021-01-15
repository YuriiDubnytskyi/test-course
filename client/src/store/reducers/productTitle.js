import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    productTitleList:[],
    loading:false,
    loadingSub:false,
    errSub:false,
    errMessSub:'',
    successSub:false,
    err:false,
    errMess:'',
    success:false,
};

const setInit = (data) =>{ 
  let arr = []
  data.forEach((el)=>{
    arr.push({
      productTitle:el.productTitle,
      idProductTitle:el.idProductTitle,
      subTitle:[...el.subTitle]
    })
  })
  return arr
}

const setSubTitle = (data,list) =>{
  let arr = list.map(el => {
    if(el.idProductTitle == data.idProductTitle){
          el.subTitle.push({productSubTitle:data.productSubTitle,idProductSubTitle:data.idProductSubTitle})
    }
    return el
  })
  console.log(arr)
  return arr
}


const productTitle = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PRODUCT_INITIAL:
      return updateObject(state,{
        productTitleList:setInit(action.data)
      })
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return updateObject(state,{
        productTitleList:[...state.productTitleList,{
            productTitle:action.product.productTitle,
            idProductTitle:action.product.idProductTitle,
            subTitle:[]
        }
      ],
        loading:false,
        err:false,
        errMess:'',
        success:true,
    })
    case actionTypes.ADD_PRODUCT_FAIL:
        return updateObject(state,{
            err:true,
            errMess:action.mess,
            loading:false,
            success:false,
        })
    case actionTypes.ADD_PRODUCT:
        return updateObject(state,{
            loading:true
		})
	case actionTypes.OK_SUCCESS:
      return updateObject(state,{
          success:false
    })
    case actionTypes.ADD_SUB_PRODUCT_SUCCESS:
        return updateObject(state,{
            productTitleList:setSubTitle(action.subProduct,state.productTitleList),
            loadingSub:false,
            errSub:false,
            errMessSub:'',
            successSub:true,
        })
    case actionTypes.ADD_SUB_PRODUCT_FAIL:
        return updateObject(state,{
                errSub:true,
                errMessSub:action.mess,
                loadingSub:false,
                successSub:false,
          })
    case actionTypes.ADD_SUB_PRODUCT:
        return updateObject(state,{
            loadingSub:true
        })
    case actionTypes.OK_SUB_SUCCESS:
        return updateObject(state,{
            successSub:false
    })
    default:
      return state;
  }
}

export default productTitle;