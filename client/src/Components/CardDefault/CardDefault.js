import React from 'react'
import { Card,Skeleton } from 'antd';
const CardDefault = ({loading}) => {
	console.log('render+CardDefauld')
    return (
        <Card style={{ width: 300 }}>
				<Skeleton loading={loading} active> 
					<Card.Meta title={''} description={''}/>
				</Skeleton>		
		</Card>
    )
}
CardDefault.whyDidYouRender = true
export default CardDefault