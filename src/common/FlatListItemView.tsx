import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Mars} from '../types';

const styles = StyleSheet.create({
  root: {
    margin: 1,
    flex: 1,
    flexDirection: 'column',
    elevation: 3,
    justifyContent: 'center',
    padding: 12,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
});

interface Props {
  data: Mars;
  navigation?: any;
}

export default function FlatListItemView({
  data,
  navigation,
}: Props): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MarsDetails', {data: data})}>
      <View style={styles.root}>
        <Text>
          {data.camera.full_name ? data.camera.full_name : 'Unknown name'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
