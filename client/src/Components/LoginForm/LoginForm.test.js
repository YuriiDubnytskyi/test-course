import React from 'react'
import LoginForm from './LoginForm'
import user from './../../store/reducers/user';
import renderer from 'react-test-renderer';
const onFinishL = (values) => {
    console.log('Success:', values);
    dispatch(fetchUserLogin(values.username,values.password))
};

const onFinishFailedL = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const setUp = () => shallow(<LoginForm user={user} onFinishFailedL={onFinishFailedL} onFinishL={onFinishL}/>)

describe('should render LoginForm component',()=>{
    let component
    beforeEach(()=>{
        component = setUp()
    })

    it('should contain .login-container',()=>{
        const wrapper = component.find('.login-container')
        expect(wrapper.length).toBe(1)
    })

    it('should contain .login-container__form',()=>{
        const wrapper = component.find('.login-container__form')
        expect(wrapper.length).toBe(1)
    })

    it('should contain .login-container__form__item 3',()=>{
        const wrapper = component.find('.login-container__form__item')
        expect(wrapper.length).toBe(3)
    })

    it('should contain .login-container__form__fail',()=>{
        const wrapper = component.find('.login-container__form__fail')
        expect(wrapper.length).toBe(1)
    })

    it('should contain .login-container__form__item--btn-submit',()=>{
        const wrapper = component.find('.login-container__form__item--btn-submit')
        expect(wrapper.length).toBe(1)
    })

    it('should contain .login-container__form__btn',()=>{
        const wrapper = component.find('.login-container__form__btn')
        expect(wrapper.length).toBe(1)
    })
})

// describe('should render LoginForm component Props',()=>{
//     const testForm = {
//         getFieldDecorator: jest.fn( opts => c => c )
//       };
//     it('should render with default props',()=>{
//         const component = mount(<LoginForm form={testForm} user={user}/>)
//         expect(component).toMatchSnapshop()
//     })
//     const user ={
//         err: true,
//         errMess: 'Some Problem',
//     }
//     it('should render with different props',()=>{
//         const component = shallow(<LoginForm user={user} onFinishFailedL={onFinishFailedL} onFinishL={onFinishL}/>)
//         expect(component).toMatchSnapshop()
//     })
 
// })
