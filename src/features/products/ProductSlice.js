import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authFetch from '../../axios/custom'

// getProducts 
export const getProducts = createAsyncThunk('product/getProducts', async (_, thunkAPI) =>{
  let url = `/products/search?q=`
  try {
    const response = await authFetch(`${url}${thunkAPI.getState().product.searchTerm}`)
    // console.log(thunkAPI.getState().product.searchTerm);
        return response.data.products
    } catch (error) {
        console.log(error.response.data);
    }
})

// fetch categories  
export const getProductCategories = createAsyncThunk('products/getProductCategories', async() =>{
  try {
    const response = await authFetch(`/products/categories`)
    return response.data
  } catch (error) {
     console.log(error);
  }
})

// initialState 
const initialState = {
  products: [],
  isLoading: true,
  searchTerm: 'a',
  categories: [],
}

// productSlice 
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   setSearchTerm: (state, {payload}) =>{
    state.searchTerm = payload
   },
  
  },
  extraReducers:{
    // getProducts 
    [getProducts.pending]: (state) =>{
        state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, {payload}) =>{
      state.products = payload;
      state.isLoading = false;
    },
    [getProducts.rejected]: (state) =>{
        state.isLoading = false;
    },
    // getProductCategories 
    [getProductCategories.pending]: (state) =>{
      state.isLoading = true;
    },
    [getProductCategories.fulfilled]: (state, {payload}) =>{
      state.isLoading = false;
      state.categories = payload
    },
    [getProductCategories.rejected]: (state) =>{
      state.isLoading = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSearchTerm } = productSlice.actions

export default productSlice.reducer