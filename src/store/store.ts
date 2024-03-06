import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppDispatch = AppStore["dispatch"];
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;

export default makeStore;
