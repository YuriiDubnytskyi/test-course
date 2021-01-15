import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import { Card,PageHeader,Pagination,Button} from 'antd';
import {useHistory,Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {fetchGetNews} from '../../store/actions/actionNews'
import CardDefault from '../../Components/CardDefault/CardDefault'
import './NewsList.css'

const NewsList = () => {
    console.log('render+NewsList')
	const [page,setPage] = useState(1)
	const news = useSelector(state => state.news.news.slice(0+ ((page-1)*3),3+ ((page-1)*3)))
	const newsL = useSelector(state => state.news.news.length)

	const history = useHistory()
	const dispatch = useDispatch()
	useEffect(()=>{
		setPage(1)
        dispatch(fetchGetNews())
	},[])



    return (
        <div className='news_container'>
            <PageHeader
				className="site-page-header"
				onBack={() => history.push('/')}
				title="Title"
				subTitle="This is a subtitle"
			/>
			<div className='news_list_container'>
            {
                news.length === 0?
				<div>
					<CardDefault loading={news.loading}/>
					<CardDefault loading={news.loading}/>
					<CardDefault loading={news.loading}/>
				</div>
                :
                
                news.map((el,i)=>{return (
					<div className='card-news__container card-news'>
						<div className='card-news__info info-news'>
							<h2 className='info-news__title'>{el.title}</h2>
							<div className='info-news__text'>
								{el.description}
							</div>
						</div>
						<div className='card-news__link-more'>
							<Link to={`/newsID/:${el._id}`} className='card-news__more-info'>More</Link>
						</div>
					</div>



					// <Card style={{ width: 300 }}
					// actions={[
					// 	<Button size='default'><Link to={`/newsID/:${el._id}`}>More</Link></Button>,
					// 	]}
					// >
					// 		<Card.Meta
					// 		title={el.title}
					// 		description={el.description}
					// 		/>
					// </Card>
				)
				})
                
            }
			</div>
			<Pagination className='news__pagination' current={page} onChange={(pageN)=>setPage(pageN)}  total={`${Math.ceil(newsL/3)}0`}/>
        </div>
    )
}
NewsList.whyDidYouRender = true
export default NewsList