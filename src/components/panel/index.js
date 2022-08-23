import React from 'react'
import {StyleSheet, View, Button } from 'react-native'

export default ()=>{
  return(
    <View style={styles.panel}>
      <Button title="lista"/>
      <Button title="mostrar/ocultar"/>
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
