import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newCartItem = {
        product: action.payload,
        quantity: 1,
        size: 40,
      };
      const existingCartItem = state.items.find(
        (item) => item.product.id === newCartItem.product.id
      );
      const updatedCartItems = existingCartItem
        ? state.items.map((item) =>
            item.product.id === newCartItem.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : state.items.concat(newCartItem);
      return {
        ...state,
        items: updatedCartItems,
      };
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const updatedItems = state.items
        .map((item) => {
          if (item.product.id === productId) {
            const newQuantity = item.quantity + amount;
            if (newQuantity === 0) {
              return null;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item !== null);

      return { ...state, items: updatedItems };
    },
  },
});

export const { addItemToCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
