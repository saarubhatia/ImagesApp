import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, SafeAreaView, ActivityIndicator} from 'react-native';

const IndividualImageScreen = (props: {
  route: {params: {image: any}};
  navigation: any;
}) => {
  const {image} = props.route.params;

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Individual Image',
    });
  }, [props.navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      {loading && <ActivityIndicator size="large" color="orange" />}
      <Image
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={() => setLoading(false)}
        source={{uri: image}}
        style={{height: '50%', width: '98%'}}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default IndividualImageScreen;
