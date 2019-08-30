import React from 'react';
import { 
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';

// Local Import
import Theme from '../../assets/styles/Theme';

class Loading extends React.Component {
    render() {
        const theme = Theme.getTheme();

        const S = StyleSheet.create({
            container: {
                flex: 1,
                // backgroundColor: Color.lightGrey,
                alignItems: 'center',
                justifyContent: 'center',
            },
        });

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


