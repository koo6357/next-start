import { createWrapper } from 'next-redux-wrapper';
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import appReducer from '@/modules/app/slice';

const rootReducer = combineReducers({
  app: appReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
  });

  return store;
};

const makeStore = () => setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper(makeStore, { debug: true });
