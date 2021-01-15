import React from 'react'
import SideBar from './SideBar'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import * as redux from 'react-redux'
import { useSelector } from 'react-redux';
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));
//const spy = jest.spyOn(redux, 'useSelector')

const productTitle = {
  productTitleList: [
      {
        productTitle: 'Компи',
        idProductTitle: '123',
        subTitle: [
          {
            _id: '5f8c1681a8594c0cdc005707',
            productSubTitle: 'Ноути',
            idProductSubTitle: '14563',
            idProductTitle: '123',
            __v: 0
          }
        ]
      },
      {
        productTitle: 'Меблі',
        idProductTitle: '1234',
        subTitle: [
          {
            _id: '5f8c2047a8594c0cdc00570a',
            productSubTitle: 'Дивани',
            idProductSubTitle: '145631',
            idProductTitle: '1234',
            __v: 0
          },
          {
            _id: '5f8c20d5a8594c0cdc00570b',
            productSubTitle: 'Столи',
            idProductSubTitle: '234',
            idProductTitle: '1234',
            __v: 0
          }
        ]
      },
      {
        productTitle: 'Канцтовари',
        idProductTitle: '5241',
        subTitle: [
          {
            _id: '5f8c273ea8594c0cdc00570d',
            productSubTitle: 'Зошити',
            idProductSubTitle: '657',
            idProductTitle: '5241',
            __v: 0
          }
        ]
      },
      {
        productTitle: 'Машини',
        idProductTitle: '8454',
        subTitle: [
          {
            _id: '5f916f65c84c341b18dbcf70',
            productSubTitle: 'Жигули',
            idProductSubTitle: '554545',
            idProductTitle: '8454',
            __v: 0
          }
        ]
      },
      {
        productTitle: 'Іграшки',
        idProductTitle: '789456',
        subTitle: []
      }
    ],
  loading:false,
  loadingSub:false,
  errSub:false,
  errMessSub:'',
  successSub:false,
  err:false,
  errMess:'',
  success:false,
};
const state= {
	productTitle
}
//spy.mockReturnValue(productTitle.productTitleList)

describe('should render SideBar component Props',()=>{

    it('should render with default props',()=>{
      useSelector.mockImplementation(()=>productTitle.productTitleList);
        let component =shallow(
            // <Provider store={store}>
            //   <SideBar collapsed={false}/>
            // </Provider>
            <SideBar collapsed={false}/>
          );
        expect(component).toMatchSnapshot();
    })
    // const user ={
    //     err: true,
    //     errMess: 'Some Problem',
    // }
    // it('should render with different props',()=>{
    //     const component = shallow(<LoginForm user={user} onFinishFailedL={onFinishFailedL} onFinishL={onFinishL}/>)
    //     expect(component).toMatchSnapshop()
    // })
 
})
