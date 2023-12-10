import { products } from '@/service'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ProductType = {
    id: number,
    title: string,
    description:string,
    price: number
    rating: number,
    currency: string,
    restoran:  string,
    thumbnail: string,
    images: string[],
}

const initialState= {
  products: products,
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

export const productsSliceActions = { ...productSlice.actions }

export default productSlice.reducer