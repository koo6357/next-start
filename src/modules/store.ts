import { createWrapper } from 'next-redux-wrapper';

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return store;
};

export const wrapper = createWrapper(createStore, { debug: true });
