import React from 'react';
import {
  Platform,
} from 'react-native';
import { connect } from 'react-redux';

// Local Import
import LoadingScreen from '../../components/Loading';

const mapStateToProps = state => {
  return { user: state.user };
}

class Loading extends React.Component {
  state = {
    error: null,
  }

  componentWillMount = async () => {
    let {isLogin, token, theme} = this.props.user;

    const d = new Date();
    const date = `${d.getHours()}h:${d.getMinutes()}m:${d.getSeconds()}s`;
    console.log('====================================');
    console.log(`User connect on "${Platform.OS}" at ${date}`);
    console.log('Token:', token);
    console.log(`Status: ${isLogin ? 'connect' : 'disconnect'}`);
    console.log('Theme:', theme);
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