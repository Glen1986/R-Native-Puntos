import React from 'react'
import { View, Button, FlatList, Text, StyleSheet } from 'react-native'

export default ({puntos, setVisibility, closeModal}) => {

  return(
    <>
      <View>
        <FlatList 
          style = { styles.list }
          data = {puntos.map(x => x.name)}
          renderItem = {({item}) => <View style={styles.item}><Text key={item}>{item}</Text></View>}
          keyExtractor={item => item}
        />
      </View>
      <View>
        <Button 
          // onPress={()=>console.log('click')}
          // onPress={()=>setVisibility(false)}
          onPress={closeModal}
          title='Cerrar'
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    width:'140%',
    textAlign:'center',
    padding:2,
    boxSizing:'border-box',
  },
  item:{
    borderBottomWidth: 1,
    borderBottomColor:'#ddd',
    height:40,
    width:250,
    padding:10,
  }
})
