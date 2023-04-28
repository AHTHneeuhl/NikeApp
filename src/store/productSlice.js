import { createSlice } from "@reduxjs/toolkit";
import productList from "../data/products";

const initialState = {
  products: productList,
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      return {
        ...state,
        selectedProduct: state.products.find(
          (product) => product.id === action.payload
        ),
      };
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
