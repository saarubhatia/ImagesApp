import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import * as imagesActions from '../store/actions/images';
import {useSelector, useDispatch} from 'react-redux';
import SearchInput from '../components/SearchInput';

const HomeScreen = () => {
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
      <View style={styles.gridItem}>
        <Image
          source={{uri: itemData?.item?.images?.downsized?.url}}
          style={styles.bgImg}
        />
      </View>
    );
  };

  if (!images[0]) {
    return (
      <SafeAreaView style={styles.screen}>
        <ActivityIndicator size="large" />
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
      <View style={styles.searchContainer}>
        <SearchInput
          value={value}
          onChangeText={(text: string) => setValue(text)}
        />
        <TouchableOpacity
          onPress={() => {
            handleSearch();
          }}
          disabled={value === ''}
          style={styles.searchButton}
          activeOpacity={0.7}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
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
  },
  gridItem: {
    width: 120,
    height: 120,
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    margin: 8,
  },
  searchButton: {
    height: 50,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
