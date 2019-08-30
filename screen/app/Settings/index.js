import React from 'react';
import {
  View
} from 'react-native';
import * as SecureStore from 'expo-secure-store';

// Local Import
import S from './style';
import Button from '../../../components/Button';

class SettingScreen extends React.Component {
  handleLogout = async () => {
    console.log('logout press');
  }

  render() {
    return(
      <View style={S.container}>

        <View style={S.logoutBtn}>

          <Button
            label="Logout"
            onPress={this.handleLogout}
          />

        </View>

      </View>
    )
  }
}

// Export
export default SettingScreen;