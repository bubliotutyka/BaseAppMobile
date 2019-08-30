import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

// Local Import
import S from './style';
import Loading from '../../../components/Loading';

const mapStateToProps = state => {
  return { user: state.user };
}

class ContactScreen extends React.Component {
  state = {

  }

  componentDidMount = async () => {
    
  }

  render = () => {
    return(
      <View style={S.container}>

        {/* <Text>Contact screen</Text> */}
        <Loading />

      </View>
    )
  }
}

// Export
export default connect(mapStateToProps)(ContactScreen);