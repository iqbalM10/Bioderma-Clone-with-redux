import { STATUS } from "@/utils/status";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productsDetail: [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk("getproducts", async () => {
    const res = await fetch('https://vercel-psi-coral.vercel.app/bioderma');
    const req = await res.json()
    return req
})


export const getCategoryProducts = createAsyncThunk("getcategory", async (category) => {
    const res = await fetch(`https://vercel-psi-coral.vercel.app/bioderma/category/${category}`);
    const req = await res.json()
    return req
})

export const getDetailProducts = createAsyncThunk("getproduct", async (id) => {
    const res = await fetch(`https://vercel-psi-coral.vercel.app/bioderma/${id}`);
    const req = await res.json()
    return req
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING
            })

            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload

            })

            .addCase(getProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL
            })


            .addCase(getDetailProducts.pending, (state, action) => {
                state.productDetailStatus = STATUS.LOADING
            })

            .addCase(getDetailProducts.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.products = action.payload

            })

            .addCase(getDetailProducts.rejected, (state, action) => {
                state.productDetailStatus = STATUS.FAIL
            })

            .addCase(getCategoryProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING
            })

            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload

            })

            .addCase(getCategoryProducts.rejected, (state, action) => {
                state.productsStatus = STATUS.FAIL
            })

    }
})

export default productsSlice.reducer