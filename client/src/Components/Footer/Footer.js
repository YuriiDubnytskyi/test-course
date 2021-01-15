import React from 'react'
import { Layout } from 'antd';
export default function Footer() {
    console.log('render+Footer')
    return (
        <div>
            <Layout.Footer theme="dark" mode="horizontal" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
        </div>
    )
}
