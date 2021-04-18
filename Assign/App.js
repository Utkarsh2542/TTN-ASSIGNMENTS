import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Button,
  View,
  SafeAreaView,
  Modal,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Button
            style={styles.btn}
            title="Show Modal"
            onPress={() => {
              this.setState({show: true});
            }}
          />

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.show}>
            <View style={styles.topb}>
              <View style={styles.n}>
                <Text style={styles.tt}>Hello</Text>

                <Image style={styles.l} source={require('./Ghost.gif')} />

                <Button
                  title="Hide Modal"
                  onPress={() => {
                    this.setState({show: false});
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topb: {
    backgroundColor: 'grey',
    flex: 1,
  },
  n: {
    backgroundColor: 'white',
    margin: 50,
    padding: 40,
    borderRadius: 20,
    marginTop: 350,
  },
  tt: {
    fontSize: 25,
    marginHorizontal: 20,
    marginLeft: 80,
  },
  l: {marginLeft: 75},
});
export default App;
