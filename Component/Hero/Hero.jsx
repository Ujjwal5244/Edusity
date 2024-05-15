import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>We Ensure better education for a better world </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae corporis sint praesentium dicta numquam sunt cupiditate reprehenderit iure,
                    dolorem laborum, laudantium itaque, atque aliquid culpa esse nam.
                    Tempore fugit adipisci autem ex dolorum recusandae animi? Ea vero sit corporis dolorem.
                </p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
