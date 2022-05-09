import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../back/Data/Data'

const Click = () => {
    const {name} = useParams();
  return (
    <div className='click-container'>
        {data.productItems.filter((item)=>item.name === name).map((item,id)=>(
            <div key={id} className= 'click-img'>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <h2>{item.image}</h2>
                </div>
        ))}
        </div>
  )
}

export default Click