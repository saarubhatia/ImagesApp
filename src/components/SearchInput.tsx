import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const SearchInput = props => {
  const {onPress, disabled} = props;
  return (
    <>
      <View style={styles.searchContainer}>
        <View>
          <Image
            style={{height: 20, width: 20}}
            source={require('../assets/icons8-search-50.png')}
          />
        </View>
        <View>
          <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            style={styles.input}
            placeholder="Search here"
          />
        </View>
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          style={styles.searchButton}
          activeOpacity={0.7}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    minWidth: '75%',
    height: 45,
    width: '100%',
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '98%',
    alignItems: 'center',
    margin: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    paddingHorizontal: 5,
  },
  searchButton: {
    height: 50,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    left: 5,
  },
});
export default SearchInput;
