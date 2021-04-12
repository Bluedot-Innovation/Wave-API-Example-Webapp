import { createContext, useContext, useReducer } from "react";

// ACTIONS
export const UPDATE_CUSTOMER_NAME = "UPDATE_CUSTOMER_NAME";
export const UPDATE_ORDER_ID = "UPDATE_ORDER_ID"
export const DECREASE_ITEMS_COUNT = "DECREASE_ITEMS_COUNT";
export const INCREASE_ITEMS_COUNT = "INCREASE_ITEMS_COUNT";
export const RESET_STATE = "RESET_STATE";

const AppContext = createContext();

const initialState = {
  customerName: "",
  orderId: "",
  itemsCount: 1,
};

function appContextReducer(state, action) {
  switch (action.type) {
    case UPDATE_CUSTOMER_NAME:
      return {
        ...state,
        customerName: action.payload,
      };

    case UPDATE_ORDER_ID:
      return {
        ...state,
        orderId: action.payload
      }

    case INCREASE_ITEMS_COUNT:
      return {
        ...state,
        itemsCount: state.itemsCount + 1,
      };
    case DECREASE_ITEMS_COUNT:
      const itemsCount =
        state.itemsCount - 1 > 0 ? state.itemsCount - 1 : state.itemsCount;
      return {
        ...state,
        itemsCount,
      };

    case RESET_STATE:
      return initialState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appContextReducer, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used withing a AppContextProvider");
  }
  return context;
}

export { AppContextProvider, useAppContext };
