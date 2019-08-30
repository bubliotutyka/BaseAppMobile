import React from 'react';
import Navigation from './navigation/navigation';
import { Provider } from 'react-redux';

// Local Import
import Store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
