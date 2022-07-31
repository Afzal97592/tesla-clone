import React from 'react'
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import './Car.css';

function Car({imgSrc, model, testDerive}) {
  return (
    <div className='car'>
      <div className="car_img">
       <img src={imgSrc} alt={model} />
      </div>
      <h2 className="car_model">{model}</h2>
      <div className="car_actions">
        <ButtonPrimary name = 'order' />
        {testDerive && <ButtonSecondary name = 'test derive' />}
      </div>
      <div className="car_info">
        <span>Request a Call</span> to speak with a product speciallist, value your trade-in or apply foe leasing
      </div>
    </div>
  )
}

export default Car