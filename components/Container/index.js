import React from 'react';
import { StyleSheet, View } from 'react-native';

// Local Import
import Style from './style';

class Container extends React.Component {
    render() {
        const S = Style();

        return (
            <View style={S.container}>
                {this.props.children}
            </View>
        );
    }
}

// Export
export default Container;