import React from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';

export default ({children, visibility}) => {
  return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
      >
        <View style={styles.center}>
          <View style={styles.modalView}>
            {children}
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  center:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  modalView: {
    backgroundColor:'#fff',
    borderRadius: 4,
    padding:12,
    boxSizing:'borderBox',
    height:'auto',
    width:'80%',
    shadowColor:'#000',
    shadowOffset: {
        width:0,
        height:3,  
      },
  },
})
