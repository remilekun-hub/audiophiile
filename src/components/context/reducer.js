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
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = c.quantity + 1)
            : c.quantity
        ),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = c.quantity - 1)
            : c.quantity
        ),
      };
    default:
      return state;
  }
};
