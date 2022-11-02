export const statereducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART_MODAL":
      return {
        ...state,
        modalstate: { cartmodal: !state.modalstate.cartmodal },
      };
    case "CREATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cart: [...state.cart, action.payload.qty + 1],
      };

    default:
      return state;
  }
};
