import React from 'react'
import { Layout, Menu } from 'antd';
import './SideBar.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux' 

const SideBar = (props) => {
    const dispatch = useDispatch()
    const qwe = () => {
        return {
          type: 'aa'
        }
      }
    const aa = () => {
        dispatch(qwe())
    }
    const productTitle = useSelector(state => state.productTitle.productTitleList)
    const collapsed = useSelector(state => state.aa.collapsed)
    console.log('render+SideBar')
    return (
        <div className='sider'>
            <Layout.Sider
                trigger={null} collapsible collapsed={collapsed} collapsedWidth="0"
                style={{
                    overflow:'auto',
                    height:'70vh',
                    position:'fixed'
                  }}
                >
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    {productTitle === undefined?<></>: productTitle.map((el,i)=>
                        
                            <Menu.SubMenu key={el.idProductTitle} title={`${el.productTitle} ${el.idProductTitle}`}>
                                {el.subTitle.map((el,index)=>
                                        <Menu.Item key={el._id}><Link to={`/productList/:${el.idProductSubTitle}`} onClick={aa}>{el.productSubTitle}</Link></Menu.Item>
                                    
                                )}
                            </Menu.SubMenu>
                        
                    )}
                </Menu>
                </Layout.Sider>
        </div>
    )
}
SideBar.whyDidYouRender = true
export default SideBar