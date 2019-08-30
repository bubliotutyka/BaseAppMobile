import React from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';

// Local Import
import S from './style';
import {userConnect} from '../../../redux/action/UserAction';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const mapStateToProps = state => {
  return { user: state.user };
}

const mapDispatchToProps = dispatch => ({
  userConnect: payload => dispatch(userConnect(payload)),
});

class LoginScreen extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    isLoading: false,
  }

  handleButton = async() => {
    this.props.userConnect({});
    this.props.navigation.navigate("AuthLoading");
  }

  handleChange = (text, name) => {
    this.setState({[name]: text});
  }

  render() {
    const {isLoading, email, emailError, password, passwordError} = this.state;

    if (isLoading) {
      return (
        <Loading />
      )
    }

    return(
      <Container>
        <ScrollView 
          style={S.scrollContainer}
          contentContainerStyle={S.scrollContent}
        >

          <View style={S.spaceTop}/>

          <Image 
            source={require('../../../assets/icon_pin.png')}
            style={S.image}
          />

          <View style={S.container}>
            <Input 
              placeholder="Email"
              label="Email"
              onChangeText={(text) => this.handleChange(text, "email")}
              value={email}
              error={emailError}
              keyboardType="email-address"
              autoCompleteType="email"
            />

            <Input 
              placeholder="Password"
              label="Password"
              onChangeText={(text) => this.handleChange(text, "password")}
              value={password}
              error={passwordError}
              autoCompleteType="password"
              secureTextEntry={true}
            />

            <Button
              label="Sign In"
              onPress={this.handleButton}
            />
          </View>
          
          <View style={S.spaceBottom}/>

        </ScrollView>
      </Container>
    )
  }
}

// Export
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);