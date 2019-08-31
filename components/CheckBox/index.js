import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomIcons from 'react-native-vector-icons/FontAwesome';

// Local Import
import Style from './style';
import Color from '../../assets/styles/Color';
import Theme from '../../assets/styles/Theme';

class Button extends React.Component {
    render() {
      const {onPress, label, checked, leftLabel} = this.props;
      const theme = Theme.getTheme();
      const S = Style();

      return (
        <View style={S.container}>
          <TouchableOpacity
            style={S.checkboxContainer}
            onPress={onPress}
          >
            {label && <Text style={S.label}>{label}</Text>}
            <View style={S.checkbox}>
              {checked && <CustomIcons style={S.checked} name="check" size={20} color={theme.checkbox} />}
            </View>
            {leftLabel && <Text style={S.leftLabel}>{leftLabel}</Text>}
          </TouchableOpacity>
        </View>
      );
    }
}

// Export
export default Button;