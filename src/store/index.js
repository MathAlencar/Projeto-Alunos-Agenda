import { persistStore } from 'redux-persist'; // Manter os dados salvos no storage
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import persistReducers from './modules/reduxPersist'; // Aplicar persistência corretamente
import rootReducers from './modules/rootReducers';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Aplicando persistência aos reducers
const persistedReducer = persistReducers(rootReducers);

export const store = configureStore({
  reducer: persistedReducer, // Agora usando os reducers persistidos
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Evita erros com redux-persist
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
