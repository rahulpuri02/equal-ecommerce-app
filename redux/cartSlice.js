import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  //getting cartItems from local storage 
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) =>  {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state,action) => {
      const index = state.cartItems.findIndex(
        (item) => item._id === action.payload.id
      );
      let newCart = [...state.items];
      if(index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log(`Cant remove product ${action.payload.id} as its not in basket`);
      }
      state.items = newCart;
    },

  },
});
//Action creator
export const { addToCart, removeFromCart } = cartSlice.actions;

//Selector
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsWithId = (state, id) => {
  state.cart.items.filter((item) => item_id === id);
};
export const selectCartTotal = (state) => {
  state.basket.items.reduce((total , item) => (total += item.price), 0);
}


export default cartSlice.reducer;