import React from 'react'
import {useSelector} from 'react-redux'
import { Card,PageHeader,Button} from 'antd';
import {useHistory,useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {fetchDeleteNews,okNewsDeleteSuccess} from '../../store/actions/actionNews'
import {SuccessDelete} from './../../Components/Modal/Modal'

const News = () => {
	console.log('render+News')
    let {id} = useParams()
	const news = useSelector(state => state.news.news.filter(el=>el._id===id.slice(1)))
	const newsD = useSelector(state => state.news)
	const admin = useSelector(state => state.user.user.admin)
	const dispatch = useDispatch()
	const history = useHistory()
	const okSuccessD = () =>{
        dispatch(okNewsDeleteSuccess())
    }
	  
    return (
        <div className='news_container'>
            <PageHeader
				className="site-page-header"
				onBack={() => history.push('/news')}
				title="Title"
				subTitle="This is a subtitle"
			/>
			<div className='news_list_container'>
				<Card style={{ width: 300 }}
					actions={[
						admin?<Button size='default' onClick={()=>dispatch(fetchDeleteNews(news[0]._id))}>Delete</Button>:<></>,
						]}
				>
					<Card.Meta
						title={news[0].title || ''}
						description={news[0].description || ''}
					/>
				</Card>
				{newsD.errDel?<p>{newsD.errMessDel}</p>:<></>}
                {newsD.successDel?<>
                <p>{SuccessDelete(()=>history.push('/'))}</p>
                <p>{okSuccessD()}</p>
                </>:<></>}
			</div>
        </div>
    )
}

News.whyDidYouRender = true
export default News