import React,{useState,useEffect} from 'react'
import { Layout, Menu,Button,Input } from 'antd';
import "./Header.css"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';
  import {Link,useHistory} from 'react-router-dom'
import {logout} from './../../store/actions/actionsUser'
import { useDispatch ,useSelector} from 'react-redux';
import {fetchGetProductListSearch} from './../../store/actions/actionList'
const { Search } = Input;
function areEqual(prevProps, nextProps) {
    console.log(prevProps)
    console.log(nextProps)
    return true
  }
const Header = (props) => {
    useEffect(() => {
        console.log('render+Header')
        return (prevProps, nextProps) => {
          console.log('componentWillUnmount!');
        };
      })
    
    const user = useSelector(state => state.user)
    const loading = useSelector(state => state.productList.loadingList)

    const [searchValue,setSearchValue] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()
    const logOut = () =>{
        dispatch(logout())
        history.push('/')
    }
    const onSearch = () => {
        dispatch(fetchGetProductListSearch(searchValue))
        history.push('/productList/:search')
    }


    const qwe = () => {
        return {
          type: 'aa'
        }
      }
    const aa = () => {
        dispatch(qwe())
    }
    return (
        <div className='multiple__header--grey'>
            <header className='header header--small'>
                <div className="logoH"><Link to='/'>Vulka</Link></div>
                <div className='header_btn_container' mode="horizontal" defaultSelectedKeys={['2']}>
                    
                    <div className='search_block'>
                        <div  className='btn_link_container'>
                            <span className='trigger' onClick={aa} className='header_first_btn'>Каталог</span>
                        </div>
                        <input  className='search_input'
                            placeholder="Введіть що бажаєте купити"
                            onChange={(e)=>setSearchValue(e.target.value)}
                            //loading={loading}
                        />
                        <button className='search_btn' onClick={onSearch}>Пошук</button>
                    </div>

                    <div className='btn_conatiner_func'>

                        <div className='header_second_btn_container'>
                            <Link to='/news' className='header_first_btn'>Новини & Акції</Link>
                        </div>
                        
                        {
                            user.user.auth && !user.user.admin?<>
 
                            <div className='header_second_btn_container'>
                                <Link to='/help' className='header_first_btn'>Допомога</Link>
                            </div>
                            <div className='header_second_btn_container'>
                                <Link to='/like' className='header_first_btn'>Like</Link>
                            </div>
                            <div className='header_second_btn_container'>
                                <Link to='/bucket' className='header_first_btn'>Кошик</Link>
                            </div></>
                            :
                            user.user.admin?<></> : <>
                                <div className='header_second_btn_container'>
                                    <Link to='/help' className='header_first_btn'>Допомога</Link>
                                </div>
                                <div className='header_second_btn_container'>
                                    <Link to='/bucket' className='header_first_btn'>Кошик</Link>
                                </div>
                            </>
        
                        }
                        {
                            user.user.admin?
                            <div className='header_second_btn_container'>
                                <Link to='/admin'  className='header_first_btn'>Панель управління</Link>
                            </div>
                            :<></>
                        }
                        

                    </div>
                    {
                        user.user.auth?
                        <div className='header_first_btn_conatiner'>
                            <div className='btn_link_container'>
                                <Link to='/profile' className='header_first_btn'>Профіль</Link>
                            </div>
                            <span className='header_first_btn_line'></span>
                            <div className='btn_link_container'>
                                <Link onClick={logOut} className='header_first_btn'>Вийти</Link>
                            </div>
                            
                        </div>
                        :
                        <div className='header_first_btn_conatiner'>
                            <div className='btn_link_container'>
                                <Link to='/login' className='header_first_btn'>Профіль</Link>
                            </div>
                            <span className='header_first_btn_line'></span>
                            <div  className='btn_link_container'>
                                <Link to='/login' className='header_first_btn'>Ввійти</Link>
                            </div>
                            
                            
                        </div>
                    }
                   
                </div>
            </header>
        </div>
    )
}

Header.whyDidYouRender = true
export default React.memo(Header,areEqual)