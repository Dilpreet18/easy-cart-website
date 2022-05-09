import React,{useState} from 'react';
import {data} from "./Components/back/Data/Data";
import Header from './Components/front/Header/Header.js';
import Routess from './Components/front/Routess/Routess';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const {productItems} = data;
  // console.log({productItems,data})
  const [cartItems,setCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist= cartItems.find((item)=> item.id=== product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductExist,quantity:ProductExist.quantity +1}:item))
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item)=> item.id === product.id)
    if(ProductExist.quantity ===1){
      setCartItems(cartItems.filter((item)=> item.id !== product.id))
    } else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity -1}: item)
      )
    }
  }
  // new handle to navigate to another page 
  const handleShow =(product) =>{
    if((item)=>item.id === product.id){
      console.log("hii")
    }
  }
  const handleCartClearance = () =>{
    setCartItems([]);
  }
  
  return (
    <>
    <div>
      <BrowserRouter>
      <Header handleAddProduct={handleAddProduct} 
      cartItems= {cartItems}/>
      <Routess productItems= {productItems} 
      cartItems= {cartItems} 
      handleAddProduct= {handleAddProduct}
      handleRemoveProduct = {handleRemoveProduct}
      handleCartClearance= {handleCartClearance}
      />
      </BrowserRouter>

      
    </div>
    </>
  )
}

export default App;