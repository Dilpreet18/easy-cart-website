import React,{useState} from 'react';
import { data } from '../../back/Data/Data';
import Show from './Show';

const Searchout = () => {
    let searchTerm= ""
  return ( <>
    <div>Searchout</div>
    {data.productItems.filter((val)=>{
        if(searchTerm == ""){
          return val
        }
        else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            console.log(val);
           //window.location= <Show/>
          //return val;
         // <div>{val.name}</div>
        }
      }).map((val)=>{
        return 
       // <div key={data.productItems.id} className='search-output'>{val.name} <br/>  </div>
      })}
 </> )
}

export default Searchout