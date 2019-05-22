import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Alert, TouchableHighlight, Text } from 'react-native';
import Sortable from './sortable';

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
        <Sortable />

        {/* <TouchableWithoutFeedback
          // onPress={() => { this.showAlert("TouchableWithoutFeedback") }}          
        >
          <View style={{ width: 200, height: 50, marginTop: 50, marginLeft: 70, backgroundColor: 'red' }} >
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          style={{ width: 200, height: 50, marginTop: 50, marginLeft: 70, backgroundColor: 'green' }}
          onPress={() => { this.showAlert("TouchableOpacity") }}
        >
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableHighlight
          onPress={() => { this.showAlert("TouchableHighlight") }}
          style={{ width: 200, height: 50, marginTop: 50, marginLeft: 70, backgroundColor: 'orange' }}
        >
          <Text>TouchableHighlight</Text>
        </TouchableHighlight> */}


      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'gray',
  }
})
export default App;