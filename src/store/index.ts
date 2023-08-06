import { create, StoreApi, UseBoundStore } from 'zustand'

// ----------------------------------------------
// - Selectors
//
// allows store usage like:
//   const myValue = myStore.use.myValue();
//   const myFunc = myStore.use.myFunc();
//
// The above still allows reactive usage of the values
type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}

// ----------------------------------------------
// - Store
//
type AppState = {
  accessToken: string | null,
  isLoading: boolean,
  user: any,
}

const initialState:AppState = {
  accessToken: null,
  isLoading: false,
  user: null,
}

const useAppStoreBase = create<AppState>()((set, get) => ({
  ...initialState,
}));

const useAppStore = createSelectors(useAppStoreBase);

export {
  initialState,
  useAppStore,
}