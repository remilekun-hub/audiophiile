import { createContext, useContext, useReducer } from "react";
import { statereducer } from "./reducer";

const Context = createContext();

export const Mycontext = ({ children }) => {
  const initialState = {
    cart: [],
    modalstate: {
      cartmodal: false,
    },
  };

  const [store, dispatch] = useReducer(statereducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  );
};
export const Usemycontext = () => {
  return useContext(Context);
};
