import React from 'react'
import img from './../../img/undraw_empty_cart_co35.svg'
import './LikeEmpty.css'

export default function LikeEmpty() {
    console.log('render+LikeEmpty')
    return (
        <div className='like-empty__conatainer like-empty'>
            <div className='like-empty__description description-empty-like'>
                <h2 className='description-empty-like__title'>Йой ойойой аяаяаяй</h2>
                <p className='description-empty-like__text'>
                    Шановний покупець Ви ще нічого вподобали для купівлі.
                    Але не бійтеся у нас є великий асортимент електроніки.
                </p>
            </div>
            <div className='like-empty__img img-container--like'>
                <img src={img} alt='empty bucket' className='img-container__img--like img--empty'/>
                <img src={img} alt='empty bucket' className='img-container__img--like img--empty'/>
                <img src={img} alt='empty bucket' className='img-container__img--like img--empty'/>
            </div>
        </div>
    )
}
