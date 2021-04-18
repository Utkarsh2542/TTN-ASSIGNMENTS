import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation, {
  getCurrentPosition,
  latitude,
  longitude,
} from 'react-native-geolocation-service';
class Locators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordi: [],
      markers: [
        {
          title: 'Bhopal',
          coordi: {
            latitude: 58.4532,
            longitude: 70.4433,
          },
        },
        {
          title: 'Sagar',
          coordi: {
            latitude: 30.11235,
            longitude: 89.5436,
          },
        },
        {
          title: 'Delhi',
          coordi: {
            latitude: 45.98,
            longitude: 84.65,
          },
        },
      ],
    };
  }

  handleRegionChange = (mapData) => {
    this.setState({
      latitude: mapData.latitude,
      longitude: mapData.longitude,
      mapData,
    });
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordi: this.state.coordi.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },

      (error) => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  }
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <MapView
            style={styles.map1}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.8,
              longitudeDelta: 0.5,
            }}
            showsUserLocation={true}
            onRegionChangeComplete={this.handleRegionChange}>
            <Marker
              pinColor={'orange'}
              title="Current Location"
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
            />
            {this.state.markers.map((marker, index) => (
              <MapView.Marker
                key={index}
                coordinate={marker.coordi}
                title={marker.title}
              />
            ))}
          </MapView>
        </View>
        <View style={styles.text}>
          <Text>
            Current Location: {this.state.latitude}, {this.state.longitude}
          </Text>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: 400,
    alignItems: 'center',
  },
  map1: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    marginTop: 400,
  },
});

export default Locators;
