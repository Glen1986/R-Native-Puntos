import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Map, Modal, Panel, Input } from './src/components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)

  const handleLongPress = ({nativeEvent}) => {
    // const newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate })
    // setPuntos(newPuntos)
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) =>{
    setNombre(text)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress = { handleLongPress }/>
      <Panel/>
      <Modal visibility={visibility}>
        <Input 
          title = 'Nombre' 
          placeholder = 'Lugar'
          onChangeText = {handleChangeText}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});