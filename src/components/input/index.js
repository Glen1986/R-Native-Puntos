import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';

export default ({title, ...rest}) => {
  return(
    <View style={styles.wrapper}>
     <Text>{title}</Text>
     <TextInput style={styles.input}{...rest}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    padding:8,
    marginBottom:4,
  },
  input:{
    paddingTop:4,
    paddingBottom:4,
  }
})
