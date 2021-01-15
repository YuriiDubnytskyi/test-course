import React ,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import Header from './Components/Header/Header';
import SideBar from './Components/Sidebar/SideBar';
import Main from './Containers/Main/Main';
import Footer from './Components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux' 
import {fetchAddProductAll} from './store/actions/actionsTitle'
import ChatWidget from "@papercups-io/chat-widget";
import { TimestreamQuery } from 'aws-sdk';
import axios from 'axios'
import {addUserSuccess} from './store/actions/actionsUser'

function App() {
	const dispatch = useDispatch()
	
	// const [collapsed,setCollapsed] = useState(true)
	useEffect(()=>{
		dispatch(fetchAddProductAll())
		// axios.get('/auth/isAuth').then((res)=> console.log(res))
		axios.get('/api/user/isAuth').then((res)=> {
			if(res.data.status == 200){
				dispatch(addUserSuccess(res.data.user))
			}
		})
	},[])
	
	// const toggle = () => {
	// 	console.log(collapsed+'sidepar')
	// 	setCollapsed(!collapsed)
	// };


	return (
		<BrowserRouter>
			<Header />
			<Layout className='main'>
				
				<Layout>
					<SideBar />
					<Main />
					<ChatWidget
						title="Welcome to Dubnytskyi Corporation"
						subtitle= "Ask us anything in the chat window below 😊"
						primaryColor="#abb8c3"
						greeting="Hello! Any questions ?"
						newMessagePlaceholder="Start typing..."
						accountId="f02d10e2-ff5b-4a0b-be71-f2bffc5d7e9f"
						baseUrl="https://app.papercups.io"
					/>

				</Layout>
				{/* <Footer/> */}
			</Layout>
		</BrowserRouter>
	);
}

export default App;
