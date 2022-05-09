import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import { data } from '../../back/Data/Data';
import Show from '../Products/Show';
import Preview from '../Signup/Preview';

const Routess = ({productItems,
   cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance}) => {
  // console.log(productItems)
  return (
    <div>
        <Routes>
          <Route exact path='/preview' element={<Preview/>}></Route>
            <Route  exact path="/header" element= {<Header productItems={productItems} handleAddProduct= {handleAddProduct}/>}>
            {/* <Route exact path='/' element={<Products/>}> */}
              {/* // <Products productItems={productItems}/> */}
            </Route>
            <Route exact path='/signup' element={<Signup/>}>

            </Route>
            <Route exact path='/cart' element={<Cart cartItems= {cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct= {handleRemoveProduct}
            handleCartClearance = {handleCartClearance}/>}></Route>

            <Route path='/Show' element={<Show/>}></Route>
        </Routes>
              
    </div>
  )
}

export default Routess;