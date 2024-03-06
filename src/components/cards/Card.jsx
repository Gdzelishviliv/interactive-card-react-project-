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
            <div className='card-icn'></div>
            <h3 className='card-number'>0000 0000 0000 0000</h3>
            <div className='expiration-date-section'>
                <h4>JANE APPLESEED</h4>
                <span>00/00</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card