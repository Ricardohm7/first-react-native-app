import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

// const StyledButton = (props: {type: string, content: string, onPress: () => void}):JSX.Element => {

const StyledButton = (props: { type: string, content: string, onPress: () => {} }): JSX.Element => {
  const { type, content, onPress } = props;
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';


  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton