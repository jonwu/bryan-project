import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from 'common/store/configureStore';
import Root from 'view/root/Root';

const { store, persistor } = configureStore();
const onBeforeLift = () => {
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift}>
          <Root/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
