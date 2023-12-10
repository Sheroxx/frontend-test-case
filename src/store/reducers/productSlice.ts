import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ProductType = {
    id: number,
    title: string,
    description:string,
    price: number
    rating: number,
    currency: string,
    Restoran:  string,
    thumbnail: string,
    images: string[],
}

const initialState= {
  products:[
    
  ],
  search:""
} as {
    products: ProductType[],
    search: string,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        }
    },
   
})

export const userSliceActions = { ...productSlice.actions }

export default productSlice.reducer