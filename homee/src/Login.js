import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {Name: '', Email: ''};
  }
  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('Name', `${this.state.Name}`);
      await AsyncStorage.setItem('Email', `${this.state.Email}`);
    } catch (e) {
      //error
    }
  };
  Click = () => {
    this.storeData();
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.head}>Let's Get Started !</Text>
          <Text style={styles.head1}>
            Create an account to Q Allure to get all features
          </Text>

          <View style={styles.top}>
            <FontAwesome5 style={styles.iconss} name={'user'} size={15} />
            <TextInput
              style={styles.t}
              placeholder="Name"
              onChangeText={(Name) => this.setState({Name})}
            />
          </View>
          <View style={styles.top}>
            <FontAwesome5 style={styles.iconss} name={'envelope'} size={15} />
            <TextInput
              style={styles.t}
              placeholder="Email"
              onChangeText={(Email) => this.setState({Email})}
            />
          </View>
          <View style={styles.top}>
            <FontAwesome5 style={styles.iconss} name={'mobile'} size={15} />
            <TextInput style={styles.t} placeholder="Phone" />
          </View>
          <View style={styles.top}>
            <FontAwesome5 style={styles.iconss} name={'unlock'} size={15} />
            <TextInput style={styles.t} placeholder="Password" />
          </View>
          <View style={styles.top}>
            <FontAwesome5 style={styles.iconss} name={'unlock'} size={15} />
            <TextInput style={styles.t} placeholder="Confirm Password" />
          </View>
          <View style={styles.btn}>
            <Button title="CREATE" color="blue" onPress={() => this.Click()} />
          </View>
          <View style={styles.bot}>
            <Text>Don't have an account ? </Text>
            <TouchableOpacity style={styles.btnn} onPress={() => this.Click()}>
              <Text style={styles.log}>Login</Text>
            </TouchableOpacity>
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
    backgroundColor: '#E9E8E2',
  },
  head: {
    fontSize: 28,
    marginTop: 40,
    fontWeight: 'bold',
  },
  head1: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
    marginBottom: 20,
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
  iconss: {
    paddingLeft: 20,
    color: 'grey',
  },
  t: {
    marginLeft: 15,
    borderColor: 'white',
    borderWidth: 1,
  },
  btn: {
    marginTop: 20,
    width: 100,
    borderRadius: 10,
  },

  bot: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 40,
  },
  log: {
    color: 'blue',
  },
});
