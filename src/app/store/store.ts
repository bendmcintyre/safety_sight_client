import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { headerSlice } from '../../features/common';
import { modalSlice } from '../../features/common';
import { rightDrawerSlice } from '../../features/common';
import { userSlice } from '../../features/common';
//import leadsSlice from '../features/leads/leadSlice';
import { authSlice } from '../../features/auth';
import { api } from '../../app/services/api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const combinedReducer = {
  [api.reducerPath]: api.reducer,
  header: headerSlice.reducer,
  rightDrawer: rightDrawerSlice.reducer,
  modal: modalSlice.reducer,
  //lead: leadsSlice,
  user: userSlice.reducer,
  auth: authSlice.reducer,
};

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) => {
  return configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    ...options,
  })
}

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;