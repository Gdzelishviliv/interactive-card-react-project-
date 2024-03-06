import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className='card-container'>
        <div className='card-back-side'>
           <div className='card-back-line'></div>
           <div className='card-cvc-section'>
            <div className='cvc-container'>
                <span className='cvc'>000</span>
            </div>
           </div>
        <div className='card-front-side'>

        </div>
        </div>
    </div>
  )
}

export default Card