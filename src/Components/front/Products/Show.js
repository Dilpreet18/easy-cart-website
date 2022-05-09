import React from 'react';
import { data } from '../../back/Data/Data';
import './Show.css'


const Show = () => {
  return (
    <div className='try'>
    {data.productItems.map(productItems=>{
        return(
            <div key={productItems.id} className='showitem'>
                 <h1 className='item-name'>{productItems.name}</h1>
                 <img src={productItems.image} className='showimg' ></img>
                 <h2 className='item-price'>{productItems.price}</h2>
                 <h3>{productItems.desc}</h3>
                 
                 
                </div>
        )}
    )} 
    
    
    </div>
  )
}

export default Show