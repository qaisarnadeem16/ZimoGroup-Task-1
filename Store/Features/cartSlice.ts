import { CartItem, Product } from "@/Interface";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface CartState {
  cartitems: CartItem[];
}
const initialState: CartState = {
  cartitems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      const item = state.cartitems.find(
        (el) => el.product.id === action.payload.id
      );
      if (item) item.qty++;
      else {
        state.cartitems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<Product>) => {
      const item = state.cartitems.find(
        (el) => el.product.id === action.payload.id
      );
      if (item) {
        if (item.qty > 1) {
          item.qty--;
        } else {
          state.cartitems = state.cartitems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
    },
  },
});

const cartitems = (state: RootState) => state.cart.cartitems;

export const totalCartItemsSelector = createSelector([cartitems], (cartitems) =>
  cartitems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);

export const totalPriceSelector = createSelector([cartitems], (cartitems) =>
  cartitems.reduce(
    (total: number, curr: CartItem) => (total += curr.product.price * curr.qty),
    0
  )
);

export const productQtySelector = createSelector(
  [cartitems, (cartitems, productId: number) => productId],
  (cartitems, productId) =>
    cartitems.find((el) => el.product.id === productId)?.qty
);


export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
