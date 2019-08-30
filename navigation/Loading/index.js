import React from 'react';
import {
  Platform,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';

// Local Import
import LoadingScreen from '../../components/Loading';

class Loading extends React.Component {
  state = {
    error: "",
  }

  componentDidMount = async () => {
    let isLogin = true;
    const eToken = await SecureStore.getItemAsync('eToken');
    
    const d = new Date();
    const date = `${d.getHours()}h:${d.getMinutes()}m:${d.getSeconds()}s`;
    console.log('====================================');
    console.log(`User connect on "${Platform.OS}" at ${date}`);
    console.log('eToken:', eToken);
    console.log(`Status: ${isLogin ? 'connect' : 'disconnect'}`);
    console.log('====================================');
    
    this.props.navigation.navigate(isLogin ? 'App' : 'Auth');
  }

  render() {
    return(
      <LoadingScreen error={this.state.error}/>
    )
  }
}

// Export
export default Loading;