import React from 'react';
import { 
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

// Local Import
import Style from './style';

class Button extends React.Component {
    render() {
      const {onPress, label, containerStyle, buttonStyle} = this.props;
      const S = Style({
        containerStyle,
        buttonStyle
      });

      return (
        <View style={S.container}>
            <TouchableOpacity 
              style={S.buttonContainer}
              onPress={onPress}
            >
              <Text style={S.text}>{label}</Text>
            </TouchableOpacity>
        </View>
      );
    }
}

// Export
export default Button;