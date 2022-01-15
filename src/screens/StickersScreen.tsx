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

const StickersScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const stickers = useSelector(state => state.images.stickers);
  const [value, setValue] = useState<string>('');
  const [page, setPage] = useState<number>(0);

  const fetchAllStickers = useCallback(
    async p => {
      try {
        await dispatch(imagesActions.fetchStickers(p));
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    fetchAllStickers(page);
  }, [fetchAllStickers, page]);

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

  if (!stickers[0]) {
    return (
      <SafeAreaView style={styles.screen}>
        <ActivityIndicator size="large" color="orange" />
      </SafeAreaView>
    );
  }

  const handleSearch = async () => {
    try {
      await dispatch(imagesActions.searchStickers(value, page));
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
        data={stickers}
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
  bgImg: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  gridItem: {
    backgroundColor: '#e1e4e8',
    width: 120,
    height: 120,
  },
});
export default StickersScreen;
