import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./features/timer/TimerSlice";
import candidateSlice from "./features/candidate/CandidateSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      timer: timerSlice,
      candidate: candidateSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
