import React, {useState} from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { Map, Modal, Panel, List, Input } from './src/components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [filterVisibility, setFilterVisibility] = useState('new_punto')

  const handleLongPress = ({nativeEvent}) => {
    const newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate })
    setPuntos(newPuntos)
    setFilterVisibility('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) =>{
    setNombre(text)
  }
  const handleSubmit = () => {
          console.log(nombre.length)
      const newPunto = { coordinate: puntoTemp, name: nombre };
      setPuntos(puntos.concat(newPunto))
      setVisibility(false)
      setNombre('')
      };
  const handleLista = () => {
    setFilterVisibility('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress = { handleLongPress }/>
      <Panel setVisibility={setVisibility} onPressLeft={ handleLista } textLeft='Lista'/>
      <Modal 
        visibility={visibility}
      >
        {filterVisibility === 'new_punto' ?
          <>
        <Input 
          title = 'Nombre' 
          placeholder = 'Lugar'
          onChangeText = {handleChangeText}
        />
      <Button title='aceptar'
        onPress={handleSubmit}
        />
          </>
          :
          <List 
            puntos={puntos} 
            setVisibility={setVisibility}
        />}
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
