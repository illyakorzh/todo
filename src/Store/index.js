import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { taskReducer } from './taskReducer';





const reducers = combineReducers({

  taskReducer,
});

export const store = configureStore(
  {  reducer: reducers,
    middleware: getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),}
);
