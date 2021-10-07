import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

ReactDOM.render(
    <div className='picture-gallery'>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture1.jpeg'} alt=""/>
            <p className='picture__text'>Цитрусовый фреш. Апельсин</p>
        </div>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture2.jpeg'} alt=""/>
            <p className='picture__text'>Звездная ночь</p>
        </div>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture3.jpeg'} alt=""/>
            <p className='picture__text'>Постояноство памяти</p>
        </div>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture4.jpeg'} alt=""/>
            <p className='picture__text'>Черный квадрат</p>
        </div>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture5.jpeg'} alt=""/>
            <p className='picture__text'>Тайная вечерня</p>
        </div>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture6.jpeg'} alt=""/>
            <p className='picture__text'>Герника</p>
        </div>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture7.jpeg'} alt=""/>
            <p className='picture__text'>Рождение Венеры</p>
        </div>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture8.jpeg'} alt=""/>
            <p className='picture__text'>Девочка с персиками</p>
        </div>
        <div className='picture'>
            <img className='picture__image' src={process.env.PUBLIC_URL + 'pictures/picture9.jpeg'} alt=""/>
            <p className='picture__text'>Утро в сосновом бору</p>
        </div>
    </div>,
    document.querySelector('.app')
)
