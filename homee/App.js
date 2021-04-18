import * as React from 'react';
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('screen');
const DATA = [
  {
    key: '1',
    title: 'FITNESS',
    para:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image:
      'https://cdn4.vectorstock.com/i/1000x1000/71/23/fitness-girl-on-treadmill-vector-14347123.jpg',
  },
  {
    key: '2',
    title: 'POWERLIFTING',
    para:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image:
      'https://us.123rf.com/450wm/yellowsdesign/yellowsdesign1812/yellowsdesign181200329/115223010-stock-vector-bodybuilder-with-barbell-deadlift-vector-image.jpg?ver=6',
  },
  {
    key: '3',
    title: 'YOGA',
    para:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image:
      'https://png.pngtree.com/png-vector/20190515/ourmid/pngtree-hand-drawn-yoga-fitness-exercise-girls-yoga-movements-png-image_1044163.jpg',
  },
];
const Indicator = ({scrollX}) => {
  return (
    <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderColor: 'black',
              backgroundColor: '#192478',
              margin: 10,
              opacity,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};

export default function Pages() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <View style={styles.top}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 300,
                    height: 350,
                    resizeMode: 'contain',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
              <View style={styles.texttContainer}>
                <Text style={styles.textt}>{item.title}</Text>
                <Text style={styles.writee}>{item.para}</Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  top: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 150,
    marginRight: 50,
  },
  textt: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 100,
    margin: 10,
    marginHorizontal: 120,
    color: '#110945',
  },

  writee: {
    width: 300,
    marginTop: 20,
    marginHorizontal: 40,
    fontSize: 13,
    justifyContent: 'center',
    color: '#110945',
  },
});
