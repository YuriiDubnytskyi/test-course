import React from 'react'
import LoginForm from './../../Components/LoginForm/LoginForm'
import SignUpForm from './../../Components/SignUpForm/SignUpForm'
import {fetchUserSign,fetchUserLogin,addUserFail} from './../../store/actions/actionsUser'
import { Tabs } from 'antd';
import {useSelector, useDispatch} from 'react-redux' 
import './Login.css'

const { TabPane } = Tabs;

const Login = () => {
    console.log('render+Login')
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const onFinishS = (values) => {
        console.log('Success:', values);
        if(!re.test(String(values.username).toLowerCase())){
            dispatch(addUserFail('Not corect email'))
        }else{
            dispatch(fetchUserSign(values.username,values.password))
        }
       
    };

    const onFinishFailedS = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishL = (values) => {
        console.log('Success:', values);
        if(!re.test(String(values.username).toLowerCase())){
            dispatch(addUserFail('Not corect email'))
        }else{
            dispatch(fetchUserLogin(values.username,values.password))
        }
    };
    
    const onFinishFailedL = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="card-container">
            <Tabs type="card">
                <TabPane tab="Login" key="1">
                    <LoginForm user={user} onFinishFailedL={onFinishFailedL} onFinishL={onFinishL}/>
                </TabPane>
                <TabPane tab="SignUp" key="2">
                    <SignUpForm user={user} onFinishFailedS={onFinishFailedS} onFinishS={onFinishS}/>
                </TabPane>
            
            </Tabs>
        </div>
    )
}

Login.whyDidYouRender = true
export default Login