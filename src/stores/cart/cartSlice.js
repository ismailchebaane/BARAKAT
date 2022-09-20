import { createSlice } from "@reduxjs/toolkit";
const initialState={

    products:[]
}
export const cartSlice =createSlice({
name:'cart',
initialState,
reducers:{
    addToCart:(state,action)=>{
        const x=action.payload.name
        const index=state.products.findIndex(function(object,ind){
           if(object.name===x) {
            return ind
           }
        });
       if(index===-1){ 
      
        return{products:[...state.products,{...action.payload,amount:1}]}
    
    }

    },clearCart:(state)=>{
        return{products:[]}
    },incrementProductAmount:(state,action)=>{

        return{products:state.products.map(product=>
        product.id===action.payload.id?{...product,amount:product.amount+1}:product
        )}
    },decrementProductAmount:(state,action)=>{

        return{products:state.products.map(product=>
        product.id===action.payload.id?{...product,amount:product.amount-1}:product
        )}
    },getAllProducts:(state,action)=>{
     return state.products

    }
}

})

export const cartProducts=state=>state.cart.products
export const {getAllProducts,addToCart,clearCart,incrementProductAmount,decrementProductAmount}=cartSlice.actions
export default cartSlice.reducer