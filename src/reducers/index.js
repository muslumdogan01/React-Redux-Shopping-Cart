import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  cart: [],
};
// javascriptte defaul değer verirken esımınt şeklinde değer verebiliyoruz.Tıpkı aşağıda state verdiğimiz initial değeri giibi
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEPETE_EKLE":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
