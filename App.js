import React from 'react';
import MainApp from './screen/MainApp';
import { Provider } from 'react-redux';

// Local Import
import Store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <MainApp />
      </Provider>
    );
  }
}

export default App;