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
      const {onPress, label} = this.props;
      const S = Style();

      return (
        <View style={S.container}>
          <View style={S.buttonContainer}>
            <TouchableOpacity 
              onPress={onPress}
            >
              <Text style={S.text}>{label}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

// Export
export default Button;