import React from 'react'
import { View, Button, FlatList, Text, StyleSheet } from 'react-native'

export default ({puntos, setVisibility}) => {

  return(
    <>
      <View>
        <FlatList 
          style = { styles.list }
          data = {puntos.map(x => x.name)}
          renderItem = {({item}) => <Text>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
      <View>
        <Button 
          // onPress={()=>console.log('click')}
          onPress={()=>setVisibility(false)}
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
  }
})
