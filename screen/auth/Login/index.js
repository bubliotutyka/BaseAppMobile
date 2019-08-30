import React from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';

// Local Import
import S from './style';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

class LoginScreen extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    isLoading: false,
  }

  handleButton = async() => {
    console.log('Login push');
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
              containerStyle={{width: "80%", marginBottom: 30}}
              placeholder="Email"
              label="Email"
              onChangeText={(text) => this.handleChange(text, "email")}
              value={email}
              error={emailError}
              keyboardType="email-address"
              autoCompleteType="email"
            />

            <Input 
              containerStyle={{width: "80%", marginBottom: 30}}
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
export default LoginScreen;