import React from 'react'
import './Hero.css'
import Crypto from '../assets/img3.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Live Like Crypto Style🪙🪙</p>
                    <h1>Watch the price of your favourite Cryptocurrency👀 </h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero