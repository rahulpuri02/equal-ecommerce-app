import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';

// config the store 
const store= configureStore({
   reducer: {
    cart: cartReducer,
   }
});


// export default the store 
export default store

