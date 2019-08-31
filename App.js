import React from 'react';
import MainScreen from './screen/MainScreen';
import { Provider } from 'react-redux';

// Local Import
import Store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <MainScreen />
      </Provider>
    );
  }
}

export default App;