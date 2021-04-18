import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  View,
  StyleSheet,
} from 'react-native';

export default class health extends Component {
  render() {
    const url =
      'https://s3.ap-south-1.amazonaws.com/kellton-images/images/banner-prod/Website-600dpi.jpg';
    const url1 =
      'https://s3.ap-south-1.amazonaws.com/kellton-images/images/banner-prod/Online-Consultation.jpg';
    const url2 =
      'https://s3.ap-south-1.amazonaws.com/kellton-images/images/banner-prod/Website-600dpi-new.jpg';
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.Container}>
              <View style={styles.Container1}>
                <Image
                  style={styles.section}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <TouchableOpacity onPress={() => alert('share your location')}>
                  <Ionicons
                    style={styles.cc}
                    name={'location'}
                    color={'yellow'}
                    size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('view your cart')}>
                  <Ionicons
                    style={styles.c1}
                    name={'cart-outline'}
                    color={'blue'}
                    size={30}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}>
                  <Image style={styles.show} source={{uri: url}} />
                  <Image style={styles.show} source={{uri: url1}} />
                  <Image style={styles.show} source={{uri: url2}} />
                </ScrollView>
              </View>
              <View style={styles.hl}>
                <View style={styles.semiContainer}>
                  <FontAwesome5 name={'pills'} size={50} />
                  <Text style={styles.run}>Medicines</Text>
                </View>
                <View style={styles.semiContainer}>
                  <FontAwesome5 name={'microscope'} size={50} />
                  <Text style={styles.run}>Test & Package</Text>
                </View>
                <View style={styles.semiContainer}>
                  <FontAwesome5 name={'laptop-medical'} size={50} />
                  <Text style={styles.run}>Online Consultation</Text>
                </View>
              </View>
              <View style={styles.h2}>
                <View style={styles.l}>
                  <FontAwesome5 name={'stethoscope'} size={30} />
                  <Text style={styles.run1}>Doctor Appointment</Text>
                </View>
                <View style={styles.l}>
                  <FontAwesome5 name={'leaf'} size={30} />
                  <Text style={styles.run1}>Wellness Packages</Text>
                </View>
                <View style={styles.l}>
                  <FontAwesome5 name={'smile'} size={30} />
                  <Text style={styles.run1}>Ask Zoy</Text>
                </View>
                <View style={styles.l}>
                  <FontAwesome5 name={'home'} size={25} />
                  <Text style={styles.run1}>Home Healthcare</Text>
                </View>
                <View style={styles.l}>
                  <FontAwesome5 name={'medkit'} size={30} />
                  <Text style={styles.run1}>Hospital Packages</Text>
                </View>
              </View>
              <View style={styles.mainb}>
                <Text>Diagnostic Packages by Zoylo Labs </Text>
                <View style={styles.botcont}>
                  <ScrollView horizontal={true}>
                    <View style={styles.open1}>
                      <Text style={styles.run2}>ADVANCED</Text>
                      <Text style={styles.run3}>
                        Zoylo Health Checkup with iron Sudies
                      </Text>
                      <Text style={styles.run4}>83 test included</Text>
                      <TouchableOpacity
                        onPress={() => Alert.alert('Are you sure?')}>
                        <Text style={styles.run5}>BOOK NOW</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.open2}>
                      <Text style={styles.run2}>ADVANCED</Text>
                      <Text style={styles.run3}>FeverPackage 3</Text>
                      <Text style={styles.ru}>66 test included</Text>
                      <TouchableOpacity onPress={() => alert('Are you sure?')}>
                        <Text style={styles.r}>BOOK NOW</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.open3}>
                      <Text style={styles.run2}>ADVANCED</Text>
                      <Text style={styles.run3}>FeverPackage 4</Text>
                      <Text style={styles.ru}>99 test included</Text>
                      <TouchableOpacity onPress={() => alert('Are you sure?')}>
                        <Text style={styles.r}>BOOK NOW</Text>
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
                <Text>Medicine Category</Text>
                <View style={styles.conn}>
                  <ScrollView horizontal={true}>
                    <View style={styles.hori}>
                      <FontAwesome5 name={'flask'} size={30} />
                      <Text style={styles.run}>Healthcare Products</Text>
                    </View>
                    <View style={styles.hori}>
                      <FontAwesome5 name={'shopping-basket'} size={30} />
                      <Text style={styles.run}>Ayurveda</Text>
                    </View>
                    <View style={styles.hori}>
                      <FontAwesome5 name={'blender'} size={30} />
                      <Text style={styles.run}>Homeopathy</Text>
                    </View>
                    <View style={styles.hori}>
                      <FontAwesome5 name={'heartbeat'} size={30} />
                      <Text style={styles.run}>Natural Remedies</Text>
                    </View>
                  </ScrollView>
                  <View style={styles.cas}>
                    <Text style={styles.run6}>
                      Order Medicines using {'\n'}prescription
                    </Text>
                    <Text style={styles.rj}>
                      & Get Medicines delivered at Home
                    </Text>
                    <TouchableOpacity
                      style={styles.btnMain}
                      activeOpacity={0.5}
                      onPress={() =>
                        Alert.alert('Do you really want to upload')
                      }>
                      <Text style={styles.btnText}>UPLOAD</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cas1}>
                    <Text style={styles.run6}>Online Doctor Consultation</Text>
                    <Text style={styles.rj}>
                      Consult with the top medical practitioner in your{'\n'}{' '}
                      city .Recover from the comfort of your home.
                    </Text>
                    <TouchableOpacity
                      style={styles.btnMain1}
                      activeOpacity={0.5}
                      onPress={() => Alert.alert('You want to consult?')}>
                      <Text style={styles.btnText1}>CONSULT NOW</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cas1}>
                    <Text style={styles.run6}>
                      Take free {'\n'}Online Health Assessment
                    </Text>
                    <Text style={styles.rj}>know your health status now .</Text>
                    <TouchableOpacity
                      style={styles.btnMain}
                      activeOpacity={0.5}
                      onPress={() => Alert.alert('Do you want to start?')}>
                      <Text style={styles.btnText}>START</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cas2}>
                    <Text style={styles.run6}>
                      Corporate Health plans{'\n'} Just for your workplace
                    </Text>
                    <Text style={styles.rj}>know your health status now .</Text>
                    <TouchableOpacity
                      onPress={() => Alert.alert('Login to your Account?')}>
                      <Text style={styles.btnText3}>
                        Login To your Corporate Account To await multiple
                        Benefits
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cas2}>
                    <Text style={styles.run6}>BLOGS</Text>
                    <Text style={styles.special}>
                      "A good laugh and a long sleep are the best cures in{'\n'}{' '}
                      the doctor's book."
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
  },
  section: {
    height: 50,
    width: 150,
    marginTop: 25,
  },
  Container1: {
    borderColor: '#c0c0c0',
    borderWidth: 3,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  mainb: {
    backgroundColor: '#E9F2F2',
    marginTop: 5,
  },
  run2: {
    margin: 10,
    backgroundColor: 'white',
    width: 80,
    textAlign: 'center',
    borderRadius: 5,
  },
  open1: {
    backgroundColor: '#E1D5E8',
    height: 300,
    width: 150,
    margin: 10,
    borderRadius: 10,
  },
  cas: {
    width: 340,
    height: 200,
    backgroundColor: 'white',
    margin: 10,
  },
  cas1: {
    width: 340,
    height: 150,
    backgroundColor: 'white',
    margin: 10,
  },
  cas2: {
    width: 340,
    height: 130,
    backgroundColor: 'white',
    margin: 10,
  },
  rj: {
    color: 'grey',
    fontSize: 8,
  },
  open3: {
    backgroundColor: '#F9F5D9',
    height: 300,
    width: 150,
    margin: 10,
    borderRadius: 10,
  },
  open2: {
    backgroundColor: '#C7D9E5',
    height: 300,
    width: 150,
    margin: 10,
    borderRadius: 10,
  },
  run3: {
    marginLeft: 8,
  },
  run4: {
    color: 'grey',
    marginLeft: 8,
    marginTop: 40,
  },
  run5: {
    color: 'orange',
    marginLeft: 8,
    marginTop: 135,
  },
  run6: {
    marginTop: 40,
    marginLeft: 3,
    fontSize: 15,
  },
  ru: {
    marginTop: 56,
    color: 'grey',
    marginLeft: 8,
  },
  r: {
    color: 'orange',
    marginTop: 134,
    marginLeft: 8,
  },
  hori: {
    height: 100,
    width: 90,
    backgroundColor: 'white',
    margin: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },
  cc: {
    height: 30,
    width: 30,
    marginTop: 35,
    marginLeft: 120,
    borderRightWidth: 2,
    borderColor: '#c0c0c0',
  },
  c1: {
    marginTop: 35,
    paddingLeft: 5,
  },
  show: {
    height: 100,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  hl: {
    borderWidth: 1,
    borderColor: `#c0c0c0`,
    backgroundColor: `#c0c0c0`,
    width: 500,
    marginTop: 10,
    flexDirection: 'row',
  },
  h2: {
    backgroundColor: `white`,
    marginVertical: 15,
    flexDirection: 'row',
  },
  semiContainer: {
    width: 108,
    height: 120,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  run: {
    textAlign: 'center',
    fontSize: 15,
  },
  run1: {
    textAlign: 'center',
    fontSize: 10,
  },
  l: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: `#c0c0c0`,
    margin: 5,
  },
  btnText: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 15,
  },
  btnText1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  btnMain: {
    borderColor: 'orange',
    borderWidth: 2,
    width: 100,
    alignItems: 'center',
    marginLeft: 220,
    marginTop: -40,
    borderRadius: 5,
    paddingVertical: 8,
  },
  btnMain1: {
    borderColor: 'orange',
    borderWidth: 2,
    width: 100,
    alignItems: 'center',
    marginLeft: 220,
    marginTop: -40,
    borderRadius: 5,
    backgroundColor: 'orange',
  },
  btnText3: {
    color: 'orange',

    fontSize: 10,
  },
  special: {
    color: 'grey',
    fontSize: 8,
    marginLeft: 50,
  },
});
