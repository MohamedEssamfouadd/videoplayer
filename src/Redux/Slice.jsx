/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    product:[],
    errors:null

 
}
const getAllproduct=createAsyncThunk("get-product",async()=>{
    try{
        const {data}=await axios.get("https://fakestoreapi.com/products")
        return data

    }catch(error){
        console.log(error);
        return error
        
    }
    

    
})
const slice=createSlice({
   initialState,
   name:"mohamed",
    extraReducers:((pro)=>{
        pro.addCase(getAllproduct.fulfilled,(state,action)=>{
            state.product=action.payload
        })
        pro.addCase(getAllproduct.rejected,(state,action)=>{
            state.errors=action.error.message
        })
       

    })
})
const getproductreducer=slice.reducer
export{getproductreducer,getAllproduct}