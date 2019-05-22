import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Alert, TouchableHighlight, Text } from 'react-native';
import FingerPrint from './touch';

export class App extends React.Component {
    constructor(props) {
        super(props)
    }

    showAlert = (text) => {
        Alert.alert(text)
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <FingerPrint />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'gray',
    }
});

export default App;