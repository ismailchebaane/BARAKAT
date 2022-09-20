import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState={

    products:[],
    error:null , 
    status:"idle"
}
export const productsSlice=createSlice({
name:"products",
initialState,
reducers:{

},extraReducers:(builder)=>{
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.products.push(action.payload)
    })
}


})
export const {getProducts}=productsSlice.actions
export const productReducer=productsSlice.reducer
export const fetchProducts=createAsyncThunk('/BARAKAT/products/fetchProducts',async()=>{
const response=await fetch("/BARAKAT/products-by-categories")
const data =await response.json();
return data

})
export const selectAllProducts=state=>state.products 