import React, {Component} from 'react';
import {
  Text,
  Button,
  Alert,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {Name: '', Email: ''};
  }

  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {}
  };

  getData = async () => {
    try {
      const Name = await AsyncStorage.getItem('Name');
      const Email = await AsyncStorage.getItem('Email');

      this.setState({Name: Name, Email: Email});
    } catch (e) {}
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const {Name, Email} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.cc}>
          <Button
            title={'Logout'}
            onPress={() =>
              Alert.alert('Logout ?', [
                {
                  text: 'ok',
                  onPress: () => {
                    this.clearAll();
                    this.props.navigation.navigate('Login');
                  },
                },
                {
                  text: 'no',
                  onPress: () => {
                    return null;
                  },
                },
              ])
            }
          />
        </View>
        <View style={styles.container}>
          <View style={styles.top}>
            <FontAwesome5 style={styles.iconss} name={'user'} size={15} />
            <Text>{Name} </Text>
          </View>
          <View style={styles.top}>
            <FontAwesome5 style={styles.iconss} name={'envelope'} size={15} />
            <Text>{Email}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
  },
  cc: {
    width: 100,
    marginLeft: 256,
  },
  iconss: {
    paddingLeft: 20,
    color: 'grey',
  },
  top: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: 20,
    width: 280,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
