import React from 'react';

import {Context} from './src/context';
import store from './src/store';

import AppContainer from './src/screen/AppContainer';

const App = () => {
  return (
    <Context.Provider value={store}>
      <AppContainer />
    </Context.Provider>
  );
};

export default App;
