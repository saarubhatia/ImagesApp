import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DrawerButton = (props: {
  onPress:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
  iconName: ImageSourcePropType;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      {props?.iconName && (
        <Image source={props.iconName} style={{width: 30, height: 30}} />
      )}
      <Text style={{...styles.buttonText, ...{color: 'orange'}}}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 5,
  },
});

export default DrawerButton;
