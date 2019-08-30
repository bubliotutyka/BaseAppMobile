import React from 'react';
import {
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

// Local Import
import LoadingScreen from '../../components/Loading';

const mapStateToProps = state => {
  return { user: state.user };
}

class Loading extends React.Component {
  state = {
    error: null,
  }

  componentDidMount = async () => {
    let {isLogin, token} = this.props.user;
    // const eToken = await SecureStore.getItemAsync('eToken');

    const d = new Date();
    const date = `${d.getHours()}h:${d.getMinutes()}m:${d.getSeconds()}s`;
    console.log('====================================');
    console.log(`User connect on "${Platform.OS}" at ${date}`);
    console.log('Token:', token);
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
export default connect(mapStateToProps)(Loading);