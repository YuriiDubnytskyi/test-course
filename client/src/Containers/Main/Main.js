import React from 'react'
import './Main.css'
import {useHistory,BrowserRouter,
	Switch,
	Route,
	} from 'react-router-dom'
import Login from '../Login/Login'
import Admin from '../Admin/Admin'
import ProductList from '../ProductList/ProductList'
import Product from '../Product/Product'
import Bucket from '../Bucket/Bucket'
import Like from '../Like/Like'
import Profile from '../Profile/Profile'
import Callback from '../Callback/Callback'
import Welcome from './../../Components/Welcome/Welcome'
import BuyProduct from '../BuyProduct/BuyProduct'
import NewsList from '../NewsList/NewsList'
import News from '../News/News'
import Help from '../Help/Help'
function areEqual(prevProps, nextProps) {
    console.log(prevProps)
    console.log(nextProps)
    return true
  }
const Main = (props) => {
    console.log('render+Main')
    return (
            <div className='main_container'>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/productList/:id">
                        <ProductList />
                    </Route>
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                    <Route path="/bucket">
                        <Bucket />
                    </Route>
                    <Route path="/like">
                        <Like />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/callback">
                        <Callback />
                    </Route>
                    <Route path="/buyproduct">
                        <BuyProduct />
                    </Route>
                    <Route path="/news">
                        <NewsList />
                    </Route>
                    <Route path="/newsID/:id">
                        <News />
                    </Route>
                    <Route path="/help">
                        <Help />
                    </Route>
                    <Route path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </div>
    )
}

Main.whyDidYouRender = true
export default React.memo(Main,areEqual)