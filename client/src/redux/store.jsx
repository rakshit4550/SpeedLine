import { configureStore } from "@reduxjs/toolkit";
import whitelabelReducer from "./whitelabel/whitelabelSlice";
import sportsReducer from "./sports/sportsSlice";
import proofTypeReducer from "./proofType/proofTypeSlice"; 
import marketReducer from "./market/marketSlice"; 
import clientReducer from './client/clientSlice'

export const store = configureStore({
  reducer: {
    whitelabel: whitelabelReducer,
    sports: sportsReducer,
    proof: proofTypeReducer,
    market : marketReducer,
    clients: clientReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export default store;