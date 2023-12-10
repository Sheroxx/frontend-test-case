import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type BasketType = {
    id: number,
    title: string,
    price: number
    currency: string,
    thumbnail: string,
    quantity: number
}

const initialState= {
  basket:[
    
  ],
  search:""
} as {
    basket: BasketType[],
}

const productSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action: PayloadAction<BasketType>) => {
            const index = state.basket.findIndex((value) => value.id == action.payload.id);

            if(index != -1) {
                state.basket[index].quantity += 1; 
            } else {
                state.basket.push({ ...action.payload, quantity: 1 });
            }

        },
        removeBasket: (state, action: PayloadAction<number>) => {
            const basketIndex = action.payload;

            if(state.basket[basketIndex].quantity == 1) {
                state.basket = state.basket.filter((item, index) => index !== basketIndex);
            } else {
                state.basket[basketIndex].quantity -= 1;
            }

        },
        
        setBasket: (state, action: PayloadAction<BasketType[]>) => {
            state.basket = action.payload;
        },
       
    },
   
})

export const userSliceActions = { ...productSlice.actions }

export default productSlice.reducer