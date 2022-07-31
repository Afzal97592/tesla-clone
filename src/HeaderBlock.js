import React from 'react'
import './HeaderBlock.css';

function HeaderBlock() {
  return (
    <div className='headerBlock'>
      <div className="headerBlock_info">
       <div className="headerBlock_infoText">
         <h1>Model 3</h1>
         <h4>Order Online for <span>Touchless Delivery</span></h4>
       </div>
       <div className="headerBlock_actions">
         <button className='headerBlock_buttonPrimary'>custome order</button>
         <button className='headerBlock_buttonSecondary'>existing inventory</button>
       </div>
      </div>
    </div>
  )
}

export default HeaderBlock
