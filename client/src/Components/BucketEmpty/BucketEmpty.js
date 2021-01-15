import React from 'react'
import img from './../../img/undraw_empty_cart_co35.svg'
import './BucketEmpty.css'

export default function BucketEmpty() {
    console.log('render+BucketEmpty')
    return (
        <div className='bucket-empty__conatainer bucket-empty'>
            <div className='bucket-empty__description description-empty-bucket'>
                <h2 className='description-empty-bucket__title'>Йой ойойой аяаяаяй</h2>
                <p className='description-empty-bucket__text'>
                    Шановний покупець Ви ще нічого невибрали для купівлі. Ваш кошик пустий пустісінький.
                    Але не бійтеся у нас є великий асортимент електроніки.
                </p>
            </div>
            <div className='bucket-empty__img img-container--empty'>
                <img src={img} alt='empty bucket' className='img-container__img--empty img--empty'/>
                <img src={img} alt='empty bucket' className='img-container__img--empty img--empty'/>
                <img src={img} alt='empty bucket' className='img-container__img--empty img--empty'/>
            </div>
        </div>
    )
}
