import React from 'react'
import {StyleSheet, View, Button } from 'react-native'

export default ({onPressLeft, textLeft, toggleFilterPoits})=>{
  return(
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft}/>
      <Button onPress={toggleFilterPoits} title="mostrar/ocultar"/>
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex:1,
    flexDirection:"row",
    backgroundColor:"#eee",
    alignItems:"center",
    justifyContent:"center",
  },
})
