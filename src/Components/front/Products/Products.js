import React,{useState} from 'react';
import { Routes,Route, useNavigate, Navigate,  } from 'react-router-dom';
import "./Products.css";
import Show from './Show';
import { data } from '../../back/Data/Data';
import axios from 'axios';
import Searchout from './Searchout';
import Click from './Click';
import Header from '../Header/Header';



const Products = ({productItems,handleAddProduct,handleShow,props}) => {
    // console.log(productItems);
    const [searchTerm,setSearchTerm] = useState('')
    
    const navigation = useNavigate()

    const getButtonId = (e) => {
        console.log(e.currentTarget.data.productItems.id);
        }

        

          // const getProducts=()=>{
          //   axios.get().then(response)=>{
          //     console.log(response);
          //   }
          // }

  return (<>
    {/* {fil} */}
    {/* <Header/> */}
    {/*  */}
    </> )
}

export default Products