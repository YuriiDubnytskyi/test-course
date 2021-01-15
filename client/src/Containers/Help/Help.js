import React,{useState} from 'react'
import {SuccessText} from './../../Components/Modal/Modal'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import HelpLetter from './../../Components/HelpLetter/HelpLetter'

const Help = () => {
    console.log('render+Help')
    const [loading,setLoading] = useState(false)
    const [success,setSuccess] = useState(false)
    const history = useHistory()
    const onFinish = values => {
        console.log(values);
        setLoading(true)
        axios.post('/api/user/sendText',{options:values})
        .then( (data) => {
            if(data.data.success){
              setLoading(false)
              setSuccess(true)
            }
        })
    };
	const successFull = () =>{
		SuccessText(()=>history.push('/'))
	}

	return (
		<HelpLetter
			onFinish={onFinish}
			loading={loading}
			successFull={successFull}
			success={success}
		/>
		)
};

Help.whyDidYouRender = true
export default Help