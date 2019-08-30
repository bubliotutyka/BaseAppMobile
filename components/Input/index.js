import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';

// Local Import
import Style from './style.js';
import Color from '../../assets/styles/Color';

const mapStateToProps = state => {
  return { user: state.user };
}

class Input extends React.Component {
  getLabel = () => {
    const S = Style();

    return (
      <Text style={S.label}>{this.props.label}</Text>
    );
  }

  getError = () => {
    const S = Style();

    return (
      <Text style={S.text}>{this.props.error}</Text>
    );
  }

  render() {
      const {
        secureTextEntry, placeholder, editable, maxLength, onChangeText, label,
        containerStyle, keyboardType, value, inputStyle, error, autoCompleteType,
      } = this.props;

      const S = Style({
        containerStyle,
        inputStyle,
      });

      return (
        <View style={S.container}>
          {label && this.getLabel()}
          <View style={S.inputContainer}>
            { keyboardType === 'numeric' && <Text style={S.text}>+33 </Text>}
            <TextInput 
              style={S.input}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              editable={editable}
              maxLength={maxLength || 999999}
              onChangeText={onChangeText}
              keyboardType={keyboardType || "default"}
              autoCompleteType={autoCompleteType}
              value={value}
            />
          </View>
          {error !== "" && this.getError()}
        </View>
      );
    }
}

// Export
export default connect(mapStateToProps)(Input);