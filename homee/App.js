import React, {Component} from 'react';
import {
  Animated,
  View,
  Alert,
  Image,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  Text,
} from 'react-native';
class App extends Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: Animated.event([
      null,
      {dx: this.pan.x, dy: this.pan.y},
    ]),
    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    },
  });
  Click = () => {
    Alert.alert('Going to homescreen!');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag this circle!</Text>
        <Animated.View
          style={{
            transform: [{translateX: this.pan.x}, {translateY: this.pan.y}],
          }}
          {...this.panResponder.panHandlers}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => this.Click()}>
              <Image
                style={styles.iconss}
                source={require('./draggable.jpg')}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  iconss: {
    height: 50,
    width: 50,
  },
});

export default App;
