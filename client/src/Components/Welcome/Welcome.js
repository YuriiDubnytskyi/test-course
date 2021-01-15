import React from 'react'
import img from './../../img/undraw_web_shopping_dd4l (1).svg'
import './Welcome.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux' 
const Welcome = (props) => {
    const dispatch = useDispatch()
    const qwe = () => {
        return {
          type: 'aa'
        }
      }
    const aa = () => {
        dispatch(qwe())
    }
    console.log('render+Welcome')
    return (
        <div className='welcome__container welcome'>
            <div className='welocme__left text-container'>
                <h1 className='text-container__title title--welcome'>Vulka</h1>
                <h2 className='text-container__subtitle subtitle--welcome'>
                    Ми дуже раді бачити Вас у нашому інтернет магазині Vulka!
                </h2>
                <p className='text-container__text text--welcome'>
                    У нас Ви можете знайти електроніку на будь який смак і вигляд. 
                    Сподіваємось ви знайдете те що Ви хочете і залишитесь задоволені покупкою.
                    Якщо виникають проблеми напишітьнам лист у розділі 
                    <span className='text-container__text-span'> Допомога </span>
                    або ж напишіть нам у чат і наші працівники звяжуться з Вами за кілька хвилин.  
                </p>
                <div className='welcome__left-btn__container btn__container--welcome'>
                    <div className='btn__container-item' onClick={aa}>
                        Каталог
                    </div>
                    <div className='btn__container-item'>
                        <Link to='/help'>Є Проблема або Запитання ?</Link>
                    </div>
                </div>
            </div>
            <div className='welocme__right img-container--welcome'>
                <img src={img} className='img-container__img img--welcome' alt='shooping img'/>
            </div>
            
        </div>
    )
}
Welcome.whyDidYouRender = true
export default Welcome