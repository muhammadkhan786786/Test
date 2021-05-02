import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marsImage: {
    height: windowHeight / 2,
    width: windowWidth,
  },
});

export default function ({navigation}: any): JSX.Element {
  const {state} = navigation;
  const imageUrl = state.params.data.img_src;

  return (
    <View style={styles.container}>
      <Image
        resizeMethod="auto"
        style={styles.marsImage}
        source={{uri: imageUrl}}
      />
    </View>
  );
}
