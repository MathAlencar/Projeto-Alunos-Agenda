import storage from 'redux-persist/lib/storage'; // irá salvar no storage do prórpio navegador
import {} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'], // Irá receber quem você quer salvar no caso os modulos
    },
    reducers
  );

  return persistReducers;
};
