import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';

// Local Import
import S from './style';
import Checkbox from '../../../components/CheckBox';

const mapStateToProps = state => {
  return { user: state.user };
}


class MapScreen extends React.Component {
  state = {
    checked: false,
  }

  handleCheckbox = () => {
    const {checked} = this.state;
    this.setState({checked: !checked});
  }

  componentDidMount = async () => {
    
  }

  componentWillUnmount = () => {
    
  }

  render() {
    const {checked} = this.state;

    return(
      <View style={S.container}>
        
        <Checkbox
          leftLabel="example"
          checked={checked}
          onPress={this.handleCheckbox}
        />

      </View>
    )
  }
}

// Export
export default connect(mapStateToProps)(MapScreen);