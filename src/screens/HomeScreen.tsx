import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import * as imagesActions from '../store/actions/images';
import {useSelector, useDispatch} from 'react-redux';
import SearchInput from '../components/SearchInput';

const HomeScreen = (props: {navigation: any}) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images);
  const [value, setValue] = useState<string>('');
  const [page, setPage] = useState<number>(0);

  const fetchAllImages = useCallback(
    async p => {
      try {
        await dispatch(imagesActions.fetchImages(p));
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    fetchAllImages(page);
  }, [fetchAllImages, page]);

  const loadMoreRandomData = () => {
    setPage(page + 20);
  };

  const renderData = (itemData: {item: {images: {downsized: {url: any}}}}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IndividualImage', {
            image: itemData?.item?.images?.downsized?.url,
          });
        }}
        style={styles.gridItem}>
        <Image
          source={{uri: itemData?.item?.images?.downsized?.url}}
          style={styles.bgImg}
        />
      </TouchableOpacity>
    );
  };

  if (!images[0]) {
    return (
      <SafeAreaView style={styles.screen}>
        <ActivityIndicator size="large" color="orange" />
      </SafeAreaView>
    );
  }

  const handleSearch = async () => {
    try {
      await dispatch(imagesActions.searchImages(value, page));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <SearchInput
        value={value}
        onChangeText={(text: string) => setValue(text)}
        onPress={handleSearch}
        disabled={value === ''}
      />
      <FlatList
        data={images}
        keyExtractor={(item, index) => item.id}
        numColumns={3}
        renderItem={renderData}
        contentContainerStyle={{flexGrow: 1}}
        onEndReachedThreshold={1}
        onEndReached={loadMoreRandomData}
        initialNumToRender={20}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  gridItem: {
    backgroundColor: '#e1e4e8',
    width: 125,
    height: 120,
  },
  searchContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    margin: 8,
  },
  searchButton: {
    height: 45,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e4e8',
    // borderRadius: 20,
  },
});
export default HomeScreen;
