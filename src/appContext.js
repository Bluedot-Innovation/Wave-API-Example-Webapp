import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  firstname: "",
  itemsCount: 1,
};

function appContextReducer(state, action) {
  switch (action.type) {
    case "updateFirstname":
      return {
        ...state,
        firstname: action.payload,
      };

    case "increaseItemsCount":
      return {
        ...state,
        itemsCount: state.itemsCount + 1,
      };
    case "decreaseItemsCount":
      const itemsCount =
        state.itemsCount - 1 > 0 ? state.itemsCount - 1 : state.itemsCount;
      return {
        ...state,
        itemsCount,
      };

    case "resetState":
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
