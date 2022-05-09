import React from 'react';
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {FiShoppingCart} from 'react-icons/fi';

import "./Header.css";
import {MdShoppingCart} from "react-icons/md";
import { data } from '../../back/Data/Data';
import {productItems} from '../../back/Data/Data';
import { useState } from 'react';
import Searchout from '../Products/Searchout';
import Products from '../Products/Products';
import Click from '../Products/Click';
//import "../Products/Products.css"; 


 

const Header = ({cartItems,handleAddProduct,item}) => {
    console.log(data);
    let  [searchTerm,setSearchTerm] = useState('')
    const navigation = useNavigate()

    // const[productItems,setProductItems] = useState(null)
    // const Search= (ele)=>{
    //     console.log("gii search");
    //     if(data.productItems.map((data,key)=>data.name.toLowerCase)===ele){
    //         console.log(ele.name);
    //     }
    //     else{
    //         console.log('no found')
    //     }
    // };
  
    
    // {data.productItems.filter((val)=>{
    //     if(searchTerm == ""){
    //       return val
    //     }
    //     else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
    //       //  console.log(val);
            
    //       return val;
    //     //   <div>{val.name}</div>
    //     }
    //   }).map((val)=>{
    //       console.log(val.name)
    //     return <div key={data.productItems.id} className='search-output'>{val.name} </div>
    //   })}
      
//    <div className='try'>
//     {data.productItems.map(productItems=>{
//         return(
//             <div key={productItems.id}>
//                  <h1>{productItems.name}</h1>
                 
//                 </div>
//         )}
//     )} 
//     let name = {data.productItems.name}
    
//     </div>
const filtereddata = data.productItems.filter((el)=>{
    if(searchTerm === ''){
        return el;
    }
    else{
        return el.name.toLowerCase().includes(searchTerm);
    }
})
     
  return ( 
      <>
     
    <header className='header'>
        <div key={data.productItems.id}>
            <h1>
                <Link to= "/" className='logo'>
                    shop online
                </Link>
            </h1>
        </div>
        <div className='search'>
{/* <input type='text' placeholder='Search..' onChange={()=><Searchout  />} /> */}
{/* <input type='text' placeholder='Search..'  onChange= {(val)=>setSearchTerm(val.target.value)} />  */}
<input type='text' placeholder='Search..'  onChange= {e=>setSearchTerm(e.target.value)} />  </div> 

        <div className='header-links'> 
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
                <li>
                {/* <a href='/cart' className='cart'><MdShoppingCart/></a> */}
                {/* <Link to= '/cart'><MdShoppingCart> <span className='cart-length'>
                    {cartItems.length=== 0 ? "" :cartItems.length}
                // </span></MdShoppingCart></Link> */}  
                {/* correct one */}

                <Link to='/show' className='try'></Link>

                <Link to={`/product/${data.productItems.name}`}>{data.productItems.image}</Link>
               
                <Link to='/cart' className='cart'>
                    <MdShoppingCart/>
                    <span className='cart-length'>
                    {cartItems.length=== 0 ? "" : cartItems.length} </span>
                </Link>
               
                    
                    {/* <Link to='/cart'>MdShoppingCart
                        {/* <i className= "MdShoppingCart"></i> 
                        
                    />  */}
                   
                </li>
            </ul>
        </div>
        </header>
         <div className='products'>
            {  filtereddata.map((item)=>(
        <div className="card">
              

                {/* <input type='text' placeholder='search' onChange= {()=><Searchout/>} /> */}
                <div className='product'>
                 
                <Routes>
                    <Route path="/show/:name" element={<Click productItems={data.productItems.name}/>}></Route>
                    </Routes> 
                    <img
                    
                    className='product-image'  
                    src= {item.image}
                    alt ={item.name}
                    onClick ={()=>navigation("/Show/:name")}
                    // onClick = 
                    // onClick ={getButtonId}
                  
                    />
                    
                     {/* <Products/> */}
                </div>       
                <div>
                    <h3 className='product-name'>
                        {item.name}
                    </h3>
                </div>
                <div className='product-price'>{item.price}</div>
                
            
            <div>
            <button className='product-add-button' onClick={()=>handleAddProduct(item)}>Add to Cart</button>
            </div>
      
            {/* <input type='text' placeholder='search' /> */}
            </div> 

     
)) }
 </div>
            </>

 ) 
}

export default Header;
