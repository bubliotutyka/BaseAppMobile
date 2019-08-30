import React from 'react';
import { 
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';

// Local Import
import Theme from '../../assets/styles/Theme';
import Style from './style';

class Loading extends React.Component {
    render() {
        const theme = Theme.getTheme();
        const S = Style();

        return(
            <View style={S.container}>
                <ActivityIndicator 
                    size="large"
                    color={theme.active}
                />
            </View>
        )
    }
}

// Export
export default Loading;


