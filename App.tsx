import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import Routes from './src/routes';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
