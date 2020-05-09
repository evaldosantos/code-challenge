import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import RootComponent from './components';
import './app.css';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
};

export default App;
