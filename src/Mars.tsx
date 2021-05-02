import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import {getMarsData} from './api/getDataFromApi';
import {MarsDataType} from './types';
import FlatListItemView from './common/FlatListItemView';

const styles = StyleSheet.create({
  infoView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const API_URL =
  'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=wITUJduZzNOHRASn9DV5PUhsYDOKXYWZldgqGJlQ';

export default function Mars({navigation}: {navigation?: any}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<MarsDataType | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      const response = await getMarsData(API_URL);

      if (response) {
        setData(response);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(true);
    }
    getData();
  }, []);

  if (loading && !data) {
    return (
      <View style={styles.infoView}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!loading && error) {
    return (
      <View style={styles.infoView}>
        <Text>Error while loading the data</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data?.photos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <FlatListItemView data={item} navigation={navigation} />
      )}
    />
  );
}
