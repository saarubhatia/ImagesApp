import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const SearchInput = props => {
  return (
    <>
      {/* <View style={{height: 'auto', width: 'auto'}}> */}
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        style={styles.input}
        placeholder="Search here"
      />
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    minWidth: '80%',
    height: 45,

    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 0.5,
    padding: 10,
    fontSize: 18,
  },
});
export default SearchInput;
