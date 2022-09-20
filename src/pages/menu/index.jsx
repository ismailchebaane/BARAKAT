import React from 'react';
import {useEffect}from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchProducts,selectAllProducts } from '../../stores/menu/productSlice';
const Menu = () => {
   const dispatch=useDispatch();
   const products=useSelector(selectAllProducts )
   useEffect(()=>{
dispatch(fetchProducts())


   },[])
    return (
        <div className="text-white">
            Menu
        </div>
    );
};

export default Menu;